import { Link } from 'react-router-dom';
import { Users, Target, Award, Globe, ArrowRight, Star, Quote } from 'lucide-react';

const About = () => {
  const aboutSections = [
    {
      title: 'JCIN UNIBEN Overview',
      description: 'Learn about our organization, history, and the impact we\'ve made in developing young leaders.',
      icon: Users,
      href: '/about/Jcinunibenverview',
      color: 'from-jcin-light-blue to-jcin-dark-blue'
    },
    {
      title: 'Vision, Mission & Values',
      description: 'Discover our core principles, goals, and the values that drive our leadership development programs.',
      icon: Target,
      href: '/about/Jcivision',
      color: 'from-jcin-teal to-jcin-teal'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Years of Excellence' },
    { number: '100%', label: 'Leadership Focus' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              About JCIN UNIBEN
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-jcin-light-blue max-w-4xl mx-auto px-4 leading-relaxed">
              Empowering young leaders to create positive change through leadership development, 
              community service, and global networking opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-jcin-dark-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Discover Our Organization
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Explore the different aspects of JCIN UNIBEN and understand how we're shaping the future of leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutSections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${section.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <section.icon className="w-20 h-20 sm:w-24 sm:h-24 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                  {section.description}
                </p>
                <Link
                  to={section.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold rounded-lg hover:from-jcin-light-blue hover:to-jcin-dark-blue transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: 'Leadership',
                description: 'Developing strong, ethical leaders who inspire others.',
                icon: Star,
                color: 'text-jcin-yellow'
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do.',
                icon: Award,
                color: 'text-jcin-dark-blue'
              },
              {
                title: 'Service',
                description: 'Contributing to the betterment of our communities.',
                icon: Users,
                color: 'text-jcin-teal'
              },
              {
                title: 'Global',
                description: 'Building international connections and understanding.',
                icon: Globe,
                color: 'text-jcin-light-blue'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 sm:mb-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-full h-full" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-jcin-dark-blue mx-auto mb-6 sm:mb-8" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-6 sm:mb-8 leading-relaxed">
            "To provide development opportunities that empower young people to create positive change."
          </blockquote>
          <div className="text-lg sm:text-xl font-semibold text-jcin-light-blue">
            Our Mission
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Ready to Join Our Mission?
          </h2>
          <p className="text-lg sm:text-xl text-jcin-light-blue mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Become part of a global network of young leaders who are making a difference in their communities and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-jcin-dark-blue font-semibold rounded-lg hover:bg-jcin-light-blue hover:text-jcin-dark-blue transition-all duration-200 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/Project"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-jcin-dark-blue transition-all duration-200"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 