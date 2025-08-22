import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
}

const LazyYouTube: React.FC<LazyYouTubeProps> = ({
  videoId,
  title,
  className = '',
  thumbnailQuality = 'maxresdefault'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {!isLoaded ? (
        <div className="relative cursor-pointer group" onClick={handlePlay}>
          {/* Thumbnail */}
          {isInView && (
            <img
              src={thumbnailUrl}
              alt={`${title} - YouTube Video Thumbnail`}
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              loading="lazy"
              decoding="async"
            />
          )}
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl sm:rounded-3xl group-hover:bg-black/30 transition-colors duration-300">
            <div className="bg-red-600 rounded-full p-4 sm:p-6 shadow-2xl group-hover:bg-red-700 transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-white" />
            </div>
          </div>
          
          {/* Loading placeholder if not in view */}
          {!isInView && (
            <div className="w-full h-full bg-gray-200 rounded-2xl sm:rounded-3xl animate-pulse flex items-center justify-center">
              <div className="bg-gray-300 rounded-full p-4 sm:p-6">
                <Play className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl"
        />
      )}
    </div>
  );
};

export default LazyYouTube;
