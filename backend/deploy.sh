#!/bin/bash

# iPANAC Backend Deployment Script
# This script automates the deployment of Lambda function

set -e  # Exit on error

echo "================================"
echo "iPANAC Backend Deployment Script"
echo "================================"
echo ""

# Configuration
FUNCTION_NAME="ipanac-form-handler"
REGION="ap-south-1"
RUNTIME="nodejs18.x"

# Navigate to backend directory
cd "$(dirname "$0")"

echo "✓ Current directory: $(pwd)"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

echo "✓ AWS CLI found"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
else
    echo "✓ Dependencies already installed"
    echo ""
fi

# Create deployment package
echo "📦 Creating deployment package..."
rm -f function.zip
zip -r function.zip lambda/ node_modules/ > /dev/null 2>&1
echo "✓ Deployment package created: function.zip"
echo ""

# Check if function exists
echo "🔍 Checking if Lambda function exists..."
if aws lambda get-function --function-name $FUNCTION_NAME --region $REGION > /dev/null 2>&1; then
    echo "✓ Function exists, updating code..."
    aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://function.zip \
        --region $REGION > /dev/null
    echo "✓ Lambda function updated successfully!"
else
    echo "❌ Function does not exist."
    echo "Please create the function first using the DEPLOYMENT_GUIDE.md instructions."
    echo "You need to:"
    echo "  1. Create IAM role"
    echo "  2. Verify email in SES"
    echo "  3. Create Lambda function"
    echo "  4. Set up API Gateway"
    exit 1
fi

echo ""
echo "================================"
echo "✅ Deployment completed successfully!"
echo "================================"
echo ""
echo "📝 Next steps:"
echo "  1. Test the Lambda function in AWS Console"
echo "  2. Verify API Gateway endpoint is working"
echo "  3. Deploy frontend with: npm run build && aws s3 sync dist s3://ipanacrelocation.com"
echo ""
