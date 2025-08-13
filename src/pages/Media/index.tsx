import React from 'react';
import { Link } from 'react-router-dom';

const Media: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Media & Resources
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-jcin-light-blue max-w-4xl mx-auto px-4 leading-relaxed">
              Explore our gallery, press releases, and media resources showcasing JCI's impact and achievements
            </p>
          </div>
        </div>
      </div>

      {/* Media Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Photo Gallery
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Browse through our collection of photos capturing memorable moments, events, and achievements of JCI.
              </p>
              <Link
                to="/media/Gallery"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold rounded-lg hover:from-jcin-light-blue hover:to-jcin-dark-blue transition-all duration-200 transform hover:scale-105"
              >
                View Gallery
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Press Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-jcin-teal to-jcin-teal"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Press Releases
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Stay updated with our latest news, announcements, and press releases about JCI's activities and initiatives.
              </p>
              <Link
                to="/media/Press"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jcin-teal to-jcin-teal text-white font-semibold rounded-lg hover:from-jcin-teal hover:to-jcin-teal transition-all duration-200 transform hover:scale-105"
              >
                Read Press
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 sm:mt-24 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Media Inquiries
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              For media inquiries, press releases, or to request interviews with JCI representatives, 
              please contact our media team. We're here to help journalists and media professionals 
              get the information they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-white font-semibold rounded-lg hover:from-jcin-light-blue hover:to-jcin-dark-blue transition-all duration-200"
              >
                Contact Media Team
              </Link>
              <a
                href="mailto:media@jci.org"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media; 