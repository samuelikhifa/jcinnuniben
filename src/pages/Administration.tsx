import { useState } from "react";
import {
  Users,
  Award,
  TrendingUp,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

import RegistrationForm from '../components/RegistrationForm';
import SEOHead from "../components/SEOHead";
import r77 from "../assets/Images/Gallery/r77.webp";
import ots from "../assets/Images/Gallery/ots.jpg";
import r66 from "../assets/Images/Gallery/r66.webp";
import e33 from "../assets/Images/Gallery/e33.jpg";
import peace from "../assets/Images/board1/peace.webp";
import godwin from "../assets/Images/board1/godwin.webp";
// import  adaku from "../assets/Images/board1/ adaku .webp";
import izevbizua from "../assets/Images/board1/izevbizua .webp";
import divine from "../assets/Images/board1/divine.webp";
import aaron from "../assets/Images/board1/aaron.webp";
import efosa from "../assets/Images/board1/efosa.webp";
// import  bless from "../assets/Images/board1/bless.webp";
import fanny from "../assets/Images/board1/fanny.webp";
// import adatang from "../assets/Images/board1/adatang.webp";
import favy from "../assets/Images/board1/favy.webp";
import eze from "../assets/Images/board1/eze.webp";
import eseosa from "../assets/Images/board1/eseosa.webp";
// import jude from "../assets/Images/board1/jude.webp";
import erons from "../assets/Images/board1/erons.webp";
import olivia from "../assets/Images/board1/olivia.webp";
import efe from "../assets/Images/board1/efe.webp";
import efemena from "../assets/Images/board1/efemena.webp";
import emordi from "../assets/Images/board1/emordi.webp";
import olabisi from "../assets/Images/board1/olabisi.webp";
import df from "../assets/Images/board1/df.webp";
import kent from "../assets/Images/board1/kent.webp";
import etinosa from "../assets/Images/board1/etinosa.webp";
import fasuyi from "../assets/Images/board1/fasuyi.webp";
import percu from "../assets/Images/board1/percu.webp";
import obelawo from "../assets/Images/board1/obelawo.webp";
import priscila from "../assets/Images/board1/priscila.webp";
import ojo from "../assets/Images/board1/ojo.webp";
import peter from "../assets/Images/board1/peter.webp";
import noel from "../assets/Images/board1/noel.webp";
import chioma from "../assets/Images/board1/chioma.webp";
// TypeScript interfaces
interface Executive {
  id: number;
  name: string;
  position: string;
  image: string;

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
  const [activeTab, setActiveTab] = useState("current");
  const [currentSlide, setCurrentSlide] = useState(0);
const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const featuredSlides = [
    { id: 1, title: "Meet Our Leadership Team", image: r77 },
    { id: 2, title: "Driving Positive Change", image: ots },
    { id: 3, title: "Youth Empowerment Through Leadership", image: r66 },
  ];

  const currentExecutives: Executive[] = [
    {
      id: 1,
      name: "Praise Ewere",
      position: "President",
      image: e33,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: " Oghenetega Divine Ukeghe",
      position: "Immediate Past President-",
      image: divine,

      social: {
        linkedin: "#",
        instagram: "#",
      },
    },
    // {
    //   id: 3,
    //   name: " Osatohanmwen Goodness ",
    //   position: "Executive Vice President",
    //   image: img33,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    {
      id: 4,
      name: "  Kent Adeyinka",
      position: "Vice President Project",
      image: kent,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 5,
      name: "Ikem Peculiar Chidinma  ",
      position: "Vice President Administration",
      image: percu,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 6,
      name: "Divine-Favour Usifoh Mehnribose",
      position: "Local Organisation Treasurer",
      image: df,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 7,
      name: " Taiye Abiodun Peace",
      position: " Local Organisation Secretary",
      image: peace,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 8,
      name: "Victor Olabisi",
      position: " General Legal Counsel",
      image: olabisi,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 9,
      name: "Ishioma Olivia",
      position: "Director of Membership Growth and Retention",
      image: olivia,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 10,
      name: "  Aaron Efedosa",
      position: "Deputy Director of Membership Growth and Retention",
      image: aaron,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 11,
      name: " Izebvizua Deborah",
      position: "Director Of Skill Development ",
      image: izevbizua,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 12,
      name: "Priscilla Obadoni ",
      position: "Deputy director Of Skill Development ",
      image: priscila,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 13,
      name: " Dumebi Emordi ",
      position: "Director of Meetings",
      image: emordi,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 14,
      name: "Emmanuel Okiemute",
      position: "Deputy Director of Meetings",
      image: efemena,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 15,
      name: "   Mellina Etinosa ",
      position: " Deputy Director 2 of Meetings ",
      image: efe,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 16,
      name: "  Excellent Efosa  ",
      position: "Director of Special Duties ",
      image: efosa,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 17,
      name: " Favour Osioria ",
      position: " Deputy Director of Special Duties",
      image: favy,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 18,
      name: " Jeremiah Kelechi ",
      position: "Director of Special Content ",
      image: ojo,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 19,
      name: " Godwin Ahonsi  ",
      position: "Deputy Director of Special Content",
      image: godwin,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 20,
      name: " Igbinoba Eseosa",
      position: "Deputy Director of Communications",
      image: eseosa,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 21,
      name: " Noel Ebeigbe ",
      position: "Deputy Director 2 of Communications",
      image: noel,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    //     {
    //   id: 22,
    //   name: " Joybaby Fikayom ",
    //   position: " Director of Social",
    //   image: img33,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    {
      id: 23,
      name: " Peter Japheth",
      position: "Director of Employability, Business and Leaderships (EBL)",
      image: peter,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    //     {
    //   id: 24,
    //   name: "Blessing Ayemi",
    //   position: "Deputy Director 1 of EBL",
    //   image: bless,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    {
      id: 25,
      name: " Melissa Etinosa ",
      position: "Deputy Director 2 of EBL",
      image: etinosa,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 26,
      name: " Deborah Obelawo ",
      position: "Director of Ten Outstanding Young Persons (TOYP)",
      image: obelawo,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 27,
      name: "Chioma Obiekwe ",
      position: "Deputy Director of TOYP",
      image: chioma,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 28,
      name: " Eromosele Emmanuel ",
      position: "Director of Community Project",
      image: erons,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 29,
      name: "  Deborah Fasuyi",
      position: "Deputy Director 2 of Community Project",
      image: fasuyi,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 30,
      name: " Eze Joan Onyinyechi  ",
      position: "Director of Awards and Documentations ",
      image: eze,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 31,
      name: "Fanny Itepu ",
      position: "Committee Head of Travels and Tours",
      image: fanny,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    //     {
    //   id: 32,
    //   name: " Chimaobi Nwarisa ",
    //   position: "Disciplinary Committee",
    //   image: mobi,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // },
    //   {
    // id: 33,
    // name: " Ofure Ochiemen",
    // position: "Disciplinary Committee",
    // image: ofure,
    // social: {
    //   linkedin: "#",
    //   twitter: "#"
    // }
    // },
    // {
    //   id: 34,
    //   name: "Jude Onose ",
    //   position: "Fund Raising Committee ( Bus Project) Memeber",
    //   image: jude,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //   },
    // },
    // {
    //   id: 35,
    //   name: " Marvellous Adatang ",
    //   position: "Fund Raising Committee ( Bus Project) Memeber",
    //   image: adatang,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //   },
    // },
    //     {
    //   id: 36,
    //   name: " Favour Charles,  ",
    //   position: "Fund Raising Committee ( Bus Project) Memeber",
    //   image: charles,
    //   social: {
    //     linkedin: "#",
    //     twitter: "#"
    //   }
    // }
  ];

  const majorAchievements: Achievement[] = [
    {
      id: 1,
      title: "Community Health Initiative",
      description:
        "Provided free health screenings to over 500 community members",
      date: "2024-03-15",
      category: "Community Service",
      impact: "500+ lives impacted",
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      description:
        "Organized a comprehensive leadership development program for young professionals",
      date: "2024-02-20",
      category: "Leadership Development",
      impact: "200+ participants trained",
    },
    {
      id: 3,
      title: "Educational Support Program",
      description:
        "Provided scholarships and educational materials to underprivileged students",
      date: "2024-01-10",
      category: "Education",
      impact: "50+ students supported",
    },
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
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-full"
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
                Administration
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
                Meet Our Dedicated Leadership Team
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
              <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
                Driving positive change and youth empowerment through visionary
                leadership and dedicated service to our community.
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
                  currentSlide === index
                    ? "bg-jcin-yellow w-6 sm:w-8"
                    : "bg-white/50 hover:bg-white/70"
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
                onClick={() => setActiveTab("current")}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === "current"
                    ? "bg-jcin-light-blue text-jcin-white shadow-lg"
                    : "text-slate-700 hover:text-jcin-light-blue hover:bg-slate-100"
                }`}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Current Executive
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === "achievements"
                    ? "bg-jcin-light-blue text-jcin-white shadow-lg"
                    : "text-slate-700 hover:text-jcin-light-blue hover:bg-slate-100"
                }`}
              >
                <Award className="w-5 h-5 inline-block mr-2" />
                Major Achievements
              </button>
            </div>

            {/* Current Executive Tab */}
            {activeTab === "current" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {currentExecutives.map((executive: Executive) => (
                    <div
                      key={executive.id}
                      className="bg-jcin-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={executive.image}
                          alt={executive.name}
                          className="w-full h-full object-cover object-top"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-jcin-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-jcin-white mb-1">
                            {executive.name}
                          </h3>
                          <p className="text-jcin-yellow font-semibold">
                            {executive.position}
                          </p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex gap-3">
                          {executive.social.linkedin && (
                            <a
                              href={executive.social.linkedin}
                              className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {executive.social.twitter && (
                            <a
                              href={executive.social.twitter}
                              className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {executive.social.instagram && (
                            <a
                              href={executive.social.instagram}
                              className="p-2 bg-jcin-light-blue/10 text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-jcin-white transition-colors"
                            >
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
            {activeTab === "achievements" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {majorAchievements.map((achievement: Achievement) => (
                    <div
                      key={achievement.id}
                      className="bg-jcin-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-jcin-yellow/20 text-jcin-dark-blue text-sm font-semibold rounded-full mb-2">
                            {achievement.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                            {achievement.title}
                          </h3>
                        </div>
                        <Award className="w-8 h-8 text-jcin-yellow flex-shrink-0 ml-4" />
                      </div>

                      <p className="text-slate-700 mb-4 leading-relaxed">
                        {achievement.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-jcin-teal" />
                          <span>
                            {new Date(achievement.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-jcin-teal" />
                          <span className="font-semibold text-jcin-light-blue">
                            {achievement.impact}
                          </span>
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
              Ready to <span className="text-jcin-white">Join Our Organisation</span>
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Become part of those that's making a real difference
              in our community and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button  onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-jcin-black text-jcin-white font-bold text-lg rounded-full shadow-2xl hover:shadow-jcin-black/30 transition-all duration-300 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join Now
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
      {/* </div> */}
       {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />
    </div>

    </>
  );
};

export default Administration;
