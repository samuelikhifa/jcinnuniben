import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Send, ArrowRight, CheckCircle,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Clock
} from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';

// TypeScript interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  organization: string;
  category?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    organization: ''
  });
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState<boolean>(false);

  const featuredSlides = [
    {
      id: 1,
      title: "Connect with JCI Nigeria",
      subtitle: "Join a community of young leaders making a difference",
      image: "https://via.placeholder.com/1200x600/003da5/ffffff?text=Connect+with+JCI"
    },
    {
      id: 2,
      title: "Get Involved Today",
      subtitle: "Discover opportunities to lead, learn, and grow",
      image: "https://via.placeholder.com/1200x600/ffc20e/000000?text=Get+Involved"
    },
    {
      id: 3,
      title: "Shape Nigeria's Future",
      subtitle: "Be part of the change you want to see",
      image: "https://via.placeholder.com/1200x600/26A69A/ffffff?text=Shape+the+Future"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [featuredSlides.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        organization: ''
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section - Matching other pages structure and size */}
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
              {featuredSlides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
              Get In Touch With Us
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
            <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
              {featuredSlides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Mobile-first button alignment - left aligned on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-center items-start sm:items-center px-0 sm:px-4">
            <button 
              onClick={() => setShowRegistrationForm(true)}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
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

      {/* Main Contact Form */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-jcin-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-jcin-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Get in <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {showSuccess && (
                <div className="mb-6 p-4 bg-jcin-teal/10 border border-jcin-teal/30 rounded-2xl flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-jcin-teal" />
                  <div>
                    <div className="font-semibold text-jcin-teal">Message Sent Successfully!</div>
                    <div className="text-jcin-teal text-sm">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Organization/Company</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-jcin-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-jcin-light-blue/30 transition-all duration-300 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-jcin-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent">
                  Direct Contact
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow" />
                    </div>
                    <div>
                      <div className="font-semibold text-jcin-white mb-1 text-sm sm:text-base">Visit Us</div>
                      <div className="text-blue-100 text-sm sm:text-base">UNIBEN, Benin City, Edo State, Nigeria</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow" />
                    </div>
                    <div>
                      <div className="font-semibold text-jcin-white mb-1 text-sm sm:text-base">Call Us</div>
                      <div className="text-blue-100 text-sm sm:text-base">+234 09086138683</div>
                      <div className="text-blue-100 text-sm sm:text-base">+234 803 456 7890</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow" />
                    </div>
                    <div>
                      <div className="font-semibold text-jcin-white mb-1 text-sm sm:text-base">Email Us</div>
                      <div className="text-blue-100 text-sm sm:text-base">jcinuniben@gmail.com</div>
                      <div className="text-blue-100 text-sm sm:text-base">contact@jcinuniben.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-jcin-yellow" />
                    </div>
                    <div>
                      <div className="font-semibold text-jcin-white mb-1 text-sm sm:text-base">Office Hours</div>
                      <div className="text-blue-100 text-sm sm:text-base">Monday - Friday: 9:00 AM - 5:00 PM</div>
                      <div className="text-blue-100 text-sm sm:text-base">Saturday: 10:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-jcin-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Quick answers to common inquiries
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "How can I become a member of JCI Nigeria?",
                answer: "Membership is open to individuals aged 18-40 who demonstrate leadership potential and commitment to community development. You can apply through our website or contact your nearest local chapter."
              },
              {
                question: "What programs does JCI Nigeria offer?",
                answer: "We offer leadership development programs, community service projects, business networking opportunities, international exchange programs, and the prestigious TOYP awards program."
              },
              {
                question: "How can my organization partner with JCI Nigeria?",
                answer: "We welcome partnerships with organizations that share our vision of developing young leaders. Contact our partnership team at partnerships@jcinigeria.org to explore collaboration opportunities."
              },
              {
                question: "Do you offer international opportunities?",
                answer: "Yes! JCI Nigeria provides various international opportunities including exchange programs, global conferences, leadership training abroad, and cross-cultural collaboration projects."
              },
              {
                question: "How can I nominate someone for the TOYP Awards?",
                answer: "TOYP nominations open annually in September. Visit our website for nomination criteria and application forms, or contact our awards committee for more information."
              },
              {
                question: "What is the ELV8 theme about?",
                answer: "ELV8 represents our 2025 theme focused on elevating leadership in four key areas: Individual Development, Business Excellence, International Network, and Community Impact."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-4 sm:p-6 hover:bg-slate-100 transition-colors">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue rounded-full flex items-center justify-center text-jcin-white text-xs sm:text-sm font-bold">
                    {index + 1}
                  </div>
                  {faq.question}
                </h3>
                <p className="text-slate-700 leading-relaxed pl-6 sm:pl-8 text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Still have questions?</p>
            <button className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-jcin-light-blue to-jcin-dark-blue text-jcin-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Contact Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue text-jcin-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-jcin-yellow to-jcin-yellow bg-clip-text text-transparent leading-tight">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12">
            Follow us on social media and subscribe to our newsletter for the latest updates
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-full text-slate-900 bg-jcin-white focus:outline-none focus:ring-4 focus:ring-jcin-yellow/30 shadow-lg"
            />
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-jcin-yellow to-jcin-yellow text-jcin-black font-bold rounded-full shadow-2xl hover:shadow-jcin-yellow/30 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              { name: 'Facebook', icon: Facebook },
              { name: 'Twitter', icon: Twitter },
              { name: 'LinkedIn', icon: Linkedin },
              { name: 'Instagram', icon: Instagram },
              { name: 'YouTube', icon: Youtube }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 group-hover:text-jcin-white" />
              </a>
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

export default Contact;