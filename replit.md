# IPANAC Relocation Website

## Overview
This is a professional website for IPANAC Relocation, a company specializing in relocation and moving services across the GCC region and internationally. The site showcases their services, mission, and provides contact options for potential clients.

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite 6.2
- **Routing**: React Router DOM 7.4
- **Icons**: React Icons 5.5 + Lucide React
- **Styling**: CSS modules

## Project Structure
```
src/
├── assets/          # Images and logos
├── constants/       # Constant values and configuration
├── App.jsx          # Main app component with routing
├── main.jsx         # React app entry point
├── navbar.jsx       # Navigation bar component
├── head.jsx         # Hero/header section
├── WhyChoose.jsx    # Why choose us section
├── featuresection.jsx  # Services/features display
├── footer.jsx       # Footer component
├── about.jsx        # About page
├── services.jsx     # Services page
├── quickquote.jsx   # Quick quote page
├── enquire.jsx      # Enquiry form page
└── Contactus.jsx    # Contact us page
```

## Routes
- `/` - Home page (Hero, Why Choose Us, Footer)
- `/about` - About the company
- `/services` - Services offered
- `/enquire` - Enquiry form
- `/quickquote` - Quick quote request
- `/contact` - Contact information

## Development
- **Dev Server**: Runs on port 5000 at 0.0.0.0
- **Command**: `npm run dev`
- **Hot Module Replacement**: Enabled via Vite

## Deployment
- **Type**: Autoscale (stateless web application)
- **Build Command**: `npm run build`
- **Run Command**: `npx vite preview --host 0.0.0.0 --port 5000`

## Recent Changes (October 26, 2025)
- Imported from GitHub and configured for Replit environment
- Updated vite.config.js to bind to 0.0.0.0:5000 for Replit proxy compatibility
- Configured HMR for WebSocket support in Replit
- Set up deployment configuration for autoscale deployment
- Created .gitignore for Node.js project

## Architecture Notes
- Single-page application (SPA) with client-side routing
- Component-based architecture following React best practices
- Modular CSS for component styling
- No backend or database - purely frontend presentation site
