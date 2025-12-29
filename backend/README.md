# iPANAC Backend - Form Submission System

This backend system handles form submissions from the iPANAC Relocation website and sends email notifications using AWS serverless infrastructure.

## 🏗️ Architecture

- **AWS Lambda**: Processes form submissions
- **API Gateway**: HTTPS endpoint for forms
- **AWS SES**: Sends email notifications
- **Region**: ap-south-1 (Mumbai)

## 📁 Files

```
backend/
├── lambda/
│   └── formHandler.js       # Lambda function (Node.js)
├── package.json             # Dependencies
├── setup-aws.sh            # Automated setup (Linux/Mac)
├── deploy.sh               # Update Lambda (Linux/Mac)
├── deploy.bat              # Update Lambda (Windows)
├── DEPLOYMENT_GUIDE.md     # Detailed setup instructions
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- AWS CLI installed and configured
- Node.js and npm installed
- Access to verify email: `relocation@ipanacllc.com`

### Setup (First Time)

```bash
# Run automated setup
./setup-aws.sh      # Linux/Mac

# This will:
# 1. Create IAM role
# 2. Deploy Lambda function
# 3. Create API Gateway
# 4. Output API endpoint URL
```

### Update Lambda (After Changes)

```bash
# Deploy updated Lambda code
./deploy.sh         # Linux/Mac
./deploy.bat        # Windows
```

## 📝 What It Does

### Supported Forms
1. **Contact Form** - Basic contact information
2. **Registration/Enquire Form** - Detailed relocation inquiry
3. **Quick Quote Form** - Quote request with item selection

### Email Notifications
All submissions send formatted HTML emails to: `relocation@ipanacllc.com`

### Email Template Features
- Professional HTML formatting
- Color-coded by form type
- All form fields included
- Timestamp (UAE timezone)

## 🔧 Configuration

### Lambda Function
- **Runtime**: Node.js 18.x
- **Memory**: 256 MB
- **Timeout**: 30 seconds
- **Handler**: `lambda/formHandler.handler`

### Dependencies
- `aws-sdk`: AWS service integration

### Environment Variables
Lambda automatically has AWS credentials through IAM role.

## 📧 Email Verification

Before sending emails, verify in AWS SES:

```bash
aws ses verify-email-identity --email-address relocation@ipanacllc.com --region ap-south-1
```

Check inbox and click verification link.

## 🔄 Deployment Workflow

### Initial Setup (Once)
1. Run `./setup-aws.sh`
2. Copy API endpoint URL
3. Update `../.env.production` with endpoint
4. Deploy frontend

### Regular Updates (As Needed)
1. Edit `lambda/formHandler.js`
2. Run `./deploy.sh`
3. No frontend changes needed

## 🧪 Testing

### Test Lambda Directly
```bash
# View logs
aws logs tail /aws/lambda/ipanac-form-handler --follow --region ap-south-1
```

### Test via API
```bash
curl -X POST https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "formData": {
      "fullName": "Test User",
      "email": "test@example.com",
      "phone": "+971501234567",
      "message": "Test message"
    }
  }'
```

## 📊 Monitoring

### CloudWatch Logs
- Lambda execution logs
- Error traces
- Request/response data

### AWS Console
- Lambda → Functions → ipanac-form-handler
- API Gateway → ipanac-forms-api
- SES → Verified identities

## 🐛 Troubleshooting

### Common Issues

**Email not sending**
- Verify email in SES Console
- Check Lambda CloudWatch logs
- Ensure IAM role has SES permissions

**CORS errors**
- Verify OPTIONS method in API Gateway
- Check Lambda returns CORS headers
- Redeploy API Gateway

**500 errors**
- Check Lambda logs in CloudWatch
- Verify IAM permissions
- Ensure email is verified

### Debug Commands

```bash
# Get Lambda info
aws lambda get-function --function-name ipanac-form-handler --region ap-south-1

# List API Gateways
aws apigateway get-rest-apis --region ap-south-1

# Check SES status
aws ses get-identity-verification-attributes --identities relocation@ipanacllc.com --region ap-south-1

# View recent logs
aws logs tail /aws/lambda/ipanac-form-handler --since 1h --region ap-south-1
```

## 💰 Costs

**AWS Free Tier** (first 12 months)
- Lambda: 1M requests/month FREE
- API Gateway: 1M requests/month FREE
- SES: 62,000 emails/month FREE

**After Free Tier**
- Lambda: $0.20/1M requests
- API Gateway: $1.00/1M requests  
- SES: $0.10/1,000 emails

Expected cost: **$0** (typical website traffic)

## 📚 Documentation

- **Quick Reference**: `../DEPLOYMENT.md`
- **Full Setup Guide**: `../BACKEND_SETUP.md`
- **Detailed Instructions**: `DEPLOYMENT_GUIDE.md`

## 🔒 Security

- IAM role-based permissions
- HTTPS only (API Gateway)
- CORS configured
- No data storage
- Email verification required

## ✅ Checklist

Setup complete when:
- [ ] Lambda function deployed
- [ ] API Gateway created
- [ ] Email verified in SES
- [ ] API endpoint added to `.env.production`
- [ ] Frontend deployed
- [ ] Test forms work
- [ ] Emails received

## 🆘 Need Help?

See `../BACKEND_SETUP.md` for comprehensive troubleshooting and detailed instructions.
