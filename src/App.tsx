import React, { useState, useEffect } from 'react';
import { ChefHat, User, Briefcase, Award, Image, Mail } from 'lucide-react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: ChefHat },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans">
      <Navigation 
        currentSection={currentSection}
        setCurrentSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
      />
      
      <main>
        <section id="home">
          <HomePage scrollY={scrollY} setCurrentSection={scrollToSection} />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="gallery">
          <GallerySection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="bg-gradient-dark text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-luxury rounded-xl">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold">Executive Sous Chef Portfolio</span>
          </div>
          <p className="text-gray-300 text-lg">© 2025 Abdessateur Executive Sous Chef Portfolio. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Crafting culinary excellence across the globe</p>
        </div>
      </footer>
    </div>
  );
};

export default App;