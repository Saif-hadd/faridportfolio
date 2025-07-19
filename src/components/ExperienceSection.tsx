import React from 'react';
import { MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
    year: 'Feb 2023 – Apr 2024',
    role: 'Head Chef',
    company: 'Entrecôte Café de Paris',
    location: 'Riyadh, Saudi Arabia',
    color: 'from-rose-500 to-red-600',
    achievements: [
      'Supervised kitchen operations and ensured the authenticity of French cuisine, with a focus on the original Café de Paris sauce.',
      'Collaborated on menu development, maintained high hygiene standards, and optimized team performance and cost control.'
    ]
  },
  {
    year: 'Jan 2021 – Jan 2023',
    role: 'Head Chef',
    company: 'Millennia Olaya Hotel',
    location: 'Riyadh, Saudi Arabia',
    color: 'from-indigo-500 to-blue-600',
    achievements: [
      'Supervised all kitchen operations in a 4-star hotel environment, ensuring high culinary standards and guest satisfaction.',
      'Created seasonal menus and customized offerings for events and banquets.',
      'Trained and managed a multicultural kitchen team, fostering a productive and hygienic work environment.',
      'Controlled food costs through effective inventory, vendor relations, and portion management.'
    ]
  },
  {
    year: 'Nov 2018 – Nov 2020',
    role: 'Sous Chef – Pre-Opening',
    company: 'Shaza Hotel',
    location: 'Riyadh, Saudi Arabia',
    color: 'from-blue-500 to-purple-600',
    achievements: [
      ' Led the pre-opening phase of a luxury hotel kitchen, including recipe design and team structure.',
      ' Oversaw daily kitchen operations with strict hygiene standards compliance.',
      ' Managed food costs, procurement, and staff development.'
    ]
  },
  {
    year: 'Apr 2008 – Oct 2018',
    role: 'Executive Sous Chef',
    company: 'Golden Tulip Hotel',
    location: 'Riyadh, Saudi Arabia',
    color: 'from-green-500 to-teal-600',
    achievements: [
      ' Oversaw kitchen staff and managed multiple outlets.',
      ' Developed menus, standardized recipes, and portion control systems.',
      ' Ensured full HACCP compliance and passed annual audits.',
      ' Participated in budgeting and food cost control meetings.'
    ]
  },
  {
    year: 'Jan 2004 – Aug 2007',
    role: 'Chef de Partie',
    company: 'International Hotel Al Hana',
    location: 'Tunisia',
    color: 'from-orange-500 to-red-600',
    achievements: [
      ' Managed food preparation for high-volume banquets and restaurants.',
      ' Assisted in training junior kitchen staff.',
      ' Contributed to creative menu development and food presentation.'
    ]
  },
  {
    year: 'Nov 1999 – Aug 2003',
    role: 'Cook',
    company: 'Tibisti Hotel',
    location: 'Libya',
    color: 'from-yellow-500 to-orange-600',
    achievements: [
      ' Delivered consistent food quality for hotel guests and events.',
      ' Maintained kitchen cleanliness and organization.',
      ' Supported the executive chef during peak service hours.'
    ]
  },
  {
    year: 'Feb 1993 – Aug 1998',
    role: 'Cook',
    company: 'Yadis Hotel',
    location: 'Djerba, Tunisia',
    color: 'from-purple-500 to-pink-600',
    achievements: [
      ' Prepared traditional and international dishes with authenticity.',
      ' Maintained hygiene and safety standards per regulations.'
    ]
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-luxury rounded-full opacity-5 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-light text-gray-800 mb-6">Professional Experience</h2>
          <div className="w-32 h-1 bg-gradient-luxury mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Three decades of culinary leadership across prestigious establishments
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-luxury rounded-full"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row animate-fadeInLeft' : 'flex-row-reverse animate-fadeInRight'}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className="glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift group">
                  <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${exp.color}`}>
                    {exp.year}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">{exp.role}</h3>
                  <p className="text-xl text-gray-600 mb-2 font-medium">{exp.company}</p>
                  <p className={`text-sm text-gray-500 mb-6 flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`text-sm text-gray-600 flex items-start ${index % 2 === 0 ? 'flex-row-reverse text-right' : ''}`}>
                        <span className={`w-2 h-2 bg-gradient-luxury rounded-full mt-2 flex-shrink-0 ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`}></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-luxury rounded-full border-4 border-white shadow-lg animate-pulse-glow">
                <div className="w-full h-full bg-white rounded-full scale-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ExperienceSection