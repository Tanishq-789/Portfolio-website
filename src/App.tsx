import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';
import SplashCursor from "@/components/SplashCursor";


function App() {
  return (
    <ThemeProvider>
      <SplashCursor/>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ParticleBackground />
        <Navigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/30 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © 2025 Tanishq Shinde. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;