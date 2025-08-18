import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Award,
  Globe,
  ExternalLink,
  Heart,
  Share2
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import RegistrationForm from '../components/RegistrationForm';

import b1 from "../assets/Images/Gallery/b1.webp";
import tt from "../assets/Images/Gallery/tt.webp";
import ju12 from "../assets/Images/Gallery/ju12.webp";
import baw from "../assets/Images/Gallery/baw.webp";
import typ from "../assets/Images/Gallery/typ.webp";
import ebl from "../assets/Images/Gallery/ebl.webp";
import uds from "../assets/Images/Gallery/uds.webp";
import health from "../assets/Images/112/health.webp";

// TypeScript interfaces
interface KeyProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  impact: string;
  reach: string;
  investment: string;
  duration: string;
  icon: any;
  color: string;
  keyFeatures: string[];
  achievements: string[];
}

interface KeyProjectCardProps {
  project: KeyProject;
}

const KeyProjectCard: React.FC<KeyProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-full overflow-hidden">
          <img
  src={project.image }
  alt={project.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${project.color}`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${project.color}`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-jcin-light-blue transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-jcin-dark-blue">{project.impact}</div>
              <div className="text-sm text-gray-600">Impact</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-jcin-dark-blue">{project.reach}</div>
              <div className="text-sm text-gray-600">Reach</div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-jcin-teal flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          

          {/* Action Button */}
          {/* <button className="group flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold rounded-lg hover:from-jcin-dark-blue hover:to-jcin-light-blue transition-all duration-300 transform hover:scale-105">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const featuredSlides = [
    { id: 1, title: "TOYP Award", image: b1 },
    { id: 2, title: "EBL (Employability, Business, and Leadership) ", image: tt },
    { id: 3, title: "Community Impact Initiative", image: ju12 },
  ];

  const keyProjects: KeyProject[] = [
    {
      id: 1,
      title: "TOYP Award",
      category: "Award",
      description: "TOYP UNIBEN: Prestigious award platform recognizing and celebrating outstanding young achievers within the University of Benin community, inspiring positive change and leadership excellence.",
      image: typ,
      impact: "1000+",
      reach: "UNIBEN Communities",
      investment: "$5M+",
      duration: "Ongoing",
      icon: Award,
      color: "bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue",
      keyFeatures: [
        "Recognition of top 10 outstanding young persons.",
        "Inclusive of both JCIN members and non-members.",
        "Transparent nomination and selection process.",
        "Celebration event showcasing awardees’ impact stories.",
        "Distinguished leaders as judges."
      ],
      achievements: [
        "Recognized 100+ outstanding young persons",
        "Increased campus leadership awareness by 40%",
        "Established partnerships with 15+ organizations"
      ]
    },
    {
      id: 2,
      title: "JCIN UNIBEN Brand Awareness Week",
      category: "Social Development",
      description: "Engaging campus-wide initiative showcasing JCIN UNIBEN through games, inter-house competitions, and virtual sessions featuring national officers and alumni to inspire and connect students.",
      image: baw,
      impact: "1,000+",
      reach: "UNIBEN Communities",
      investment: "$3M+",
      duration: "1 week",
      icon: Target,
      color: "bg-gradient-to-r from-jcin-teal to-jcin-teal",
      keyFeatures: [
        "Throwback Thursday",
        "Ekehuan Campus Rally",
        "JCIN UNIBEN 5-Aside Football Challenge",
        "Opening Ceremony",
        "Trivia Night"
      ],
      achievements: [
        "Increased brand awareness by 60%",
        "Engaged 1000+ students across campus",
        "Created lasting partnerships with 5+ organizations"
      ]
    },
    {
      id: 3,
      title: "Community Impact Initiative",
      category: "Social Development",
      description: "In commemoration of International Human Duties Day, JCI UNIBEN hosted its flagship outreach program, JCI Goes to School, engaging students on the importance of dignity, respect, and human rights in today’s society.",
      image: uds,
      impact: "500+",
      reach: "UDSS",
      investment: "$8M+",
      duration: "A day",
      icon: Heart,
      color: "bg-gradient-to-r from-jcin-yellow to-jcin-yellow",
      keyFeatures: [
        "Awareness Sessions",
        "Community Impact Drive",
        "Creative Expression"
      ],
      achievements: [
        "Educated 500+ students on human rights",
        "Established community partnerships",
        "Created sustainable impact programs"
      ]

    },

    {
      id: 4,
      title: "Employability, Business, and Leadership (EBL) – Shaping Students into Workplace-Ready Leaders and Entrepreneurs",
      category: "Capacity-Building Program",
      description: "A capacity-building program designed to equip students with the essential skills to excel in the workplace, drive sustainable businesses, and lead with impact in society.",
      image: ebl,
      impact: "2,000+",
      reach: "UNIBEN Communities",
      investment: "$8k+",
      duration: "1 Month",
      icon: Heart,
      color: "bg-gradient-to-r from-jcin-yellow to-jcin-yellow",
      keyFeatures: [
        "Employability Skills Training",
        "Business Development",
        "Leadership Mastery",
        "Networking Opportunities"
      ],
      achievements: [
        "Trained 2000+ students in essential skills",
        "Increased employment rates by 45%",
        "Launched 50+ successful businesses"
      ]

    },

     {
      id: 5,
      title: "Health Feast and Outreach Program",
      category: "Health & Wellness",
      description: "A campus-wide health initiative where students not only learn about preventive healthcare but also access free health checks. Services include blood group testing, dental care, chest and balance examination, optometry, malaria screening, therapy, and more—promoting overall student well-being.",
      image: health,
      impact: "1,000+",
      reach: "UNIBEN CommunitY",
      investment: "$8k+",
      duration: "A Day",
      icon: Heart,
      color: "bg-gradient-to-r from-jcin-yellow to-jcin-yellow",
      keyFeatures: [
        "Comprehensive Health Checks",
        "Specialist Consultations",
        "Preventive Education",
        "Student-Centered Approach",
        "Holistic Wellness"
      ],
      achievements: [
        "Provided health checks to 1000+ students",
        "Identified and treated 200+ health issues",
        "Increased health awareness by 70%"
      ]

    }
  ];

  return (
    <>
      <SEOHead
        title="Our Projects - JCI Nigeria UNIBEN"
        description="Discover JCI Nigeria's impactful leadership and community development projects. From TOYP Award to Employability Business and Leadership, see how we're creating positive change across shore of UNIBEN."
        keywords="JCI Nigeria UNIBEN projects, TOYP Award, youth leadership, community development, entrepreneurship, UNIBEN"
        canonicalUrl="/projects"
      />
      
      <div className="bg-slate-50 text-jcin-black font-sans overflow-x-hidden">
        {/* Hero Section - Matching Home Page size */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            {featuredSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue opacity-90"></div> */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
            {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
            <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
                Our Projects
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
                Transforming communities and empowering young leaders across University of Benin
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
              <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
                Through innovative programs and strategic partnerships, we create lasting positive change in our community while developing the next generation of African leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-center items-start sm:items-center px-0 sm:px-4">
              <button className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Impact
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-jcin-white/10 backdrop-blur-sm text-jcin-white font-semibold text-base sm:text-lg rounded-full border-2 border-jcin-white/20 hover:bg-jcin-white/20 hover:border-jcin-white/40 transition-all duration-300 hover:scale-105 transform">
                View Gallery
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex gap-2 sm:gap-3">
            {featuredSlides.map((_, index) => (
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Key Projects Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-jcin-black mb-4 sm:mb-6 leading-tight">
                Key <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Initiatives</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                Our flagship programs driving transformational change across University of Benin
              </p>
            </div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {keyProjects.map((project: KeyProject) => (
                <KeyProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow p-6 sm:p-8 lg:p-12 text-jcin-black w-full -mx-4 sm:-mx-6 lg:-mx-8 mt-12 sm:mt-16 lg:mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
              Ready to Make an <span className="text-white">Impact?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-jcin-black/80 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              Join our community of changemakers and be part of the transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button 
                onClick={() => setShowRegistrationForm(true)}
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-jcin-black text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Involved
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-jcin-black text-jcin-black font-semibold text-base sm:text-lg rounded-full hover:bg-jcin-black hover:text-white transition-all duration-300 hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />
    </>
  );
};

export default Project;