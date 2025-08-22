// Performance utilities for optimizing website speed

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Prefetch resources for next navigation
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Debounce function for performance-sensitive operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll/resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Web Vitals measurement
export const measureWebVitals = () => {
  // Measure First Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime);
      }
    }
  });
  observer.observe({ entryTypes: ['paint'] });

  // Measure Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
};

// Image optimization helper
export const getOptimizedImageUrl = (
  src: string,
  _width?: number,
  _quality?: number
): string => {
  // For production, you might want to use a service like Cloudinary or ImageKit
  // For now, return the original src
  return src;
};

// Resource hints for better loading
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const dnsPrefetch = (domain: string) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  };

  // Preconnect to critical domains
  const preconnect = (domain: string) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  };

  // Add hints for common external resources
  dnsPrefetch('//fonts.googleapis.com');
  dnsPrefetch('//www.youtube.com');
  dnsPrefetch('//img.youtube.com');
  
  preconnect('https://fonts.gstatic.com');
  preconnect('https://www.youtube.com');
};

// Critical resource loading strategy
export const loadCriticalResources = () => {
  // Add resource hints
  addResourceHints();
  
  // Preload critical fonts
  preloadResource('/fonts/inter.woff2', 'font', 'font/woff2');
  
  // Measure web vitals in development
  if (import.meta.env.DEV) {
    measureWebVitals();
  }
};
