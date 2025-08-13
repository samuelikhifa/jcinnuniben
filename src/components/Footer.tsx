import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-jcin-dark-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JCI
                </div>
              </div>
              <div>
                <div className="font-bold text-xl">JCIN UNIBEN</div>
                <div className="text-gray-400 text-sm">Leadership Excellence</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Junior Chamber International UNIBEN is a leadership organization for students committed to creating positive change within and beyond the University of Benin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About JCI', href: '/about' },
                { label: 'Our Team', href: '/team' },
                { label: 'Registration', href: '/register' },
                { label: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              {[
                { label: 'Personal Development', href: '/programs/personal' },
                { label: 'Business & Entrepreneurship', href: '/programs/business' },
                { label: 'Community Action', href: '/programs/community' },
                { label: 'International Cooperation', href: '/programs/international' }
              ].map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a 
                  href="mailto:jcinuniben@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  jcinuniben@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a 
                  href="tel:+2348123456789" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +234 812 345 6789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  UNIBEN, Benin City, Edo State
                </span>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-6 py-2 bg-[#003087] text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 JCIN UNIBEN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;