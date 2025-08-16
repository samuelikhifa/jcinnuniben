import { useState } from 'react';
import { 
  Users, Award, TrendingUp, 
  Star, MapPin, Linkedin, Twitter, Instagram
} from 'lucide-react';
import SEOHead from '../components/SEOHead';


// TypeScript interfaces
interface Executive {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  achievements: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  impact: string;
}

const Administration = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredSlides = [
    { id: 1, title: "Meet Our Leadership Team", image: "/images/administration/leadership-team.jpg" },
    { id: 2, title: "Driving Positive Change", image: "/images/administration/positive-change.jpg" },
    { id: 3, title: "Youth Empowerment Through Leadership", image: "/images/administration/youth-empowerment.jpg" },
  ];

  const currentExecutives: Executive[] = [
    {
      id: 1,
      name: "Praise Ewere",
      position: "President",
      image: jciImages.administration.president.src,
      bio: "Leading JCI Nigeria UNIBEN with vision and dedication to youth empowerment and community development.",
      achievements: [
        "Increased membership by 40%",
        "Launched 5 major community projects",
        "Established partnerships with 10+ organizations"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Vice President Internal",
      position: "Vice President Internal",
      image: jciImages.administration.vp.src,
      bio: "Overseeing internal operations and member development programs.",
      achievements: [
        "Streamlined internal processes",
        "Improved member retention rate",
        "Organized leadership training sessions"
      ],
      social: {
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Vice President External",
      position: "Vice President External",
      image: jciImages.administration.secretary.src,
      bio: "Managing external relations and community partnerships.",
      achievements: [
        "Secured major sponsorships",
        "Built strategic partnerships",
        "Enhanced public relations"
      ],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const majorAchievements: Achievement[] = [
    {
      id: 1,
      title: "Community Health Initiative",
      description: "Provided free health screenings to over 500 community members",
      date: "2024-03-15",
      category: "Community Service",
      impact: "500+ lives impacted"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      description: "Organized a comprehensive leadership development program for young professionals",
      date: "2024-02-20",
      category: "Leadership Development",
      impact: "200+ participants trained"
    },
    {
      id: 3,
      title: "Educational Support Program",
      description: "Provided scholarships and educational materials to underprivileged students",
      date: "2024-01-10",
      category: "Education",
      impact: "50+ students supported"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Administration - JCI Nigeria UNIBEN"
        description="Meet the dedicated leadership team of JCI Nigeria UNIBEN, driving positive change and youth empowerment in our community."
        keywords="JCI Nigeria, administration, leadership, executives, UNIBEN"
        canonicalUrl="/administration"
      />
      
      <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
        {/* Hero Section - Matching Vision page structure and size */}
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
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue opacity-90"></div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
            {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
            <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
                Administration
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
                Meet Our Dedicated Leadership Team
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
              <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
                Driving positive change and youth empowerment through visionary leadership and dedicated service to our community.
              </p>
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

        {/* Navigation Tabs */}
        <div className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-2xl shadow-lg p-2 mb-8 sm:mb-12 inline-flex w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setActiveTab('current')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'current'
                    ? 'bg-jcin-light-blue text-jcin-white shadow-lg'
                    : 'text-slate-700 hover:text-jcin-light-blue hover:bg-slate-100'
                }`}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Current Executive
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'achievements'
                    ? 'bg-jcin-light-blue text-jcin-white shadow-lg'
                    : 'text-slate-700 hover:text-jcin-light-blue hover:bg-slate-100'
                }`}
              >
                <Award className="w-5 h-5 inline-block mr-2" />
                Major Achievements
              </button>
            </div>

            {/* Current Executive Tab */}
            {activeTab === 'current' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {currentExecutives.map((executive: Executive) => (
                    <div key={executive.id} className="bg-jcin-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <div className="relative aspect-square overflow-hidden">
                        {/* <OptimizedImage
                          src={executive.image}
                          alt={executive.name}
                          className="w-full h-full object-cover"
                          fallback="https://via.placeholder.com/400x400/003da5/ffffff?text=Executive"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-jcin-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-jcin-white mb-1">{executive.name}</h3>
                          <p className="text-jcin-yellow font-semibold">{executive.position}</p>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-slate-700 mb-4 leading-relaxed">{executive.bio}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-jcin-yellow" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {executive.achievements.map((achievement: string, index: number) => (
                              <li key={index} className="text-sm text-slate-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-jcin-light-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex gap-3">
                          {executive.social.linkedin && (
                            <a href={executive.social.linkedin} className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {executive.social.twitter && (
                            <a href={executive.social.twitter} className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors">
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {executive.social.instagram && (
                            <a href={executive.social.instagram} className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors">
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Major Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {majorAchievements.map((achievement: Achievement) => (
                    <div key={achievement.id} className="bg-jcin-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-jcin-yellow/20 text-jcin-dark-blue text-sm font-semibold rounded-full mb-2">
                            {achievement.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{achievement.title}</h3>
                        </div>
                        <Award className="w-8 h-8 text-jcin-yellow flex-shrink-0 ml-4" />
                      </div>
                      
                      <p className="text-slate-700 mb-4 leading-relaxed">{achievement.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-jcin-teal" />
                          <span>{new Date(achievement.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-jcin-teal" />
                          <span className="font-semibold text-jcin-light-blue">{achievement.impact}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-yellow via-jcin-yellow to-jcin-yellow text-jcin-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 leading-tight">
              Ready to <span className="text-jcin-white">Join Our Team?</span>
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Become part of a leadership team that's making a real difference in our community and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-jcin-black text-jcin-white font-bold text-lg rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Apply for Leadership
                  <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-jcin-black text-jcin-black font-bold text-lg rounded-full hover:bg-jcin-black hover:text-jcin-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                View Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administration;