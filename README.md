# CloudSpax React Clone

A modern React.js clone of the CloudSpax website - a YouTube content creation and video editing service company.

## 🚀 Features

- **Modern Hero Section** with animated call-to-action
- **Services Showcase** highlighting Content Strategy, Post Production, and Content ROI
- **Interactive Gallery** with thumbnails and video samples
- **Client Testimonials** with ratings and reviews
- **Team Section** with flip card animations
- **Responsive Footer** with newsletter signup and process plans
- **Mobile-First Design** that works on all devices
- **Smooth Animations** and modern UI/UX

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with gradients and animations
- **Lucide React** - Icon library
- **React Router** - Navigation (ready for future pages)

## 🎨 Design Features

- **Gradient Backgrounds** and modern color schemes
- **Glass Morphism** effects in header and cards
- **Hover Animations** and smooth transitions
- **Card Layouts** with shadow effects
- **Responsive Grid Systems** for all screen sizes
- **Professional Typography** with custom font weights

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx/css     # Navigation with scroll effects
│   ├── Hero.jsx/css       # Main hero section
│   ├── Services.jsx/css   # Services showcase
│   ├── Gallery.jsx/css    # Thumbnails and videos
│   ├── Testimonials.jsx/css # Client reviews
│   ├── Team.jsx/css       # Team member cards
│   └── Footer.jsx/css     # Footer with plans
├── App.jsx               # Main app component
├── App.css              # Global styles
└── main.jsx             # Entry point
```

## 🎯 Components Overview

### Header
- Fixed navigation with blur effect
- Mobile responsive hamburger menu
- Smooth scroll to sections
- Logo with gradient text

### Hero
- Animated background gradients
- Call-to-action buttons
- Client showcase grid
- Industry category tags

### Services
- Three main service cards
- Hover animations
- Service descriptions
- Call-to-action section

### Gallery
- Tabbed interface for thumbnails/videos
- Responsive grid layout
- Hover effects and overlays
- Category filtering ready

### Testimonials
- Client review cards
- Star ratings
- Avatar placeholders
- Responsive grid layout

### Team
- Flip card animations
- Team member profiles
- Social media links
- Professional descriptions

### Footer
- Newsletter signup
- Service links
- Process plans section
- Social media integration

## 🎨 Styling Approach

- **CSS Variables** for consistent theming
- **Flexbox & Grid** for modern layouts
- **Mobile-First** responsive design
- **BEM-like** class naming convention
- **Smooth Transitions** for all interactions

## 📈 Performance Optimizations

- **Vite** for fast development and building
- **CSS-only animations** for smooth performance
- **Optimized images** and placeholders
- **Minimal dependencies** for faster loading

## 🔧 Customization

### Colors
The main color scheme uses gradients:
- Primary: `#667eea` to `#764ba2`
- Secondary gradients for variety
- Neutral grays for text

### Typography
- Font family: 'Inter' with fallbacks
- Responsive font sizes
- Consistent line heights

### Animations
- Hover effects on cards
- Smooth scrolling
- Fade-in animations
- Transform transitions

## 📄 License

This project is created as a learning exercise and clone of the original CloudSpax website.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Contact

For questions about this project, please create an issue in the repository.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
