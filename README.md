# 💧 Water-Themed Portfolio - Shean Hans Teoh

**Student ID:** A00303759  
**Program:** BSc in Software Design with Artificial Intelligence for Cloud Computing

A stunning, interactive portfolio website featuring custom Three.js water shader effects and smooth animations. This project demonstrates advanced web development skills, creative visual design, and meaningful storytelling.

## 🌊 Design Philosophy

_"Like a drop of water creating ripples, may this portfolio demonstrate my potential to create meaningful impact in the digital world."_

The water theme symbolizes:

- **Flow & Adaptability**: Just as water adapts to its environment
- **Impact**: A single drop creates ripples that spread far
- **Life**: Water as a gift from God, representing growth and purpose

## ✨ Features

- 🎨 **Custom GLSL Water Shaders** - Real-time animated water effects with caustics and ripples
- 🖱️ **Interactive Background** - Water responds to mouse movement
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Smooth Animations** - Framer Motion for elegant transitions
- 🎯 **Accessible** - Following W3C guidelines with semantic HTML
- ⚡ **Performance Optimized** - Fast load times and smooth 60fps animations

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js with React Three Fiber
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages / Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/iecloudbird/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`): Update name, title, and tagline
2. **About Section** (`components/sections/About.tsx`): Add your photo and update bio
3. **Skills Section** (`components/sections/Skills.tsx`): Modify skills and technologies
4. **Experience Timeline** (`components/sections/Experience.tsx`): Update with your experiences
5. **Projects** (`components/sections/Projects.tsx`): Update with your projects
6. **Contact** (`components/sections/Contact.tsx`): Update email and social links

### Adjust Water Shader Colors

Edit `components/canvas/WaterShader.tsx`:

```typescript
uColor1: { value: new THREE.Color('#001a33') }, // Deep color
uColor2: { value: new THREE.Color('#004d66') }, // Mid-tone
uColor3: { value: new THREE.Color('#00d4ff') }, // Highlight
```

## 📱 Sections Overview

1. **Hero** - Eye-catching introduction with animated water background
2. **About** - Personal story and motivations
3. **Skills** - Technical skills with progress bars and tools
4. **Experience** - Interactive timeline of education and work
5. **Projects** - Showcase of key projects with links
6. **Contact** - Multiple ways to connect

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

## 📞 Contact

**Shean Hans Teoh**

- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourusername)
- GitHub: [@iecloudbird](https://github.com/iecloudbird)

---

# Shean Hans Teoh - Portfolio

> _"Pray as though everything depended on God. Work as though everything depended on you."_  
> — Saint Augustine of Hippo

## 👋 About

I'm Shean Hans Teoh, an aspiring software engineer specializing in AI and Cloud Computing. Currently pursuing a BSc in Software Design with AI for Cloud Computing at Technological University of the Shannon (TUS).

I'm passionate about building innovative web applications and creating software solutions that make a meaningful impact. This portfolio showcases my projects, skills, and professional journey.

## 🛠️ Tech Stack

Built with modern web technologies:

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages

## ✨ Features

- 🎨 Clean black & gold design aesthetic
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions
- 🎯 Interactive project cards with 3D flip effects
- 📧 Contact form with engaging hover-fill button
- 🚀 Optimized for performance and accessibility

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [https://iecloudbird.github.io/portfolio](https://iecloudbird.github.io/portfolio) to view the live site.

## 📬 Contact

Feel free to reach out for collaboration opportunities or just to say hello!

---

© 2025 Shean Hans Teoh. All rights reserved.
