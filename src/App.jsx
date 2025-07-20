import React, { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import { useTheme } from './hooks/useTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';

const App = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { visibleElements, isScrolled } = useScrollAnimation();

  return (
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isScrolled={isScrolled} />
        <HeroSection />
        <AboutSection isDarkMode={isDarkMode} visibleElements={visibleElements} />
        <SkillsSection isDarkMode={isDarkMode} />
        <ExperienceSection isDarkMode={isDarkMode} visibleElements={visibleElements} />
        <ProjectsSection visibleElements={visibleElements} />
        <ContactSection />
        <Footer isDarkMode={isDarkMode} />
      </div>
  );
};

export default App;