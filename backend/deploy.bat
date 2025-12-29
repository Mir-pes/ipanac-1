@echo off
REM iPANAC Backend Deployment Script for Windows
REM This script automates the deployment of Lambda function

echo ================================
echo iPANAC Backend Deployment Script
echo ================================
echo.

REM Configuration
set FUNCTION_NAME=ipanac-form-handler
set REGION=ap-south-1
set RUNTIME=nodejs18.x

REM Navigate to backend directory
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Check if AWS CLI is installed
where aws >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo AWS CLI is not installed. Please install it first.
    exit /b 1
)

echo AWS CLI found
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed
    echo.
) else (
    echo Dependencies already installed
    echo.
)

REM Create deployment package
echo Creating deployment package...
if exist function.zip del function.zip
powershell -command "Compress-Archive -Path lambda\*,node_modules\* -DestinationPath function.zip -Force"
echo Deployment package created: function.zip
echo.

REM Check if function exists
echo Checking if Lambda function exists...
aws lambda get-function --function-name %FUNCTION_NAME% --region %REGION% >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Function exists, updating code...
    aws lambda update-function-code --function-name %FUNCTION_NAME% --zip-file fileb://function.zip --region %REGION% >nul
    echo Lambda function updated successfully!
) else (
    echo Function does not exist.
    echo Please create the function first using the DEPLOYMENT_GUIDE.md instructions.
    echo You need to:
    echo   1. Create IAM role
    echo   2. Verify email in SES
    echo   3. Create Lambda function
    echo   4. Set up API Gateway
    exit /b 1
)

echo.
echo ================================
echo Deployment completed successfully!
echo ================================
echo.
echo Next steps:
echo   1. Test the Lambda function in AWS Console
echo   2. Verify API Gateway endpoint is working
echo   3. Deploy frontend with: npm run build
echo   4. Then: aws s3 sync dist s3://ipanacrelocation.com --region ap-south-1
echo.

pause
