import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Home, 
  Users, 
  FolderOpen, 
  Camera, 
  User,
  FileText, 
  Phone,
  LogIn,
  ChevronRight,
  Search
} from 'lucide-react';
import logo from "../assets/Images/Gallery/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navbar-container')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownMenus = {
    about: {
      title: 'About',
      icon: Users,
      items: [
        { label: 'JCIN UNIBEN Overview', href: '/about/Jcinunibenverview' },
        { label: 'Vision,  & Mission', href: '/about/Jcivision' },
      ]
    },
    media: {
      title: 'Media',
      icon: Camera,
      items: [
        { label: 'Photo Gallery', href: '/media/Gallery' },
        { label: 'Press Releases', href: '/media/Press' }
      ]
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-container ${
      isScrolled ? 'bg-jcin-dark-blue/95 backdrop-blur-md shadow-xl' : 'bg-jcin-dark-blue'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - Mobile Optimized */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12  rounded-full flex items-center justify-center flex-shrink-0">
              <img 
      src={logo} 
      alt="JCI Nigeria UNIBEN Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-cover rounded-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-jcin-dark-blue rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base">
                JCI
              </div>
            </div>
            <div className="text-white min-w-0">
              {/* <div className="font-bold text-sm sm:text-lg lg:text-xl leading-tight">JCIN UNIBEN</div> */}
              {/* <div className="text-xs text-blue-200 hidden sm:block leading-tight">Leadership & Excellence</div> */}
            </div>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <a 
              href="/" 
              className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </a>

            {/* Dropdown Menus */}
            {Object.entries(dropdownMenus).map(([key, menu]) => (
              <div key={key} className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
                  onMouseEnter={() => setActiveDropdown(key)}
                >
                  {menu.title}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                
                {/* Desktop Dropdown Content */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                    activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {menu.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-gray-700 hover:text-[#003087] hover:bg-blue-50 transition-all duration-200 group"
                      >
                        <ChevronRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="font-medium text-sm">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Regular Links */}
            <a 
              href="/Project" 
              className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              Projects
            </a>
             <a 
              href="/Administration" 
              className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Administration
            </a>
            <a 
              href="/blog" 
              className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              Blog
            </a>
            <a 
              href="/contact" 
              className="flex items-center px-3 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </a>

            {/* Login Button */}
            <a 
              href="/login" 
              className="ml-3 px-4 py-2 bg-white text-[#003087] font-semibold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg flex items-center text-sm"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>



        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-4 transition-all duration-300">
            <div className="relative">
              <input
                type="text"
                placeholder="Search JCI..."
                className="w-full px-4 py-3 pl-12 bg-white/10 text-white placeholder-blue-200 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
            </div>
          </div>
        )}

        {/* Mobile Menu - Full Screen Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-[#003087] z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-600">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10  flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="JCI Nigeria UNIBEN Logo"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                {/* <div className="text-white">
                  <div className="font-bold text-lg">JCIN UNIBEN</div>
                  <div className="text-sm text-blue-200">Leadership & Excellence</div>
                </div> */}
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {/* Home */}
              <a 
                href="/" 
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
              >
                <Home className="w-6 h-6 mr-4" />
              Home
            </a>

            {/* Mobile Dropdowns */}
            {Object.entries(dropdownMenus).map(([key, menu]) => (
                <div key={key} className="space-y-2">
                <button
                  onClick={() => toggleDropdown(key)}
                    className="w-full flex items-center justify-between px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
                >
                  <span className="flex items-center">
                      <menu.icon className="w-6 h-6 mr-4" />
                    {menu.title}
                  </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                    activeDropdown === key ? 'rotate-180' : ''
                  }`} />
                </button>
                  
                  {/* Mobile Dropdown Items */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === key ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-12 space-y-1">
                    {menu.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-3 text-blue-200 hover:text-white hover:bg-white/5 rounded-lg text-base transition-all duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Other Links */}
              <a 
                href="/Project" 
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
              >
                <FolderOpen className="w-6 h-6 mr-4" />
                Projects
              </a>
              <a 
                href="/Administration" 
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
              >
                <User className="w-6 h-6 mr-4" />
                Administration
              </a>
              <a 
                href="/blog" 
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
              >
                <FileText className="w-6 h-6 mr-4" />
                Blog
              </a>
              <a 
                href="/contact" 
                onClick={closeMenu}
                className="flex items-center px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 text-lg font-medium"
              >
                <Phone className="w-6 h-6 mr-4" />
                Contact
              </a>

              {/* Mobile Login Button */}
              <div className="pt-6">
                <a 
                  href="/login" 
                  onClick={closeMenu}
                  className="flex items-center justify-center px-6 py-4 mx-4 bg-white text-[#003087] rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-blue-50"
                >
                  <LogIn className="w-6 h-6 mr-3" />
              Login
            </a>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-blue-600">
              <div className="text-center text-blue-200 text-sm">
                <p> 2025 JCIN UNIBEN. All rights reserved.</p>
                <p className="mt-1">Empowering Young Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;