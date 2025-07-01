# 🚀 Arash Nikbakht - Portfolio Website

A modern, responsive, and interactive portfolio website built with React and Tailwind CSS, showcasing 8+ years of full-stack development expertise.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-blue?style=for-the-badge&logo=vercel)](https://anikbakht.ir/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/VeRJiL/anikbakht.ir)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anikbakht/)

---

## 📖 Overview

This portfolio website serves as a comprehensive showcase of my professional experience, technical skills, and achievements as a Senior Full Stack Engineer. Built with modern web technologies, it demonstrates proficiency in React development, responsive design, and user experience optimization.

### 🎯 Key Highlights

- **8+ Years** of Full Stack Development Experience
- **30%** System Performance Improvements
- **50%** Faster Deployment Times
- **70%** Test Coverage Achievements
- **99.9%** System Uptime Record

---

## ✨ Features

### 🎨 **Visual & Interactive**
- **Smooth Animations**: Custom CSS animations and transitions
- **Typing Effects**: Live coding demonstration in experience section
- **Animated Counters**: Dynamic metrics display
- **Floating Particles**: Interactive background elements
- **Dark/Light Mode**: Toggle between themes with persistence

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Cross-Browser**: Compatible with modern browsers
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Lighthouse-optimized for speed

### 🧩 **Technical Architecture**
- **Component-Based**: Modular React architecture
- **Custom Hooks**: Reusable logic with `useTheme` and `useScrollAnimation`
- **Separation of Concerns**: Clean data, components, and styles separation
- **Modern CSS**: Tailwind CSS with custom animations

### 🔧 **Professional Sections**
- **Hero Section**: Eye-catching introduction with key metrics
- **About**: Professional summary and core competencies
- **Skills**: Interactive skill bars with technology icons
- **Experience**: Detailed work history with achievements
- **Contact**: Multiple contact methods and availability status

---

## 🛠️ Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-38B2AC?style=flat-square&logo=tailwind-css)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

### **Icons & Animations**
![Lucide React](https://img.shields.io/badge/Lucide%20React-0.263.1-blue?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)

### **Development Tools**
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat-square&logo=node.js)
![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=flat-square&logo=npm)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=flat-square&logo=git)

### **Build & Deployment**
![Create React App](https://img.shields.io/badge/Create%20React%20App-5.0.1-09D3AC?style=flat-square)
![PostCSS](https://img.shields.io/badge/PostCSS-8.4.24-DD3A0A?style=flat-square&logo=postcss)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.14-orange?style=flat-square)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/arash-portfolio.git
   cd arash-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Serve the build locally (optional)
npx serve -s build
```

---

## 📁 Project Structure

```
arash-portfolio/
├── 📁 public/
│   ├── index.html          # SEO-optimized HTML
│   ├── favicon.ico         # Site icon
│   └── manifest.json       # PWA manifest
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 common/      # Reusable UI components
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── FloatingParticles.jsx
│   │   │   ├── SkillBar.jsx
│   │   │   ├── TechIcon.jsx
│   │   │   └── TypingAnimation.jsx
│   │   ├── 📁 layout/      # Layout components
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   └── 📁 sections/    # Main page sections
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── SkillsSection.jsx
│   │       ├── ExperienceSection.jsx
│   │       └── ContactSection.jsx
│   ├── 📁 data/           # Static content
│   │   ├── skills.js
│   │   ├── experiences.js
│   │   └── achievements.js
│   ├── 📁 hooks/          # Custom React hooks
│   │   ├── useTheme.js
│   │   └── useScrollAnimation.js
│   ├── 📁 styles/         # CSS files
│   │   └── animations.css
│   ├── App.jsx            # Main App component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md             # Project documentation
```

---

## 🎨 Customization

### **Updating Personal Information**

1. **Basic Info**: Edit `src/data/experiences.js`, `src/data/skills.js`, and `src/data/achievements.js`

2. **Contact Details**: Update email and LinkedIn URLs in:
    - `src/components/sections/ContactSection.jsx`
    - `src/components/sections/HeroSection.jsx`

3. **SEO Metadata**: Modify `public/index.html` for:
    - Page title and description
    - Open Graph tags
    - Keywords

### **Styling Customization**

1. **Colors**: Update `tailwind.config.js` for custom color schemes
2. **Animations**: Modify `src/styles/animations.css`
3. **Fonts**: Add Google Fonts to `public/index.html`

### **Adding New Sections**

1. Create component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/layout/Navigation.jsx`

---

## 🌐 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`
4. Auto-deploy on push ✅

### **Vercel**
1. Import GitHub repository
2. Framework preset: Create React App
3. Auto-deploy on push ✅

### **Traditional Hosting**
1. Run `npm run build`
2. Upload `build/` folder contents to your web server
3. Configure server for SPA routing

### **GitHub Pages**
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/arash-portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

---

## 🧪 Development

### **Available Scripts**

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

### **Code Quality**

- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting (recommended)
- **Component Structure**: Functional components with hooks
- **Performance**: Optimized renders and animations

---

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome!

### **How to Contribute**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Areas for Contribution**

- 🐛 Bug fixes
- ✨ New animations or interactions
- 📱 Mobile experience improvements
- ♿ Accessibility enhancements
- 🔧 Performance optimizations
- 📝 Documentation improvements

---

## 📸 Screenshots

<!-- Add screenshots here -->
*Screenshots will be added after deployment*

### Desktop View
![Desktop Screenshot](./screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](./screenshots/mobile.png)

### Dark Mode
![Dark Mode Screenshot](./screenshots/dark-mode.png)

---

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🔒 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Arash Nikbakht

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icons
- **Vercel/Netlify** - For excellent deployment platforms
- **GitHub** - For hosting and version control

---

## 📞 Contact

**Arash Nikbakht** - Senior Full Stack Engineer

[![Email](https://img.shields.io/badge/Email-arash.nykbakht@gmail.com-red?style=for-the-badge&logo=gmail)](mailto:arash.nykbakht@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anikbakht/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Site-green?style=for-the-badge&logo=vercel)](https://your-portfolio-url.com)

---

## 📈 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/arash-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/arash-portfolio)
![GitHub stars](https://img.shields.io/github/stars/yourusername/arash-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/arash-portfolio?style=social)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Arash Nikbakht](https://github.com/yourusername)

</div>