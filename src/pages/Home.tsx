import { useState, useEffect } from 'react';
import { Play, Globe, Users, Target, Award, ArrowRight, Star, Quote, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ekodun from "../assets/Images/111/ekodun.webp";
import health from "../assets/Images/112/health.webp";
import bm from "../assets/Images/111/bm.webp";
import praiseImg from "../assets/Images/board1/praise.jpg";
import pub1Img from "../assets/Images/Gallery/pub1.webp";
import ige from "../assets/Images/Gallery/ige.webp";
import odey from "../assets/Images/Gallery/odey.webp";
import  noel from "../assets/Images/board1/noel.webp";
import RegistrationForm from '../components/RegistrationForm';
import PersonalDevelopment from "../components/PersonalDevelopment";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const slides = [
    {
      title: "We are the Young Enterprises",
      subtitle: "Developing leaders, empowering minds, creating global impact.",
      image: ekodun, // ✅ now using imported variable, no quotes
      cta: "Register Now"
    },
    {
      title: "Building Tomorrow's Entrepreneurs",
      subtitle: "Transform your ideas into impactful ventures with our comprehensive support",
      image: bm,
      cta: "Start Building"
    },
    {
      title: "Creating Positive Change",
      subtitle: "Join the largest collegiate JCI chapter in Nigeria and make your mark",
      image: health,
      cta: "Join Now",

    }
  ];
  const testimonials = [
    {
      name: "EMMANUEL IGE",
      role: "2024 Executive Vice President JCIN UNIBEN, CEO of Explicit Online Tutorial",
      image: ige,
      text: "Joining JCIN UNIBEN in my 100 level was the best decision I made to grow as a leader, professional, and person beyond academics.",
      rating: 5
    },
    {
      name: "TESTIMONY ODEY",
      role: "JCIN UNIBEN Member",
      image: odey,
      text: "Despite thinking I wouldn't fit in, joining JCIN UNIBEN turned out to be one of my best decisions as it gave me opportunities to grow, perform, connect, and thrive beyond my creative expectations.",
      rating: 5
    },
    {
      name: "EBEIGBE NOEL",
      role: "Senator, 38th Assembly, Uniben",
      image: noel,
      text: "JCI sparked my leadership journey, built resilience, inspired meaningful connections, and ignited a lifelong commitment to impact—proving it's more than a group, it's a movement.",
      rating: 5
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
   <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
  {/* Hero Slideshow */}
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Slide image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay */}
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
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-center items-start sm:items-center px-0 sm:px-4">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {slides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-jcin-yellow/80 to-jcin-yellow/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
           

            
            <button className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base sm:text-lg rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 transform">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Our Story
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



      {/* Opportunity Categories */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Future</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto px-4">
              Four core part of jcinuniben designed to elevate young students to prominence leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Personal Development",
                description: "Upskill yourself at your own pace through comprehensive training programs, workshops, and mentorship opportunities.",
                icon: Target,
                link: "/PersonalDevelopment" // 👈 route to page
              },
              {
                title: "Business and Entrepreneurship",
                description: "Stand out not just as a student but also as an exceptional entrepreneur with our business development programs.",
                icon: Award
              },
              {
                title: "International Cooperation",
                description: "International Cooperation",
                icon: Globe
              },
              {
                title: "Community Impact",
                description: "Execute community projects and lay your impact in communities around you while building your legacy.",
                icon: Users
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
              >
                <div className="absolute inset-0">
                  <img 
                    src={pub1Img}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>
                <div className="relative p-4 sm:p-6 md:p-8 h-64 sm:h-72 md:h-80 flex flex-col justify-between text-white">
                  <div>
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-jcin-yellow transition-colors duration-300 leading-tight">{category.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{category.description}</p>
                  </div>

                  <Link
          to={category.link} className="self-start mt-4 sm:mt-6 flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all hover:text-jcin-yellow text-sm sm:text-base">
                    Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Presidential Message */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-yellow to-jcin-yellow rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-300"></div>
             <img
  src={praiseImg}
  alt="President Praise Ewere"
  className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
/>
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2">
                <div className="text-xs sm:text-sm font-semibold text-slate-900"> President</div>
                <div className="text-xs text-slate-600">JCIN UNIBEN 2025</div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-jcin-yellow mb-4 sm:mb-6" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-jcin-black mb-4 sm:mb-6 leading-tight">
                  Leading the <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-white bg-clip-text text-transparent">Our Legacy</span> Movement
                </h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-jcin-black leading-relaxed">
                <p>
                  Dear Members of JUNIOR CHAMBERS INTERNATIONAL, NIGERIA, UNIVERSITY OF BENIN,
                </p>
                <p>
                  I welcome you to the  <strong>‘OUR LEGACY’</strong> Administrative Local Organisation Year 2025. Every great legacy begins with a decision, to build, to grow and leave an impact that lasts. Together we will strengthen our organisation, empower our members and set new standards of leadership and impact. Every effort counts and every Idea matters. OUR LEGACY is not just a theme, It is a movement , one that will define who we are and what we stand for. I am honoured to serve, and I am confident that together we will make history.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-jcin-black border-l-4 border-jcin-yellow pl-4 sm:pl-6">
                  The future belongs to those who build a sustainable LEGACY with BRICKS.
                </p>
              </div>
              
              <div className="pt-4 sm:pt-6">
                <div className="text-lg sm:text-xl font-bold text-jcin-black">EWERE PRAISE FESTUS</div>
                <div className="text-jcin-yellow font-semibold text-sm sm:text-base">LOCAL ORGANIZATION PRESIDENT, JCIN UNIBEN</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent leading-tight">
              My JCI Stories & Testimonials
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Hear from leaders who transformed their lives through JCIN UNIBEN
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    currentTestimonial === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full absolute inset-0'
                  }`}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto mb-6 sm:mb-8 border-4 border-jcin-yellow shadow-xl"
                    />
                    
                    <div className="flex justify-center mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-jcin-yellow fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-white">{testimonial.name}</div>
                      <div className="text-jcin-yellow font-semibold text-sm sm:text-base">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-jcin-yellow w-6 sm:w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent leading-tight">
              Experience Our Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Discover how JCIN UNIBEN is transforming lives and communities across the globe
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
              <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/Q00T4ZB8fYg?si=F-29r-T4VHGsg9qi"
  title="JCIN UNIBEN Impact Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
></iframe>

              <div className="absolute inset-0 border-2 sm:border-4 border-jcin-yellow/20 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
            </div>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-jcin-light-blue/20 to-jcin-dark-blue/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl -z-10 group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow text-jcin-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            Ready to <span className="text-white">Legacy</span> Your Future?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 px-4 leading-relaxed">
            Join the movement of young leaders who are reshaping University of Benin. Your extraordinary journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-12 sm:mb-16">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 bg-jcin-black text-white font-bold text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Join JCI Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <Link to="/project">
              <button className="group w-full sm:w-auto px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 border-2 sm:border-3 border-jcin-black text-jcin-black font-bold text-lg sm:text-xl rounded-full hover:bg-jcin-black hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                Explore Projects
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              "Global networking opportunities",
              "Leadership development programs",
              "Mentorship from industry experts"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 sm:gap-3 text-jcin-black font-semibold text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow flex-shrink-0" />
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

export default Home;