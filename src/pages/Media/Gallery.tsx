import { useState } from 'react';
import { 
  Search, Download, Share2, Heart, 
  Calendar, MapPin, Clock, X, Play,
  Grid, List
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import pg1 from "../../assets/Images/Gallery/pg1.webp";
import pg2 from "../../assets/Images/Gallery/pg2.webp";
import eko from "../../assets/Images/Gallery/eko.jpg";
import cp1 from "../../assets/Images/Gallery/cp1.jpg";

// TypeScript interfaces
interface MediaItem {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  category: string;
  date: string;
  location?: string;
  duration?: string;
  description: string;
  type?: 'image' | 'video';
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredSlides = [
    { id: 1, title: "Leadership Workshop 2024", image: pg1 },
    { id: 2, title: "Community Service Initiative", image: pg2 },
    { id: 3, title: "JCI Nigeria Annual Conference", image: eko},
  ];

// export const jciImages = {
//   gallery: {
//     leadership: { src: leadershipImg },
//     event: [
//       { src: event1 },
//       { src: event2 },
//       { src: event3 },
//       // ...
//     ],
//      Community: [
//       { src: cp1 },
//       { src: cp2 },
//       { src: cp3 },
//       // ...
//     ],
//   },
// };
  const categories: Category[] = [
    { id: 'all', name: 'All Media', count: 24 },
    { id: 'events', name: 'Events', count: 12 },
    { id: 'leadership', name: 'Leadership', count: 8 },
    { id: 'community', name: 'Community Project', count: 6 },
    { id: 'training', name: 'Training Programs', count: 4 }
  ];

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      url: jciImages.gallery.leadership.src,
      thumbnail: jciImages.gallery.leadership.src,
      title: "Leadership Workshop 2024",
      category: "leadership",
      date: "2024-03-15",
      location: "UNIBEN Campus",
      description: "Annual leadership development workshop for young professionals",
      type: 'image'
    },
    {
      id: 2,
      url: cp1,
      thumbnail: cp1,
      title: "Community Service Initiative",
      category: "community",
      date: "2024-02-28",
      location: "Benin City",
      description: "Community outreach program supporting local schools",
      type: 'image'
    },
    {
      id: 3,
      url: jciImages.gallery.events.src,
      thumbnail: jciImages.gallery.events.src,
      title: "JCI Nigeria  Collegiate Conference",
      category: "events",
      date: "2025-07-01",
      location: "Ibadan",
      description: " Collegiateconference bringing together young leaders from across Nigeria",
      type: 'image'
    },
    {
      id: 4,
      url: jciImages.gallery.training.src,
      thumbnail: jciImages.gallery.training.src,
      title: "Entrepreneurship Training",
      category: "training",
      date: "2024-04-10",
      location: "UNIBEN Campus",
      duration: "2:30",
      description: "Comprehensive training program for aspiring entrepreneurs",
      type: 'video'
    }
  ];

  // Filter media items based on category and search
  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle media selection
  const handleMediaClick = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  // Handle like toggle
  const handleLikeToggle = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Close modal
  const closeModal = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  return (
    <>
      <SEOHead 
        title="Photo Gallery - JCI Nigeria UNIBEN"
        description="Explore our photo gallery showcasing JCI Nigeria UNIBEN events, leadership programs, community service initiatives, and training workshops."
        keywords="JCI Nigeria, photo gallery, events, leadership, community service, UNIBEN"
        canonicalUrl="/gallery"
      />
      
      <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
        {/* Hero Section - Matching Contact page structure and size */}
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
                {/* <div className="absolute inset-0 bg-gradient-to-br from-jcin-light-blue to-jcin-dark-blue opacity-90"></div> */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10 text-white max-w-6xl mx-auto px-4 sm:px-6">
            {/* Mobile-first alignment - left aligned on mobile, center on desktop */}
            <div className="text-left sm:text-center mb-6 sm:mb-8 transform transition-all duration-700 ease-out">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-jcin-yellow bg-clip-text text-transparent leading-tight">
                Photo Gallery
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 mb-6 sm:mb-8 px-0 sm:px-4">
                Capturing Moments of Excellence
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-jcin-yellow to-jcin-yellow mb-6 sm:mb-8 sm:mx-auto"></div>
              <p className="text-sm sm:text-lg max-w-4xl sm:mx-auto leading-relaxed px-0 sm:px-4">
                Capturing moments of leadership, community service, and youth empowerment
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

        {/* Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search photos and videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jcin-light-blue focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-jcin-light-blue text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-jcin-light-blue text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-jcin-light-blue text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Media Grid */}
          <div
            className={`grid gap-4 sm:gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {filteredMedia.map((media) => (
              <div
                key={media.id}
                onClick={() => handleMediaClick(media)}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={media.thumbnail}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Video indicator */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(media.date).toLocaleDateString()}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLikeToggle(media.id);
                          }}
                          className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <Heart 
                            className={`w-5 h-5 ${
                              likedItems.has(media.id) ? 'fill-red-500 text-red-500' : 'text-white'
                            }`} 
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {viewMode === 'list' && (
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{media.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{media.description}</p>
                    {media.location && (
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{media.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* No Results */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No media found</div>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pr-4">
                  {selectedMedia.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={selectedMedia.url}
                        title={selectedMedia.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedMedia.date).toLocaleDateString()}</span>
                  </div>
                  {selectedMedia.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedMedia.location}</span>
                    </div>
                  )}
                  {selectedMedia.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedMedia.duration}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedMedia.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-jcin-light-blue text-white rounded-lg hover:bg-jcin-dark-blue transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-jcin-light-blue text-jcin-light-blue rounded-lg hover:bg-jcin-light-blue hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;