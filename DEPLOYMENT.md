# 🚀 Quick Deployment Reference

## First Time Setup (Do Once)

### 1. Setup AWS Backend
```bash
cd backend
./setup-aws.sh   # Linux/Mac
# OR
setup-aws.bat    # Windows
```

### 2. Update .env.production
After AWS setup completes, copy the API endpoint URL provided and update:
```
VITE_API_ENDPOINT=https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com/prod/submit
```

---

## Regular Deployment (Every Time)

```bash
# Step 1: Build
npm run build

# Step 2: Deploy to AWS S3
aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
```

That's it! ✅

---

## Update Backend Lambda (When Needed)

```bash
cd backend
./deploy.bat    # Windows
# OR
./deploy.sh     # Linux/Mac
```

---

## Verify Deployment

1. Visit: https://ipanacrelocation.com
2. Test any form
3. Check email at: relocation@ipanacllc.com

---

## Common Issues

### Forms not working?
- Check `.env.production` has correct API endpoint
- Rebuild: `npm run build`
- Redeploy: `aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1`

### Email not received?
- Check CloudWatch logs: AWS Console → CloudWatch → `/aws/lambda/ipanac-form-handler`
- Verify email in AWS SES Console

### Need help?
See `BACKEND_SETUP.md` for detailed troubleshooting

---

## Important Files

- **Backend Lambda**: `backend/lambda/formHandler.js`
- **Frontend API**: `src/services/api.js`
- **Environment**: `.env.production`
- **Full Guide**: `BACKEND_SETUP.md`

---

**Your deployment workflow is now automated! 🎉**
