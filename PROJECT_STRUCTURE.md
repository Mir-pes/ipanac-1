# 📂 Complete Project Structure

```
ipanac-1/
│
├── 📁 backend/                          # NEW - Backend system
│   ├── 📁 lambda/
│   │   └── formHandler.js              # AWS Lambda function
│   ├── package.json                    # Backend dependencies
│   ├── setup-aws.sh                    # Automated setup (Linux/Mac)
│   ├── deploy.sh                       # Deploy updates (Linux/Mac)
│   ├── deploy.bat                      # Deploy updates (Windows)
│   ├── DEPLOYMENT_GUIDE.md            # Detailed AWS instructions
│   └── README.md                       # Backend documentation
│
├── 📁 src/                              # Frontend source code
│   ├── 📁 services/                    # NEW - API layer
│   │   └── api.js                      # Form submission handler
│   │
│   ├── 📁 assets/                      # Images, logos, etc.
│   ├── 📁 constants/                   # Constants and config
│   │
│   ├── App.jsx                         # Main app component
│   ├── main.jsx                        # App entry point
│   │
│   ├── Contactus.jsx                   # UPDATED - Contact form
│   ├── enquire.jsx                     # UPDATED - Registration form
│   ├── quickquote.jsx                  # UPDATED - Quote form
│   │
│   ├── navbar.jsx                      # Navigation
│   ├── hero.jsx                        # Hero section
│   ├── featuresection.jsx             # Features
│   ├── services.jsx                    # Services
│   ├── WhyChoose.jsx                   # Why choose us
│   ├── footer.jsx                      # Footer
│   ├── about.jsx                       # About page
│   ├── about1.jsx                      # About alternative
│   ├── head.jsx                        # Head component
│   │
│   ├── enquire.css                     # UPDATED - Added alert styles
│   ├── App.css                         # App styles
│   ├── index.css                       # Global styles
│   ├── Navbar.css                      # Navigation styles
│   ├── hero.css                        # Hero styles
│   ├── FeatureSection.css             # Features styles
│   ├── services.css                    # Services styles
│   ├── WhyChoose.css                   # Why choose styles
│   ├── footer.css                      # Footer styles
│   ├── contactus.css                   # Contact styles
│   ├── quickquote.css                  # Quote styles
│   └── about.css                       # About styles
│
├── 📁 public/                           # Static assets
├── 📁 attached_assets/                  # Additional assets
│
├── 📁 node_modules/                     # Dependencies (ignored)
├── 📁 dist/                             # Build output (ignored)
│
├── .env.production                     # NEW - Production API endpoint
├── .env.development                    # NEW - Development config
├── .env.example                        # NEW - Environment template
│
├── package.json                        # Project dependencies
├── vite.config.js                      # Vite configuration
├── eslint.config.js                    # ESLint configuration
├── index.html                          # HTML template
│
├── .gitignore                          # UPDATED - Added backend files
│
├── BACKEND_SETUP.md                    # NEW - Complete setup guide
├── BACKEND_SUMMARY.md                  # NEW - System summary
├── DEPLOYMENT.md                       # NEW - Quick deployment guide
├── SETUP_CHECKLIST.md                  # NEW - Step-by-step checklist
├── PROJECT_STRUCTURE.md                # NEW - This file
│
├── README.md                           # Project readme
└── replit.md                           # Replit notes

```

## 📝 File Categories

### 🆕 New Backend Files (All in `backend/`)
- `lambda/formHandler.js` - Core Lambda function
- `package.json` - Backend dependencies
- `setup-aws.sh` / `deploy.sh` - Deployment scripts
- `DEPLOYMENT_GUIDE.md` - AWS setup instructions
- `README.md` - Backend documentation

### ✏️ Modified Frontend Files
- `src/Contactus.jsx` - Added API integration
- `src/enquire.jsx` - Added API integration
- `src/quickquote.jsx` - Added API integration
- `src/enquire.css` - Added alert styles
- `.gitignore` - Added backend exclusions

### 🆕 New Frontend Files
- `src/services/api.js` - API service layer

### 🆕 Configuration Files
- `.env.production` - Production API endpoint
- `.env.development` - Development config
- `.env.example` - Template

### 📚 New Documentation
- `BACKEND_SETUP.md` - Complete guide
- `BACKEND_SUMMARY.md` - System overview
- `DEPLOYMENT.md` - Quick reference
- `SETUP_CHECKLIST.md` - Step-by-step
- `PROJECT_STRUCTURE.md` - This file

## 🔄 Data Flow

```
User Input (Browser)
       ↓
React Form Component
       ↓
src/services/api.js
       ↓
API Gateway (AWS)
       ↓
Lambda Function
       ↓
AWS SES
       ↓
Email (relocation@ipanacllc.com)
```

## 🎯 Key Integration Points

### 1. Forms → API Service
- `Contactus.jsx` calls `submitForm('contact', data)`
- `enquire.jsx` calls `submitForm('enquire', data)`
- `quickquote.jsx` calls `submitForm('quote', data)`

### 2. API Service → Backend
- `api.js` sends POST to API Gateway endpoint
- Endpoint defined in `.env.production`

### 3. Backend → Email
- Lambda receives form data
- Formats HTML email
- Sends via AWS SES

## 🚀 Deployment Paths

### Frontend Deployment
```
npm run build → dist/ → S3 (ipanacrelocation.com)
```

### Backend Deployment
```
backend/lambda/formHandler.js → Lambda Function (AWS)
```

## 📦 Dependencies

### Frontend (`package.json`)
- react
- react-dom
- react-router-dom
- lucide-react
- vite
- eslint

### Backend (`backend/package.json`)
- aws-sdk

## 🔐 Environment Variables

### `.env.production` (Used in builds)
```
VITE_API_ENDPOINT=https://[API_ID].execute-api.ap-south-1.amazonaws.com/prod/submit
```

### `.env.development` (Used locally)
```
VITE_API_ENDPOINT=http://localhost:3000/api/submit
```

## 📊 File Sizes

### Large Folders (Ignored by Git)
- `node_modules/` - Dependencies
- `backend/node_modules/` - Backend dependencies
- `dist/` - Build output
- `backend/function.zip` - Lambda deployment package

### Important Files (Tracked by Git)
- Source code in `src/`
- Backend Lambda in `backend/lambda/`
- Configuration files
- Documentation

## 🎨 Styling Architecture

### Global Styles
- `src/index.css` - Base styles

### Component Styles
- Each component has its own CSS file
- Forms share `enquire.css`

### Alert Styles (NEW)
- Added to `src/enquire.css`
- Used by all forms for success/error messages

## 🔍 Important Notes

1. **Backend folder is separate** - Can be deployed independently
2. **Environment files are gitignored** - Must be configured per environment
3. **Forms are self-contained** - Each handles its own state and submission
4. **API service is reusable** - Single point for all backend communication
5. **Deployment is unchanged** - Same S3 sync command works

## 📖 Documentation Guide

| File | When to Read |
|------|-------------|
| `SETUP_CHECKLIST.md` | First time setup |
| `BACKEND_SETUP.md` | Complete reference |
| `DEPLOYMENT.md` | Regular deployments |
| `backend/DEPLOYMENT_GUIDE.md` | Detailed AWS steps |
| `BACKEND_SUMMARY.md` | System overview |
| `PROJECT_STRUCTURE.md` | This file - project map |

---

**This structure ensures clean separation between frontend and backend while maintaining a simple deployment workflow.**
