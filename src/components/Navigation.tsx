import React from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navItems: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  setCurrentSection,
  isMenuOpen,
  setIsMenuOpen,
  navItems
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 glass border-b border-white/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 animate-fadeInLeft">
            <div className="p-2 bg-gradient-luxury rounded-xl animate-float">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              <span className="text-gray-800">Chef</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Portfolio</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-2 animate-fadeInRight">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover-lift ${
                  currentSection === item.id
                    ? 'bg-gradient-luxury text-white shadow-lg'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-luxury hover:shadow-lg'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gradient-luxury hover:text-white transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/20 animate-fadeInUp">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  currentSection === item.id
                    ? 'bg-gradient-luxury text-white'
                    : 'text-gray-700 hover:text-white hover:bg-gradient-luxury'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;