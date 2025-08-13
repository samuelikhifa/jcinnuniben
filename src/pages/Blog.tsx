import React, { useState, useEffect } from 'react';
import { 
  Search, Calendar, Clock, Eye, Heart, MessageCircle, Share2, 
  BookOpen, Users, Lightbulb, Target, Award, 
  ChevronLeft, ChevronRight, 
} from 'lucide-react';

// TypeScript interfaces
interface Author {
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  shares: number;
  featured: boolean;
  trending: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: any;
}

interface FeaturedSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Categories with icons
  const categories: Category[] = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'leadership', name: 'Leadership', icon: Users },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb },
    { id: 'member-stories', name: 'Member Stories', icon: Heart },
    { id: 'community-impact', name: 'Community Impact', icon: Target },
    { id: 'achievements', name: 'Achievements', icon: Award }
  ];

  // Featured slides data
  const featuredSlides: FeaturedSlide[] = [
    {
      id: 1,
      title: "Empowering Young Leaders Across Nigeria",
      subtitle: "Discover how JCI Nigeria is shaping the next generation of changemakers",
      image: "https://via.placeholder.com/800x600/003da5/ffffff?text=Leadership+Summit",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Innovation in Community Development",
      subtitle: "Exploring groundbreaking solutions to Nigeria's most pressing challenges",
      image: "/images/innovation-hub.jpg",
      category: "Innovation"
    },
    {
      id: 3,
      title: "Stories of Impact and Transformation",
      subtitle: "Real stories from communities transformed by JCI initiatives",
      image: "/images/community-impact.jpg",
      category: "Impact"
    }
  ];

  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The ELV8 Revolution: How JCI Nigeria is Redefining Leadership Development in Africa",
      slug: "elv8-revolution-leadership-development-africa",
      excerpt: "An in-depth look at the transformative ELV8 theme and its impact on young African leaders.",
      content: `The landscape of leadership development in Africa is undergoing a profound transformation, and at the center of this revolution is JCI Nigeria's groundbreaking ELV8 initiative.`,
      category: "leadership",
      author: {
        name: "Dr. Adebayo Ogundimu",
        role: "National President, JCI Nigeria",
        organization: "JCI Nigeria",
        image: "/images/authors/adebayo-ogundimu.jpg",
        bio: "Dr. Adebayo Ogundimu is a leadership development expert and the current National President of JCI Nigeria."
      },
      date: "2024-03-15",
      readTime: "8 min read",
      image: "/images/blog/elv8-leadership.jpg",
      tags: ["leadership", "africa", "development", "elv8", "transformation"],
      views: 2847,
      likes: 156,
      comments: 23,
      shares: 45,
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "From Lagos to Silicon Valley: A JCI Member's Entrepreneurial Journey",
      slug: "lagos-silicon-valley-jci-entrepreneurial-journey",
      excerpt: "Chioma Okechukwu shares her inspiring story of building a fintech startup that bridges African markets with global opportunities.",
      content: `The journey from a bustling Lagos neighborhood to the heart of Silicon Valley is rarely linear, and Chioma Okechukwu's story exemplifies the power of preparation meeting opportunity.`,
      category: "member-stories",
      author: {
        name: "Chioma Okechukwu",
        role: "Founder & CEO, PayBridge",
        organization: "PayBridge Technologies",
        image: "/images/authors/chioma-okechukwu.jpg",
        bio: "Chioma is a fintech entrepreneur and JCI Nigeria member who has successfully scaled her startup internationally."
      },
      date: "2024-03-10",
      readTime: "12 min read",
      image: "/images/blog/silicon-valley-journey.jpg",
      tags: ["entrepreneurship", "fintech", "silicon-valley", "startup", "success"],
      views: 1923,
      likes: 89,
      comments: 34,
      shares: 67,
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: "Building Bridges: How Cross-Cultural Exchange Programs Shape Global Leaders",
      slug: "cross-cultural-exchange-programs-global-leaders",
      excerpt: "An exploration of JCI's international exchange initiatives and their profound impact on participants' worldview, leadership capabilities, and ability to drive meaningful change across cultures.",
      content: `In an increasingly interconnected world, the ability to navigate cultural differences and build meaningful relationships across borders has become essential for effective leadership.`,
      category: "innovation",
      author: {
        name: "Prof. Ngozi Iwuala",
        role: "Director of International Programs",
        organization: "JCI Nigeria",
        image: "/images/authors/ngozi-iwuala.jpg",
        bio: "Prof. Iwuala is an expert in international relations and cross-cultural leadership development."
      },
      date: "2024-03-05",
      readTime: "10 min read",
      image: "/images/blog/cross-cultural-exchange.jpg",
      tags: ["global-leadership", "cultural-exchange", "international", "collaboration"],
      views: 1456,
      likes: 72,
      comments: 18,
      shares: 29,
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: "Community-Driven Solutions: How Local Chapters Are Tackling Nigeria's Development Challenges",
      slug: "community-driven-solutions-local-chapters-development",
      excerpt: "A comprehensive look at grassroots initiatives led by JCI Nigeria local chapters, showcasing innovative approaches to education, healthcare, environmental sustainability, and economic empowerment.",
      content: `While headlines often focus on large-scale development initiatives and government programs, some of the most innovative and effective solutions to Nigeria's challenges are emerging from grassroots efforts led by JCI Nigeria's local chapters.`,
      category: "community-impact",
      author: {
        name: "Engr. Tunde Bakare",
        role: "Vice President, Community Development",
        organization: "JCI Nigeria",
        image: "/images/authors/tunde-bakare.jpg",
        bio: "Engr. Bakare leads community development initiatives across JCI Nigeria's local chapters."
      },
      date: "2024-02-28",
      readTime: "15 min read",
      image: "/images/blog/community-solutions.jpg",
      tags: ["community-development", "grassroots", "local-chapters", "innovation"],
      views: 2134,
      likes: 98,
      comments: 41,
      shares: 56,
      featured: true,
      trending: false
    },
    {
      id: 5,
      title: "Youth Mental Health: Breaking Stigmas Through Community Conversations",
      slug: "youth-mental-health-breaking-stigmas-community",
      excerpt: "JCI Nigeria's groundbreaking mental health initiative is creating safe spaces for young people to discuss mental wellness, access professional support, and build resilience in their communities.",
      content: `Mental health remains one of the most pressing yet underaddressed challenges facing young Nigerians today.`,
      category: "member-stories",
      author: {
        name: "Dr. Kemi Olowu",
        role: "Mental Health Advocate & JCI Member",
        organization: "Mind Matters Initiative",
        image: "/images/authors/kemi-olowu.jpg",
        bio: "Dr. Olowu is a clinical psychologist and mental health advocate working to destigmatize mental health in Nigerian communities."
      },
      date: "2024-02-20",
      readTime: "11 min read",
      image: "/images/blog/mental-health.jpg",
      tags: ["mental-health", "youth", "community", "wellness", "stigma"],
      views: 1789,
      likes: 134,
      comments: 67,
      shares: 89,
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: "Sustainable Business Models: How Nigerian Youth Are Redefining Social Entrepreneurship",
      slug: "sustainable-business-models-nigerian-youth-social-entrepreneurship",
      excerpt: "Explore how young Nigerian entrepreneurs are creating profitable businesses that address social challenges, setting new standards for sustainable and impactful enterprise development.",
      content: `The traditional view of business as purely profit-driven is being challenged by a new generation of Nigerian entrepreneurs who refuse to choose between financial success and social impact.`,
      category: "achievements",
      author: {
        name: "Folake Oyebode",
        role: "Social Enterprise Consultant",
        organization: "Impact Ventures Nigeria",
        image: "/images/authors/folake-oyebode.jpg",
        bio: "Folake is a social enterprise consultant who helps young entrepreneurs build sustainable businesses with social impact."
      },
      date: "2024-02-15",
      readTime: "13 min read",
      image: "/images/blog/social-entrepreneurship.jpg",
      tags: ["social-entrepreneurship", "sustainability", "business-models", "impact"],
      views: 1567,
      likes: 87,
      comments: 29,
      shares: 43,
      featured: false,
      trending: false
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  // Helper functions
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph: string, index: number) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        // Handle bold headers
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-4 mt-6">
            {paragraph.slice(2, -2)}
          </h3>
        );
      } else if (paragraph.startsWith('*') || paragraph.startsWith('-')) {
        // Handle bullet points
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace(/^[*-]\s*/, '')}
              </li>
            ))}
          </ul>
        );
      } else {
        // Handle regular paragraphs with bold text
        const parts = paragraph.split(/(\*\*.*?\*\*)/);
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {parts.map((part: string, i: number) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
    });
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  // Filter and sort posts
  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a: BlogPost, b: BlogPost) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'most-viewed':
        return b.views - a.views;
      case 'newest':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Render the component
  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          {featuredSlides.map((_, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
              {featuredSlides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-8 sm:mb-12 px-4">
              {featuredSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Navigation */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex gap-2 sm:gap-3">
          {featuredSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-jcin-light-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="most-viewed">Most Viewed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.category === 'leadership' ? 'bg-jcin-yellow/20 text-jcin-dark-blue' :
                      post.category === 'member-stories' ? 'bg-jcin-teal/20 text-jcin-dark-blue' :
                      'bg-jcin-light-blue/20 text-white'
                    }`}>
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    {post.featured && (
                      <span className="bg-jcin-yellow text-jcin-dark-blue px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    )}
                    {post.trending && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Trending
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-jcin-light-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No blog posts found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>

      {/* Modal for Blog Post Details */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedPost.category === 'leadership' ? 'bg-jcin-yellow/20 text-jcin-dark-blue' :
                  selectedPost.category === 'member-stories' ? 'bg-jcin-teal/20 text-jcin-dark-blue' :
                  'bg-jcin-light-blue/20 text-jcin-dark-blue'
                }`}>
                  {categories.find(cat => cat.id === selectedPost.category)?.name}
                </span>
                {selectedPost.featured && (
                  <span className="bg-jcin-yellow text-jcin-dark-blue px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </span>
                )}
                {selectedPost.trending && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Trending
                  </span>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedPost.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{selectedPost.likes} likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{selectedPost.comments} comments</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedPost.author.image}
                    alt={selectedPost.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedPost.author.name}</h3>
                    <p className="text-jcin-light-blue font-medium">{selectedPost.author.role}</p>
                    <p className="text-gray-600 text-sm">{selectedPost.author.organization}</p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Excerpt */}
              <div className="text-lg text-gray-700 mb-6 p-4 border-l-4 border-jcin-yellow bg-jcin-yellow/5 italic">
                {selectedPost.excerpt}
              </div>
              
              {/* Content */}
              <div className="prose max-w-none mb-6">
                {renderContent(selectedPost.content)}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-jcin-light-blue/10 text-jcin-dark-blue text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-jcin-light-blue text-white rounded-lg hover:bg-jcin-dark-blue transition-colors">
                  <Heart className="w-4 h-4" />
                  Like ({selectedPost.likes})
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Comment ({selectedPost.comments})
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share ({selectedPost.shares})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;