import React from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Spotlight from './components/common/Spotlight';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import { useTheme } from './hooks/useTheme';

const App = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="relative min-h-screen bg-bg text-fg">
            <Spotlight />
            <Navigation isDark={isDark} toggleTheme={toggleTheme} />

            <main id="main" className="relative z-10">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default App;
