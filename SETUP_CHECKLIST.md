# 🎯 Backend Setup - Step-by-Step Checklist

Follow these steps in order to get your backend system running.

---

## ☑️ Phase 1: Prerequisites (5 minutes)

- [ ] **Verify AWS CLI is installed**
  ```bash
  aws --version
  ```
  If not installed: https://aws.amazon.com/cli/

- [ ] **Verify AWS CLI is configured**
  ```bash
  aws sts get-caller-identity
  ```
  If not configured: `aws configure`

- [ ] **Verify Node.js is installed**
  ```bash
  node --version
  npm --version
  ```

- [ ] **Confirm you have access to the email**
  - Email: `relocation@ipanacllc.com`
  - You'll need to verify this in AWS SES

---

## ☑️ Phase 2: AWS Backend Setup (10-15 minutes)

### Option A: Automated Setup (Recommended)

- [ ] **Navigate to backend folder**
  ```bash
  cd backend
  ```

- [ ] **Run setup script**
  ```bash
  ./setup-aws.sh      # Linux/Mac
  # OR
  setup-aws.bat       # Windows
  ```

- [ ] **Verify email when prompted**
  - Check inbox of `relocation@ipanacllc.com`
  - Click the verification link from AWS SES
  - Wait for confirmation

- [ ] **Copy the API endpoint URL from output**
  - Should look like: `https://abc123xyz.execute-api.ap-south-1.amazonaws.com/prod/submit`
  - Save this for the next step

### Option B: Manual Setup

- [ ] Follow detailed steps in `backend/DEPLOYMENT_GUIDE.md`

---

## ☑️ Phase 3: Configure Frontend (2 minutes)

- [ ] **Update .env.production file**
  - File location: Project root `/.env.production`
  - Replace `YOUR_API_ID` with your actual API Gateway ID
  - Example:
    ```
    VITE_API_ENDPOINT=https://abc123xyz.execute-api.ap-south-1.amazonaws.com/prod/submit
    ```

---

## ☑️ Phase 4: Deploy Frontend (5 minutes)

- [ ] **Build the project**
  ```bash
  npm run build
  ```
  - Should complete without errors
  - Creates `dist/` folder

- [ ] **Deploy to AWS S3**
  ```bash
  aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
  ```
  - Should upload all files successfully

---

## ☑️ Phase 5: Testing (5 minutes)

- [ ] **Test Contact Form**
  1. Go to: https://ipanacrelocation.com/contact
  2. Fill out the form
  3. Click Submit
  4. Verify success message appears
  5. Check email inbox

- [ ] **Test Registration/Enquire Form**
  1. Go to the registration page
  2. Fill out all fields
  3. Submit
  4. Verify success message
  5. Check email

- [ ] **Test Quick Quote Form**
  1. Go to quote page
  2. Fill form and select items
  3. Submit
  4. Verify success
  5. Check email

- [ ] **Verify email formatting**
  - Check all fields are present
  - Verify formatting looks professional
  - Confirm timestamp is correct

---

## ☑️ Phase 6: Verification (2 minutes)

- [ ] **Check AWS Lambda**
  ```bash
  aws lambda get-function --function-name ipanac-form-handler --region ap-south-1
  ```
  - Should return function details

- [ ] **Check API Gateway**
  ```bash
  aws apigateway get-rest-apis --region ap-south-1
  ```
  - Should show `ipanac-forms-api`

- [ ] **Check SES verification**
  ```bash
  aws ses list-verified-email-addresses --region ap-south-1
  ```
  - Should include `relocation@ipanacllc.com`

---

## ☑️ Troubleshooting Checklist

### If forms aren't submitting:

- [ ] Check browser console for errors
- [ ] Verify `.env.production` has correct API endpoint
- [ ] Rebuild project: `npm run build`
- [ ] Redeploy: `aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1`
- [ ] Hard refresh browser (Ctrl+F5)

### If emails aren't arriving:

- [ ] Verify email in AWS SES Console
- [ ] Check Lambda CloudWatch logs:
  ```bash
  aws logs tail /aws/lambda/ipanac-form-handler --follow --region ap-south-1
  ```
- [ ] Verify IAM role has SES permissions
- [ ] Check if SES is in sandbox mode (AWS Console)

### If you see CORS errors:

- [ ] Check API Gateway has OPTIONS method
- [ ] Verify Lambda returns CORS headers
- [ ] Redeploy API Gateway:
  ```bash
  aws apigateway create-deployment --rest-api-id YOUR_API_ID --stage-name prod --region ap-south-1
  ```

---

## ✅ Success Criteria

Your setup is complete when:

✅ All 3 forms submit successfully  
✅ Success messages appear after submission  
✅ Emails arrive at `relocation@ipanacllc.com`  
✅ Email formatting looks professional  
✅ Forms reset after successful submission  
✅ No console errors in browser  
✅ Build and deploy commands work  

---

## 📝 Post-Setup Notes

### Regular Deployment
Your normal workflow is unchanged:
```bash
npm run build
aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
```

### Updating Backend
If you need to modify Lambda function:
```bash
cd backend
# Edit lambda/formHandler.js
./deploy.bat    # Windows
./deploy.sh     # Linux/Mac
```

### Monitoring
Check logs anytime:
```bash
aws logs tail /aws/lambda/ipanac-form-handler --follow --region ap-south-1
```

---

## 📚 Documentation

- **Quick Reference**: `DEPLOYMENT.md`
- **Full Setup Guide**: `BACKEND_SETUP.md`
- **Backend Details**: `backend/README.md`
- **AWS Instructions**: `backend/DEPLOYMENT_GUIDE.md`

---

## 🎉 You're Done!

Once all checkboxes are complete, your website has a fully functional backend system!

**Need help?** Check `BACKEND_SETUP.md` for detailed troubleshooting.

---

**Current Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete
