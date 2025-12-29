#!/bin/bash

# Automated AWS Backend Setup Script for iPANAC
# This script sets up Lambda, API Gateway, and SES

set -e

echo "========================================="
echo "   iPANAC Backend Automated Setup"
echo "========================================="
echo ""

# Configuration
FUNCTION_NAME="ipanac-form-handler"
API_NAME="ipanac-forms-api"
REGION="ap-south-1"
STAGE_NAME="prod"
EMAIL="relocation@ipanacllc.com"

# Navigate to script directory
cd "$(dirname "$0")"

# Check prerequisites
echo "📋 Checking prerequisites..."
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found. Please install it first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js first."
    exit 1
fi

# Get AWS account ID
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo "✓ AWS Account ID: $ACCOUNT_ID"
echo ""

# Step 1: Verify SES Email
echo "📧 Step 1: Verifying SES email address..."
aws ses verify-email-identity --email-address $EMAIL --region $REGION 2>/dev/null || true
echo "✓ Verification email sent to $EMAIL"
echo "⚠️  IMPORTANT: Check $EMAIL inbox and click the verification link!"
echo ""
read -p "Press Enter after you've verified the email..."
echo ""

# Step 2: Create IAM Role
echo "🔐 Step 2: Creating IAM role..."

cat > /tmp/trust-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

ROLE_NAME="ipanac-lambda-role"
if aws iam get-role --role-name $ROLE_NAME &>/dev/null; then
    echo "✓ Role already exists"
else
    aws iam create-role \
        --role-name $ROLE_NAME \
        --assume-role-policy-document file:///tmp/trust-policy.json \
        --description "Role for iPANAC Lambda function"
    
    aws iam attach-role-policy \
        --role-name $ROLE_NAME \
        --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
    
    aws iam attach-role-policy \
        --role-name $ROLE_NAME \
        --policy-arn arn:aws:iam::aws:policy/AmazonSESFullAccess
    
    echo "✓ IAM role created"
    echo "⏳ Waiting for role to propagate..."
    sleep 10
fi

ROLE_ARN="arn:aws:iam::$ACCOUNT_ID:role/$ROLE_NAME"
echo "✓ Role ARN: $ROLE_ARN"
echo ""

# Step 3: Deploy Lambda
echo "🚀 Step 3: Deploying Lambda function..."
npm install
zip -r function.zip lambda/ node_modules/ > /dev/null 2>&1

if aws lambda get-function --function-name $FUNCTION_NAME --region $REGION &>/dev/null; then
    aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://function.zip \
        --region $REGION > /dev/null
    echo "✓ Lambda function updated"
else
    aws lambda create-function \
        --function-name $FUNCTION_NAME \
        --runtime nodejs18.x \
        --role $ROLE_ARN \
        --handler lambda/formHandler.handler \
        --zip-file fileb://function.zip \
        --timeout 30 \
        --memory-size 256 \
        --region $REGION > /dev/null
    echo "✓ Lambda function created"
fi

LAMBDA_ARN=$(aws lambda get-function --function-name $FUNCTION_NAME --region $REGION --query 'Configuration.FunctionArn' --output text)
echo "✓ Lambda ARN: $LAMBDA_ARN"
echo ""

# Step 4: Create API Gateway
echo "🌐 Step 4: Setting up API Gateway..."

# Create or get API
API_ID=$(aws apigateway get-rest-apis --region $REGION --query "items[?name=='$API_NAME'].id" --output text)

if [ -z "$API_ID" ]; then
    API_ID=$(aws apigateway create-rest-api \
        --name $API_NAME \
        --description "API for iPANAC form submissions" \
        --region $REGION \
        --query 'id' \
        --output text)
    echo "✓ API Gateway created: $API_ID"
else
    echo "✓ API Gateway exists: $API_ID"
fi

# Get root resource
ROOT_ID=$(aws apigateway get-resources --rest-api-id $API_ID --region $REGION --query 'items[?path==`/`].id' --output text)

# Create /submit resource
SUBMIT_ID=$(aws apigateway get-resources --rest-api-id $API_ID --region $REGION --query 'items[?path==`/submit`].id' --output text)

if [ -z "$SUBMIT_ID" ]; then
    SUBMIT_ID=$(aws apigateway create-resource \
        --rest-api-id $API_ID \
        --parent-id $ROOT_ID \
        --path-part submit \
        --region $REGION \
        --query 'id' \
        --output text)
    echo "✓ /submit resource created"
else
    echo "✓ /submit resource exists"
fi

# Create POST method
aws apigateway put-method \
    --rest-api-id $API_ID \
    --resource-id $SUBMIT_ID \
    --http-method POST \
    --authorization-type NONE \
    --region $REGION &>/dev/null || true

# Create OPTIONS method for CORS
aws apigateway put-method \
    --rest-api-id $API_ID \
    --resource-id $SUBMIT_ID \
    --http-method OPTIONS \
    --authorization-type NONE \
    --region $REGION &>/dev/null || true

# Integrate POST with Lambda
aws apigateway put-integration \
    --rest-api-id $API_ID \
    --resource-id $SUBMIT_ID \
    --http-method POST \
    --type AWS_PROXY \
    --integration-http-method POST \
    --uri "arn:aws:apigateway:$REGION:lambda:path/2015-03-31/functions/$LAMBDA_ARN/invocations" \
    --region $REGION &>/dev/null || true

# Grant permission
aws lambda add-permission \
    --function-name $FUNCTION_NAME \
    --statement-id apigateway-invoke-$(date +%s) \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:$REGION:$ACCOUNT_ID:$API_ID/*" \
    --region $REGION &>/dev/null || true

# Deploy API
aws apigateway create-deployment \
    --rest-api-id $API_ID \
    --stage-name $STAGE_NAME \
    --region $REGION > /dev/null

echo "✓ API Gateway configured and deployed"
echo ""

# Final output
API_ENDPOINT="https://$API_ID.execute-api.$REGION.amazonaws.com/$STAGE_NAME/submit"

echo "========================================="
echo "   ✅ Setup Complete!"
echo "========================================="
echo ""
echo "📝 Your API Endpoint:"
echo "   $API_ENDPOINT"
echo ""
echo "📝 Next Steps:"
echo "   1. Create .env.production in project root:"
echo "      VITE_API_ENDPOINT=$API_ENDPOINT"
echo ""
echo "   2. Build and deploy frontend:"
echo "      npm run build"
echo "      aws s3 sync dist s3://ipanacrelocation.com --region $REGION"
echo ""
echo "   3. Test your forms on the website"
echo ""
echo "========================================="
