import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RegistrationForm from '../components/RegistrationForm';
import lw2 from "../assets/Images/Gallery/lw2.jpg";
import lw1 from "../assets/Images/Gallery/lw1.jpg";
import cc0 from "../assets/Images/Gallery/cc0.webp";
import ju4 from "../assets/Images/Gallery/ju4.webp";

const PersonalDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const slides = [
    {
      image: lw2,
      alt: "Personal Development Image 1"
    },
    {
      image: cc0,
      alt: "Personal Development Image 2"
    },
    {
      image: ju4,
      alt: "Personal Development Image 3"
    },
    {
      image: lw1,
      alt: "Personal Development Image 4"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <SEOHead 
        title="Personal Development - JCIN UNIBEN | Junior Chamber International University of Benin"
        description="Join JCIN UNIBEN, the first and largest collegiate chapter of JCI in Nigeria. Develop leadership skills, entrepreneurship, and create positive community impact. Ages 18-40 welcome."
        keywords="JCI UNIBEN, Junior Chamber International, University of Benin, leadership development, entrepreneurship, community service, student organization, young leaders, Nigeria, personal development"
      />

      {/* Service Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                  World of <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Personal Development</span>
                </h1>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                  When you join JCIN UNIBEN, you enjoy countless opportunities to learn and work with other like-minded and proactive students. Gain experience with projects & training programmes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => setShowRegistrationForm(true)}
                  className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105 transform"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Join Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-jcin-yellow/80 to-jcin-yellow/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white border-2 border-jcin-light-blue text-jcin-light-blue font-semibold text-base sm:text-lg rounded-full hover:bg-jcin-light-blue hover:text-white transition-all duration-300 hover:scale-105 transform">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Learn More
                </button>
              </div>
            </div>

            {/* Slideshow Section */}
            <div className="relative group order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  ))}
                </div>
                
                {/* Indicators */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-jcin-yellow w-6 sm:w-8' : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-yellow to-jcin-yellow rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 group-hover:-rotate-4 sm:group-hover:-rotate-6 transition-transform duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent leading-tight">
              What You'll Gain
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Transform your potential through our comprehensive personal development programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Leadership Skills Development",
              "Professional Networking Opportunities", 
              "Project Management Experience",
              "Public Speaking & Communication",
              "Team Collaboration Skills",
              "Community Impact Projects"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow flex-shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow text-jcin-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to <span className="text-white">Develop</span> Yourself?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 px-4 leading-relaxed">
            Join thousands of students who have transformed their lives through JCIN UNIBEN's personal development programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-jcin-black text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Start Your Journey
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-jcin-black text-jcin-black font-bold text-lg sm:text-xl rounded-full hover:bg-jcin-black hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              Watch Success Stories
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              "Comprehensive training programs",
              "Mentorship from experienced leaders", 
              "Hands-on project experience"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 sm:gap-3 text-jcin-black font-semibold text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-teal flex-shrink-0" />
                <span className="text-center">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />
    </div>
  );
};

export default PersonalDevelopment;