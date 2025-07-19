import React from 'react';
import { Calendar, Award, Users, ChefHat, Briefcase, Star } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Pre-Opening Operations', level: 95, icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { name: 'HACCP Compliance', level: 98, icon: Award, color: 'from-green-500 to-emerald-500' },
    { name: 'Team Leadership', level: 95, icon: Users, color: 'from-purple-500 to-violet-500' },
    { name: 'Menu Development', level: 90, icon: ChefHat, color: 'from-orange-500 to-red-500' },
    { name: 'Cost Control', level: 88, icon: Briefcase, color: 'from-teal-500 to-cyan-500' },
    { name: 'International Cuisine', level: 92, icon: Star, color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-luxury rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-light text-gray-800 mb-6">Core Competencies</h2>
          <div className="w-32 h-1 bg-gradient-luxury mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Mastering the art of culinary excellence through specialized expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">{skill.name}</h3>
              </div>
              <div className="relative mb-4">
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="absolute right-0 -top-8 text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded-full shadow-md">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300 group animate-fadeInUp">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Certifications</h3>
            <p className="text-gray-600 font-medium">HACCP, Food Safety, Management</p>
          </div>
          <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300 group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Leadership</h3>
            <p className="text-gray-600 font-medium">35+ Team Members Managed</p>
          </div>
          <div className="glass p-8 rounded-2xl hover-lift transition-all duration-300 group animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
              <Star className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Excellence</h3>
            <p className="text-gray-600 font-medium">5-Star Standards Maintained</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SkillsSection