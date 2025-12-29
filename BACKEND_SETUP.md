# 🚀 iPANAC Backend Integration - Complete Setup Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Detailed Setup Instructions](#detailed-setup-instructions)
4. [Frontend Deployment](#frontend-deployment)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This project now has a complete backend system that:
- ✅ Captures form submissions from 3 forms (Contact, Enquire, Quick Quote)
- ✅ Sends email notifications to `relocation@ipanacllc.com`
- ✅ Uses serverless AWS infrastructure (Lambda + API Gateway + SES)
- ✅ Works seamlessly with your existing S3 deployment workflow

### Architecture
```
User submits form → API Gateway → Lambda Function → AWS SES → Email sent
                                                                    ↓
                                                      relocation@ipanacllc.com
```

### What Changed in Your Project
- ✅ Created `backend/` folder with Lambda function
- ✅ Updated all 3 forms (Contactus.jsx, enquire.jsx, quickquote.jsx)
- ✅ Added API service layer (`src/services/api.js`)
- ✅ Added environment configuration files (`.env.production`)
- ✅ Your build/deploy workflow remains unchanged!

---

## ⚡ Quick Start

### Option 1: Automated Setup (Recommended)

```bash
# Step 1: Navigate to backend folder
cd backend

# Step 2: Run automated setup (Linux/Mac)
./setup-aws.sh

# OR for Windows
setup-aws.bat
```

### Option 2: Manual Setup

Follow the detailed instructions in `backend/DEPLOYMENT_GUIDE.md`

---

## 📝 Detailed Setup Instructions

### Prerequisites

Before starting, ensure you have:
- ✅ AWS CLI installed and configured
- ✅ Node.js and npm installed
- ✅ AWS account with appropriate permissions
- ✅ Access to verify email in `relocation@ipanacllc.com`

### Step 1: Verify Email in AWS SES

AWS SES requires email verification before sending:

```bash
# Run this command
aws ses verify-email-identity --email-address relocation@ipanacllc.com --region ap-south-1
```

**IMPORTANT**: Check the inbox of `relocation@ipanacllc.com` and click the verification link sent by AWS.

### Step 2: Set Up AWS Infrastructure

#### Option A: Automated (Easiest)

```bash
cd backend
./setup-aws.sh
```

This script will:
1. Create IAM role for Lambda
2. Deploy Lambda function
3. Create API Gateway
4. Configure everything automatically
5. Output your API endpoint URL

#### Option B: Manual Setup

See `backend/DEPLOYMENT_GUIDE.md` for detailed manual instructions.

### Step 3: Update Frontend Configuration

After AWS setup completes, you'll get an API endpoint URL like:
```
https://abc123xyz.execute-api.ap-south-1.amazonaws.com/prod/submit
```

Update `.env.production` in the project root:

```bash
VITE_API_ENDPOINT=https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit
```

Replace `YOUR_API_ID` with your actual API Gateway ID.

---

## 🌐 Frontend Deployment

Your deployment workflow remains **exactly the same**:

```bash
# Step 1: Build the frontend (includes environment variables)
npm run build

# Step 2: Deploy to S3
aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
```

That's it! Your forms will now send emails automatically.

---

## ✅ Testing

### Test Forms After Deployment

1. Visit your website: https://ipanacrelocation.com
2. Navigate to any form:
   - Contact Us page
   - Enquire/Registration page
   - Quick Quote page
3. Fill out and submit the form
4. Check email at `relocation@ipanacllc.com`

### Expected Behavior

- ✅ Form shows "Submitting..." while processing
- ✅ Success message appears: "Thank you! We will contact you soon."
- ✅ Form fields are cleared
- ✅ Email arrives at `relocation@ipanacllc.com` within seconds

### Test Locally (Optional)

```bash
# Run development server
npm run dev

# Note: Local testing won't send actual emails unless you update .env.development
```

---

## 🔧 Troubleshooting

### Issue 1: Email Not Received

**Symptoms**: Form submits successfully but no email arrives

**Solutions**:
1. Check email was verified in AWS SES:
   ```bash
   aws ses get-identity-verification-attributes --identities relocation@ipanacllc.com --region ap-south-1
   ```
   
2. Check if AWS SES is in sandbox mode:
   - AWS Console → SES → Account Dashboard
   - If in sandbox, request production access
   
3. Check Lambda logs:
   - AWS Console → CloudWatch → Log groups → `/aws/lambda/ipanac-form-handler`

### Issue 2: CORS Errors

**Symptoms**: Browser console shows CORS error

**Solutions**:
1. Verify API Gateway has OPTIONS method configured
2. Check Lambda function returns correct CORS headers
3. Redeploy API Gateway:
   ```bash
   aws apigateway create-deployment --rest-api-id YOUR_API_ID --stage-name prod --region ap-south-1
   ```

### Issue 3: 500 Internal Server Error

**Symptoms**: Form submission fails with 500 error

**Solutions**:
1. Check Lambda CloudWatch logs
2. Verify Lambda has correct IAM permissions (SES access)
3. Ensure email is verified in SES

### Issue 4: Build Fails After Changes

**Symptoms**: `npm run build` shows errors

**Solutions**:
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. Check for syntax errors in updated files

### Issue 5: Old Forms Still Appear After Deployment

**Symptoms**: Forms don't have new functionality

**Solutions**:
1. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
2. Verify S3 sync completed successfully
3. Check `.env.production` has correct API endpoint
4. Rebuild and redeploy:
   ```bash
   npm run build
   aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1 --delete
   ```

---

## 🔄 Updating Lambda Function

If you need to modify the email format or Lambda logic:

```bash
cd backend

# Make your changes to lambda/formHandler.js

# Deploy update
./deploy.bat  # Windows
# OR
./deploy.sh   # Linux/Mac
```

---

## 💰 Cost Estimation

Your backend infrastructure is serverless and extremely cost-effective:

| Service | Free Tier | Cost After Free Tier |
|---------|-----------|---------------------|
| Lambda | 1M requests/month | $0.20 per 1M requests |
| API Gateway | 1M requests/month | $1.00 per 1M requests |
| SES | 62,000 emails/month | $0.10 per 1,000 emails |

**Estimated monthly cost**: Likely $0 for typical website traffic (covered by free tier)

---

## 🔒 Security Notes

1. **Email Verification**: Only verified emails can send via SES
2. **CORS**: Currently allows all origins - consider restricting in production
3. **Rate Limiting**: Consider adding API Gateway rate limiting
4. **Data Privacy**: Form data is not stored, only sent via email

---

## 📞 Support

### Getting Help

1. **Check Logs**: CloudWatch Logs show detailed error messages
2. **Test Locally**: Use `npm run dev` to test form UI changes
3. **AWS Console**: Monitor Lambda executions and SES sending stats

### Common Commands

```bash
# Check AWS CLI configuration
aws sts get-caller-identity

# View Lambda function
aws lambda get-function --function-name ipanac-form-handler --region ap-south-1

# List API Gateways
aws apigateway get-rest-apis --region ap-south-1

# Check SES verified emails
aws ses list-verified-email-addresses --region ap-south-1

# View Lambda logs
aws logs tail /aws/lambda/ipanac-form-handler --follow --region ap-south-1
```

---

## 🎉 Success Checklist

Before considering the setup complete, verify:

- [ ] AWS SES email is verified
- [ ] Lambda function is deployed
- [ ] API Gateway is created and deployed
- [ ] `.env.production` has correct API endpoint
- [ ] Frontend is built with `npm run build`
- [ ] Frontend is deployed to S3
- [ ] Test form submission works
- [ ] Email is received at `relocation@ipanacllc.com`

---

## 📚 Additional Resources

- **Backend Documentation**: `backend/DEPLOYMENT_GUIDE.md`
- **Lambda Code**: `backend/lambda/formHandler.js`
- **API Service**: `src/services/api.js`
- **AWS SES Docs**: https://docs.aws.amazon.com/ses/
- **AWS Lambda Docs**: https://docs.aws.amazon.com/lambda/

---

## 🔄 Deployment Workflow Summary

```bash
# Regular deployment (after AWS is set up once)
npm run build
aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1

# That's it! Backend is serverless and always available.
```

**Note**: You only need to set up AWS infrastructure once. After that, your deployment workflow is unchanged!

---

## ✨ What's New in Each Form

### Contact Form (`Contactus.jsx`)
- Captures: Name, Email, Phone, Message
- Sends formatted email with contact details

### Registration/Enquire Form (`enquire.jsx`)
- Captures: Name, Email, Phone, Relocation Type, Locations, Date, Details
- Sends detailed relocation inquiry

### Quick Quote Form (`quickquote.jsx`)
- Captures: All above + Selected items (Electronics, Furniture, etc.)
- Sends comprehensive quote request

All forms now have:
- Real-time validation
- Loading states
- Success/error messages
- Form reset after submission

---

**Your website is now production-ready with a full backend system! 🎊**
