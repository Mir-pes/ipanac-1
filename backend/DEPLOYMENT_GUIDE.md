# iPANAC Backend Setup Guide

## Overview
This backend system handles form submissions from your website and sends emails to your client's email address using AWS Lambda and SES.

## Architecture
- **Frontend**: Static React site hosted on S3
- **Backend**: AWS Lambda function triggered via API Gateway
- **Email**: AWS SES (Simple Email Service)

## Prerequisites
1. AWS CLI installed and configured
2. AWS Account with appropriate permissions
3. Verified email address in AWS SES

---

## Step 1: Verify Email in AWS SES

Before deploying, you must verify the sender email address in AWS SES:

```bash
# Navigate to AWS SES in the AWS Console (ap-south-1 region)
# OR use AWS CLI:
aws ses verify-email-identity --email-address relocation@ipanacllc.com --region ap-south-1
```

**Important**: Check the inbox of `relocation@ipanacllc.com` and click the verification link sent by AWS.

---

## Step 2: Create IAM Role for Lambda

1. Go to AWS IAM Console → Roles → Create Role
2. Select "AWS Service" → "Lambda"
3. Attach these policies:
   - `AWSLambdaBasicExecutionRole`
   - `AmazonSESFullAccess` (or create a custom policy with ses:SendEmail)
4. Name it: `ipanac-lambda-role`
5. Copy the Role ARN (you'll need it later)

---

## Step 3: Deploy Lambda Function

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create deployment package
zip -r function.zip lambda/ node_modules/

# Create Lambda function (replace ROLE_ARN with your IAM role ARN)
aws lambda create-function \
  --function-name ipanac-form-handler \
  --runtime nodejs18.x \
  --role ROLE_ARN \
  --handler lambda/formHandler.handler \
  --zip-file fileb://function.zip \
  --timeout 30 \
  --memory-size 256 \
  --region ap-south-1

# If function already exists, update it:
aws lambda update-function-code \
  --function-name ipanac-form-handler \
  --zip-file fileb://function.zip \
  --region ap-south-1
```

---

## Step 4: Create API Gateway

```bash
# Create REST API
aws apigateway create-rest-api \
  --name ipanac-forms-api \
  --description "API for iPANAC form submissions" \
  --region ap-south-1
```

This will return an API ID. Save it as `API_ID`.

```bash
# Get the root resource ID
aws apigateway get-resources \
  --rest-api-id API_ID \
  --region ap-south-1
```

Save the root resource `id` as `ROOT_RESOURCE_ID`.

```bash
# Create /submit resource
aws apigateway create-resource \
  --rest-api-id API_ID \
  --parent-id ROOT_RESOURCE_ID \
  --path-part submit \
  --region ap-south-1
```

Save the new resource `id` as `SUBMIT_RESOURCE_ID`.

```bash
# Create POST method
aws apigateway put-method \
  --rest-api-id API_ID \
  --resource-id SUBMIT_RESOURCE_ID \
  --http-method POST \
  --authorization-type NONE \
  --region ap-south-1

# Enable CORS - OPTIONS method
aws apigateway put-method \
  --rest-api-id API_ID \
  --resource-id SUBMIT_RESOURCE_ID \
  --http-method OPTIONS \
  --authorization-type NONE \
  --region ap-south-1

# Get Lambda ARN
LAMBDA_ARN=$(aws lambda get-function --function-name ipanac-form-handler --region ap-south-1 --query 'Configuration.FunctionArn' --output text)

# Integrate POST with Lambda
aws apigateway put-integration \
  --rest-api-id API_ID \
  --resource-id SUBMIT_RESOURCE_ID \
  --http-method POST \
  --type AWS_PROXY \
  --integration-http-method POST \
  --uri "arn:aws:apigateway:ap-south-1:lambda:path/2015-03-31/functions/$LAMBDA_ARN/invocations" \
  --region ap-south-1

# Grant API Gateway permission to invoke Lambda
aws lambda add-permission \
  --function-name ipanac-form-handler \
  --statement-id apigateway-invoke \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --source-arn "arn:aws:execute-api:ap-south-1:YOUR_ACCOUNT_ID:API_ID/*" \
  --region ap-south-1

# Deploy API
aws apigateway create-deployment \
  --rest-api-id API_ID \
  --stage-name prod \
  --region ap-south-1
```

Your API endpoint will be:
```
https://API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit
```

---

## Step 5: Update Frontend Environment Variables

Create/update `.env.production` in your project root:

```
VITE_API_ENDPOINT=https://API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit
```

Replace `API_ID` with your actual API Gateway ID.

---

## Step 6: Deploy Frontend

Your normal deployment process remains unchanged:

```bash
# Build the frontend
npm run build

# Deploy to S3
aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
```

---

## Testing

After deployment, test your forms:
1. Go to your website
2. Fill out any of the three forms
3. Submit the form
4. Check the email inbox for `relocation@ipanacllc.com`

---

## Troubleshooting

### Email not sending?
- Verify the email address in AWS SES Console
- Check if you're in SES Sandbox mode (requires verifying recipient emails too)
- Request production access: AWS SES Console → Account Dashboard → Request Production Access

### API errors?
- Check CloudWatch Logs: AWS Console → CloudWatch → Log groups → `/aws/lambda/ipanac-form-handler`
- Verify Lambda has correct IAM permissions
- Check API Gateway deployment

### CORS errors?
- Ensure OPTIONS method is configured in API Gateway
- Verify Lambda returns correct CORS headers

---

## Updating Lambda Function

When you make changes to the Lambda function:

```bash
cd backend
zip -r function.zip lambda/ node_modules/
aws lambda update-function-code \
  --function-name ipanac-form-handler \
  --zip-file fileb://function.zip \
  --region ap-south-1
```

---

## Cost Estimation

- **Lambda**: ~$0.20/million requests (likely free under Free Tier)
- **API Gateway**: ~$1/million requests
- **SES**: $0.10/1000 emails
- **Total**: Minimal cost for typical website traffic

---

## Security Notes

1. The Lambda function uses AWS_PROXY integration for security
2. CORS is configured to allow all origins - restrict in production if needed
3. Consider adding rate limiting via API Gateway
4. SES in sandbox allows 200 emails/day - request production access for more

---

## Support

For issues, check:
- CloudWatch Logs: `/aws/lambda/ipanac-form-handler`
- API Gateway execution logs
- SES sending statistics
