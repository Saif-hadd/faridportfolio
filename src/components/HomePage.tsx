import React from 'react';
import { MapPin, Star } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
interface HomePageProps {
  scrollY: number;
  setCurrentSection: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ scrollY, setCurrentSection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-luxury rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="mb-8 animate-fadeInUp">
  <div className="w-56 h-56 mx-auto rounded-full bg-gradient-luxury p-1 shadow-2xl animate-pulse-glow">
    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
      <img
        src={profileImage}
        alt="Executive Sous Chef"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
</div>

          
          <h1 className="text-6xl md:text-8xl font-display font-light text-gray-800 mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Executive <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Sous Chef</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <span className="font-semibold text-white">30+ Years of Culinary Leadership</span> | 
            <span className="font-medium text-indigo-600"> Pre-Opening Specialist</span> | 
            <span className="font-medium text-purple-600"> HACCP Expert</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-2 px-6 py-3 glass rounded-full shadow-lg hover-lift">
              <MapPin className="h-5 w-5 text-gray-600" />
              <span className="text-black font-medium">Saudi Arabia • Tunisia • Libya</span>
            </div>
            <div className="flex items-center space-x-2 px-6 py-3 glass rounded-full shadow-lg hover-lift">
              <Star className="h-5 w-5 text-gray-600" />
              <span className="text-black font-medium">5-Star Luxury Hotels</span>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentSection('about')}
            className="bg-gradient-luxury text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp hover-lift"
            style={{ animationDelay: '0.8s' }}
          >
            Explore My Journey
          </button>
        </div>
      </div>
    </div>
  );
};


export default HomePage