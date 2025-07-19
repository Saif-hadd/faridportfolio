import React from 'react';
import { Image } from 'lucide-react';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const GallerySection: React.FC = () => {
  const images = [
    { 
      url: image1,
      title: 'Culinary Artistry',
      description: 'Precision in every dish'
    },
    { 
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      title: 'Professional Kitchen',
      description: 'State-of-the-art facilities'
    },
    { 
      url: image3,
      title: 'Team Leadership',
      description: 'Inspiring culinary excellence'
    },
    { 
      url: image5,
      title: 'Fine Dining',
      description: 'Luxury hospitality standards'
    },
    { 
      url: image6,
      title: 'Gourmet Creations',
      description: 'International cuisine mastery'
    },
    { 
      url: image7,
      title: 'Culinary Innovation',
      description: 'Modern techniques & traditions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-luxury rounded-full opacity-5 animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-light text-gray-800 mb-6">Gallery</h2>
          <div className="w-32 h-1 bg-gradient-luxury mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Capturing moments of culinary excellence and professional achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center z-20">
                <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-display font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Image className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
