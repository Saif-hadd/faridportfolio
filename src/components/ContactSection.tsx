import React, { useState } from 'react';
import { Mail, MapPin, Briefcase, Download, Send } from 'lucide-react';
import cvFile from '../assets/Abdessattar_Keraa_CV.pdf'; 


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
    console.log('Form submitted:', formData);
      alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = cvFile;
  link.download = 'Abdessattar_Keraa_CV.pdf';
  link.click();
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-36 h-36 bg-gradient-luxury rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-display font-light text-gray-800 mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-luxury mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Ready to bring culinary excellence to your establishment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="flex items-start space-x-6 p-6 glass rounded-2xl hover-lift transition-all duration-300 group">
              <div className="p-3 bg-gradient-luxury rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Email</h3>
                <p className="text-gray-600 font-medium">faridkera69@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 glass rounded-2xl hover-lift transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Current Location</h3>
                <p className="text-gray-600 font-medium">Riyadh, Saudi Arabia</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 glass rounded-2xl hover-lift transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-luxury group-hover:bg-clip-text transition-all duration-300">Availability</h3>
                <p className="text-gray-600 font-medium">Open to new opportunities</p>
              </div>
            </div>
            
            <button 
              onClick={handleDownloadCV}
              className="flex items-center space-x-3 bg-gradient-luxury text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover-lift font-semibold text-lg group"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </button>
          </div>
          
          <div className="glass p-8 rounded-2xl animate-fadeInRight">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-luxury text-white py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center space-x-3 hover-lift disabled:opacity-70 disabled:cursor-not-allowed text-lg group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactSection