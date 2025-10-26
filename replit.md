# iPANAC Relocation Website

## Project Overview
Modern, professional website for iPANAC Relocation Services - a company specializing in international and local relocation services within the GCC region.

## Recent Changes (October 26, 2025)
### Complete Homepage Redesign
- ✨ Modernized hero section with animated gradient background
- 🎨 Added interactive floating color orbs for premium aesthetic
- 📊 Implemented modern stats showcase section
- 💳 Redesigned mission/vision cards with hover effects
- 🎯 Created interactive feature grid with smooth animations
- 🛡️ Added trust indicators section
- 🚀 Implemented modern CTA section with gradient background
- 📱 Fully responsive design for all devices

### Technical Setup
- Configured Vite for Replit environment (port 5000, proper HMR settings)
- Set up deployment configuration for autoscale
- Added .gitignore for Node.js projects

## Project Architecture

### Tech Stack
- **Framework**: React 19.0.0 with Vite 6.2.0
- **Routing**: React Router DOM 7.4.0
- **Icons**: Lucide React & React Icons
- **Build Tool**: Vite with HMR
- **Styling**: Custom CSS with modern animations and gradients

### Project Structure
```
src/
├── assets/              # Images and static files
├── constants/
│   └── index.jsx       # Feature data, links, and constants
├── components/
│   ├── head.jsx        # Hero section (REDESIGNED)
│   ├── navbar.jsx      # Navigation bar
│   ├── footer.jsx      # Footer component
│   ├── WhyChoose.jsx   # Why Choose section (REDESIGNED)
│   ├── featuresection.jsx  # Services features
│   ├── about.jsx       # About page
│   ├── services.jsx    # Services page
│   ├── enquire.jsx     # Enquiry form
│   ├── quickquote.jsx  # Quick quote form
│   └── Contactus.jsx   # Contact page
├── App.jsx             # Main app with routing
└── main.jsx            # Entry point
```

### Key Pages
- **/** - Homepage with hero, mission/vision, and why choose sections
- **/about** - About the company
- **/services** - Service offerings
- **/enquire** - Enquiry form
- **/quickquote** - Quick quote request
- **/contact** - Contact information

## Design Features

### Modern UI Elements
1. **Animated Backgrounds**: Floating gradient orbs with smooth animations
2. **Micro-interactions**: Hover effects, scale transforms, and smooth transitions
3. **Gradient Overlays**: Modern gradient text and backgrounds
4. **Card Designs**: Modern card layouts with shadow effects
5. **Responsive Design**: Mobile-first approach with breakpoints
6. **Performance**: Optimized animations and lazy loading

### Color Scheme
- Primary: Red (#dc2626, #991b1b)
- Accent: Blue (#3b82f6, #2563eb)
- Neutrals: Grays and whites for balance
- Gradients: Multi-color animated backgrounds

## Development

### Run Locally
```bash
npm install
npm run dev
```
Server runs on http://localhost:5000

### Build for Production
```bash
npm run build
npm run preview
```

### Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npm run preview`
- Port: 5000

## User Preferences
- Modern, aesthetic design with animations
- Professional appearance for relocation services
- Mobile-responsive
- Fast loading times
- Interactive user experience

## External Links
The website includes links to related iPANAC services:
- Immigration services (ipanacllc.com)
- Accounting services (ipanacaccounting.com)
- Various business services

## Notes
- All animations are performance-optimized
- Images are stored in `src/assets/`
- Constants and data are centralized in `src/constants/index.jsx`
- Fully responsive across all device sizes
