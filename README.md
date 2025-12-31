# Modern Portfolio Website

A stunning, high-end personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a modern dark theme with gradient accents, smooth animations, and a fully responsive design.

## 🚀 Features

- **Modern UI/UX Design**: Dark theme with blue, purple, and neon accents
- **Glassmorphism Effects**: Beautiful glass-like components with soft shadows
- **Animated Background**: Particle system with gradient blobs
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Theme toggle functionality
- **Custom Cursor**: Interactive cursor with hover effects
- **Loading Animation**: Elegant page loading screen
- **SEO Optimized**: Meta tags and structured content

## 📦 Sections

1. **Home**: Hero section with animated intro text and role switching
2. **About Me**: Animated cards with timeline-style layout
3. **Skills**: Animated progress bars for technical skills
4. **Projects**: Interactive project cards with hover animations
5. **Experience**: Vertical timeline with work history
6. **Education**: Timeline-style education and certifications
7. **Resume**: Download and preview functionality
8. **Contact**: Animated form with validation
9. **Footer**: Social icons with hover effects

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - Advanced 3D effects (optional)
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, roles, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update bio and personal information
   - Replace placeholder image

3. **Skills** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Modify colors and categories

4. **Projects** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update images, descriptions, and links

5. **Experience** (`src/components/Experience.jsx`):
   - Update work history
   - Modify job descriptions and dates

6. **Education** (`src/components/Education.jsx`):
   - Update educational background
   - Add certifications

7. **Contact** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission endpoint

8. **Resume** (`src/components/Resume.jsx`):
   - Add your actual resume PDF
   - Update resume preview content

### Theme Colors

Modify colors in `tailwind.config.js`:
- Primary colors (cyan/blue)
- Purple accents
- Neon colors

### SEO

Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter card metadata

## 🎯 Key Animation Features

- **Scroll Animations**: Elements animate on scroll using Intersection Observer
- **Hover Effects**: Interactive hover states on cards and buttons
- **Page Transitions**: Smooth transitions between sections
- **Loading Screen**: Animated progress bar on initial load
- **Custom Cursor**: Follows mouse with glow effects on hover

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuration

### Custom Cursor

The custom cursor is automatically disabled on mobile devices. To enable/disable:
- Check `src/App.jsx` for mobile detection logic

### Theme Toggle

Theme preference is saved in localStorage. Modify `src/context/ThemeContext.jsx` to customize theme behavior.

## 📝 Notes

- Replace placeholder images with your actual project screenshots
- Update all social media links with your profiles
- Configure the contact form to connect to your backend/email service
- Add your actual resume PDF file
- Customize colors and styling to match your brand

## 🚀 Deployment

The portfolio can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use `npm run build` and deploy the `dist` folder

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
