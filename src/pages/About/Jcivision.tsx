import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Target, 
  Heart, 
  Users, 
  Globe, 
  Lightbulb, 
  Award, 
  Compass,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Handshake
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
// import in3Img from "../../assets/images/Gallery/in3.jpg";
// import visionImg from "../../assets/images/112/vision.webp";
import ps4 from "../../assets/Images/Gallery/ps4.webp";
import ps8 from "../../assets/Images/Gallery/ps8.webp";
import ps5 from "../../assets/Images/Gallery/ps5.webp";

const Jcivision = () => {
  const [activeSection, setActiveSection] = useState('vision');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero slides for Vision & Mission page
  const slides = [
    {
      title: "Vision & Mission ",
      subtitle: "Guiding Principles That Drive Our Impact",
      description: "Discover the core beliefs and aspirations that shape our commitment to developing young leaders and creating positive community change.",
      image: ps4,
      cta: "Explore Our Vision"
    },
    {
      title: "Our Vision",
      subtitle: "Be the Foremost Global Network of Young Leaders",
      description: "Setting the standard for leadership excellence, global recognition, and sustainable community impact worldwide.",
      image: ps8,
      cta: "Learn More"
    },
    {
      title: "Our Mission", 
      subtitle: "Empowering Young Leaders for Positive Change",
      description: "Providing leadership development opportunities that transform passionate youth into capable changemakers.",
      image: ps5,
      cta: "See Our Impact"
    }
  ];

  

  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <SEOHead 
        title="Vision, Mission & Values - JCI Nigeria UNIBEN"
        description="Discover the vision, mission, and core values that drive JCI Nigeria UNIBEN's commitment to developing young leaders and creating positive community impact."
        keywords="JCI Nigeria vision, mission, values, leadership development, community service, youth empowerment"
      />

      {/* Hero Slideshow - Same size as other pages */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
               {/* ✅ Show actual slide image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
          {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
          <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
              {slides[currentSlide].subtitle}
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
            <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
              {slides[currentSlide].description}
            </p>
          </div>
          
          {/* Mobile-first button alignment - left aligned on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-center items-start sm:items-center px-0 sm:px-4">
            <button className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105 transform">
              <span className="relative z-10 flex items-center justify-center gap-2">
                {slides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-jcin-yellow/80 to-jcin-yellow/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex gap-3 sm:gap-4">
              <button 
                onClick={() => setActiveSection('vision')}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'vision' 
                    ? 'bg-jcin-yellow text-jcin-black shadow-2xl' 
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Vision
              </button>
              <button 
                onClick={() => setActiveSection('mission')}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                  activeSection === 'mission' 
                    ? 'bg-jcin-yellow text-jcin-black shadow-2xl' 
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Mission
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex gap-2 sm:gap-3">
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

      {/* Vision Section */}
      <div className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-white transition-all duration-500 ${
        activeSection === 'vision' ? 'block' : 'hidden'
      }`} id="vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-yellow rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 group-hover:-rotate-4 sm:group-hover:-rotate-6 transition-transform duration-300"></div>
              <img
                src={visionImg}
                alt="JCIN UNIBEN Vision"
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2">
                <div className="text-xs sm:text-sm font-semibold text-jcin-light-blue">Vision</div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Our Vision</h2>
                </div>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8"></div>
              </div>
              
              <div className="bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed mb-4 sm:mb-6">
                  "Be the foremost global network of young leaders."
                </blockquote>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">What This Means</h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {[
                    "Excellence in leadership development programs",
                    "Global recognition and partnerships",
                    "Sustainable community impact projects", 
                    "Empowering the next generation of leaders"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-teal flex-shrink-0" />
                      <span className="text-sm sm:text-base md:text-lg text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-white transition-all duration-500 ${
        activeSection === 'mission' ? 'block' : 'hidden'
      }`} id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-jcin-yellow to-jcin-teal rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Our Mission</h2>
                </div>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue mb-6 sm:mb-8"></div>
              </div>
              
              <div className="bg-gradient-to-br from-jcin-yellow to-jcin-teal rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed mb-4 sm:mb-6">
                  "Provide leadership development opportunities that empower young people to create positive change."
                </blockquote>
              </div>

              
            </div>

            <div className="relative group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-yellow to-jcin-teal rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={in3Img}
                alt="JCIN UNIBEN Mission"
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
              />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2">
                <div className="text-xs sm:text-sm font-semibold text-jcin-yellow">Action Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>

 


      {/* Call to Action */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow text-jcin-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to <span className="text-white">Live These Values?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 px-4 leading-relaxed">
            Join us in building a community where leadership, fellowship, and service create lasting positive change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <button className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-jcin-black text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Join Our Community
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-jcin-black text-jcin-black font-bold text-lg sm:text-xl rounded-full hover:bg-jcin-black hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              Explore Programs
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              "Values-driven leadership development",
              "Global network of like-minded leaders",
              "Meaningful community impact projects"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 sm:gap-3 text-jcin-black font-semibold text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-teal flex-shrink-0" />
                <span className="text-center">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jcivision;