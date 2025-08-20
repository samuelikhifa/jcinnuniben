import { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ps from "../../assets/Images/Gallery/ps.jpg";
import bm1 from "../../assets/Images/111/bm1.webp";
import otsImg from "../../assets/Images/Gallery/ots.jpg";
import fb7 from "../../assets/Images/Gallery/fb7.jpg";
import fb0Img from "../../assets/Images/Gallery/fb0.jpg";
import jciworldImg from "../../assets/Images/Gallery/jciworld.webp";
import RegistrationForm from '../../components/RegistrationForm';

const Jcinunibenverview = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Hero slides for JCIN UNIBEN Overview
  const slides = [
    {
      title: "JCIN UNIBEN Overview",
      subtitle: "Empowering Young Leaders at the University of Benin",
      description: "A dynamic community of young professionals and students dedicated to creating positive change through leadership development, community service, and international cooperation.",
      image: ps,
      cta: "Learn More"
    },
    {
      title: "Leadership Excellence",
      subtitle: "Building Tomorrow's Global Leaders",
      description: "Join the largest collegiate JCI chapter in Nigeria and develop the skills needed to make a lasting impact.",
      image: bm1,
      cta: "Join Us"
    },
    {
      title: "Global Network",
      subtitle: "Connecting Leaders Worldwide",
      description: "Be part of a worldwide network of young leaders across 120+ countries creating positive change.",
      image: fb7,
      cta: "Get Connected"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "JCIN UNIBEN was established with a vision to empower young leaders at the University of Benin."
    },
    {
      year: "2021",
      title: "First Projects",
      description: "Launched our inaugural community service projects and leadership development programs."
    },
    {
      year: "2022",
      title: "Growth & Recognition",
      description: "Expanded membership and received recognition for outstanding community impact."
    },
    {
      year: "2023",
      title: "National Impact",
      description: "Extended our reach beyond campus borders to create positive change nationwide."
    },
    {
      year: "2024",
      title: "Global Connections",
      description: "Established international partnerships and expanded our global network."
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
  {/* Hero Slideshow - Same size as Home page */}
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
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
            
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base sm:text-lg rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 transform">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Events
            </button>
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

      {/* About Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-yellow rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
              
<img
  src={otsImg}
  alt="aboutjcinuniben"
                className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                  Who We <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Are</span>
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  <strong>Junior Chamber International UNIBEN (JCIN UNIBEN)</strong> is the premier leadership development organization at the University of Benin, serving as a catalyst for positive change in our university community and beyond.
                </p>
                <p>
                  Founded on the principles of <strong>service, leadership, and fellowship</strong>, rooted in JCI's four core pillars Personal Development, Business & Entrepreneurship, Community Action, and International Cooperation.
                </p>
                <p>
                 As the largest local JCI Collegiate hub in Nigeria, we serve as a launchpad for tomorrow's leaders and a tight-knit family where every member's voice and vision matter. 
                </p>
              </div>
              
           <div className="pt-4 sm:pt-6">
  {!showMore && (
                      <button 
                    onClick={() => setShowMore(true)}
                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold text-sm sm:text-base rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
  )}
</div>

            </div>
          </div>

          {/* Expanded Section */}
          {showMore && (
            <div className="mt-16 sm:mt-20 md:mt-24 space-y-16 sm:space-y-20 md:space-y-24">
              {/* JCI Nigeria */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="relative group order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-yellow rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                  <img
                    src={fb0Img}
                    alt="JCI Nigeria"
                    className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                    JCI <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Nigeria</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    JCI Nigeria is the largest youth-based organization in Nigeria with 5000+ active members and alumni network. 
                    We equip young people with the tools and resources needed to become well-rounded leaders who can effectively navigate a globalized world and create sustainable changes.
                    Our four areas of opportunity are; Individual development, Business and entrepreneurship, Community action, and International cooperation. 
                    Do you want to be a global communicator, entrepreneur, changemaker, or networker?
                    Join us on the journey of developing young leaders for a changing world!
                  </p>
                </div>
              </div>

              {/* JCI Global */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-yellow rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                  <img
                    src={jciworldImg}
                    alt="JCI Global"
                    className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                    JCI <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">World</span>
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    JCI is a global membership-based organization that takes its members through a development journey to equip them with full potential as leaders for a changing world.
                    JCI is a global network of enterprising young leaders, ages 18 to 40.
                    Active in more than 5000 locations across nearly 115 countries. 
                    We transform passionate young people into capable and enterprising young leaders through training, programs, projects and events aligned with 4 areas of development opportunity.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-dark-blue via-jcin-light-blue to-jcin-dark-blue text-white" id="history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent leading-tight">
              Our Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              From humble beginnings to global recognition - the JCIN UNIBEN story
            </p>
          </div>
          
          <div className="relative">
            {/* Mobile: Vertical line on left, Desktop: Center line */}
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-0.5 w-0.5 sm:w-1 h-full bg-gradient-to-b from-jcin-yellow to-jcin-teal"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-start sm:items-center mb-12 sm:mb-16 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row`}
              >
                {/* Mobile: Always left aligned, Desktop: Alternating */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                } text-left`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl font-black text-jcin-yellow mb-2">{milestone.year}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">{milestone.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-1/2 top-8 sm:top-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-jcin-yellow rounded-full border-2 sm:border-4 border-jcin-dark-blue shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow text-jcin-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to <span className="text-white">Join Us?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 px-4 leading-relaxed">
            Become part of a community that's shaping the future of leadership at UNIBEN and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 md:mb-16">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-jcin-black text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Join JCIN UNIBEN
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
             <Link to="/project">
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-jcin-black text-jcin-black font-bold text-lg sm:text-xl rounded-full hover:bg-jcin-black hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              View Project
            </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              "Personal development programs",
              "Global networking opportunities", 
              "Community impact projects"
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

export default Jcinunibenverview;