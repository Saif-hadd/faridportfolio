import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-light py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-luxury rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-800 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-luxury mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            <span className="font-medium text-gray-700">Crafting culinary excellence through </span>
            <span className="font-semibold text-indigo-600">passion</span>, 
            <span className="font-semibold text-purple-600"> precision</span>, and 
            <span className="font-semibold text-pink-600"> leadership</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-6 leading-tight">
              Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Excellence</span> Through Experience
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over <span className="font-semibold text-gray-800">three decades</span> of distinguished service in luxury hospitality, I have dedicated my career to elevating culinary standards across the <span className="font-medium text-indigo-600">Middle East and North Africa</span>. My journey has taken me through prestigious <span className="font-semibold text-purple-600">5-star establishments</span> where I've mastered the art of pre-opening operations, team leadership, and maintaining the highest food safety standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              My expertise spans from <span className="font-medium text-gray-800">intimate fine dining experiences</span> to <span className="font-medium text-gray-800">large-scale banquet operations</span>, always ensuring exceptional quality and presentation. I believe in <span className="font-semibold text-indigo-600">leading by example</span>, <span className="font-semibold text-purple-600">fostering creativity</span>, and building teams that share my passion for culinary excellence.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 glass rounded-2xl hover-lift animate-pulse-glow">
                <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">30+</div>
                <div className="text-gray-700 font-semibold">Years Experience</div>
              </div>
              <div className="text-center p-6 glass rounded-2xl hover-lift animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">15+</div>
                <div className="text-gray-700 font-semibold">Hotels Opened</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fadeInRight">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift bg-gradient-luxury p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt="Professional kitchen"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutSection