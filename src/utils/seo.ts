// Global SEO Configuration for JCI Nigeria
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
}

// Base SEO configuration for JCI Nigeria
export const baseSEO: SEOConfig = {
  title: "JCI Nigeria - Junior Chamber International Nigeria",
  description: "Join JCI Nigeria, the leading global network of young active citizens age 18-40 who share the belief that in order to create positive change, we must take collective action to improve ourselves and the world around us.",
  keywords: [
    "JCI Nigeria",
    "Junior Chamber International",
    "Young Leaders",
    "Leadership Development",
    "Youth Empowerment",
    "Nigeria",
    "Community Development",
    "Entrepreneurship",
    "Professional Development",
    "Networking",
    "TOYP",
    "Ten Outstanding Young Persons",
    "Social Impact",
    "Civic Engagement"
  ],
  ogType: "website",
  ogImage: "/images/jci-nigeria-og-image.jpg",
  twitterCard: "summary_large_image",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JCI Nigeria",
    "alternateName": "Junior Chamber International Nigeria",
    "url": "https://jcinigeria.org",
    "logo": "https://jcinigeria.org/images/jci-nigeria-logo.png",
    "description": "Leading global network of young active citizens in Nigeria focused on leadership development and community impact.",
    "foundingDate": "1960",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria",
      "addressRegion": "Lagos",
      "addressLocality": "Lagos"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-xxx-xxx-xxxx",
      "contactType": "customer service",
      "email": "info@jcinigeria.org"
    },
    "sameAs": [
      "https://www.facebook.com/JCINigeria",
      "https://www.twitter.com/JCINigeria",
      "https://www.instagram.com/JCINigeria",
      "https://www.linkedin.com/company/jci-nigeria",
      "https://www.youtube.com/JCINigeria"
    ]
  }
};

// Page-specific SEO configurations
export const pageSEO: Record<string, Partial<SEOConfig>> = {
  home: {
    title: "JCI Nigeria - Empowering Young Leaders Across Nigeria",
    description: "Join Nigeria's premier youth leadership organization. Connect with 18-40 year old active citizens creating positive change through leadership development, entrepreneurship, and community impact.",
    keywords: ["JCI Nigeria homepage", "youth leadership Nigeria", "young professionals network"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JCI Nigeria",
      "url": "https://jcinigeria.org",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://jcinigeria.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  about: {
    title: "About JCI Nigeria - Our Mission, Vision & Impact",
    description: "Learn about JCI Nigeria's 60+ year legacy of developing young leaders. Discover our mission to create positive change through active citizenship and leadership development programs.",
    keywords: ["about JCI Nigeria", "JCI history", "leadership organization Nigeria"],
    ogType: "article"
  },
  projects: {
    title: "JCI Nigeria Projects - Leadership & Community Development Initiatives",
    description: "Explore JCI Nigeria's impactful projects including TOYP Excellence Framework, Youth Entrepreneurship Programs, and community development initiatives across Nigeria and Africa.",
    keywords: ["JCI Nigeria projects", "TOYP", "youth entrepreneurship", "community development"],
    ogType: "article",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "JCI Nigeria Projects",
      "description": "Leadership and community development projects by JCI Nigeria",
      "numberOfItems": 5
    }
  },
  contact: {
    title: "Contact JCI Nigeria - Get Involved & Connect",
    description: "Ready to join Nigeria's leading youth organization? Contact JCI Nigeria to learn about membership, partnerships, and opportunities to make a difference in your community.",
    keywords: ["contact JCI Nigeria", "join JCI", "membership inquiry", "partnership opportunities"],
    ogType: "article"
  },
  blog: {
    title: "JCI Nigeria Blog - Leadership Insights & Community Stories",
    description: "Stay updated with the latest leadership insights, success stories, and community impact news from JCI Nigeria. Read about youth development and active citizenship.",
    keywords: ["JCI Nigeria blog", "leadership articles", "youth development", "success stories"],
    ogType: "blog"
  },
  press: {
    title: "JCI Nigeria Press & Media - News, Awards & Recognition",
    description: "Latest press releases, media coverage, and recognition of JCI Nigeria's impact. Discover our awards, achievements, and media presence in leadership development.",
    keywords: ["JCI Nigeria press", "media coverage", "awards", "recognition"],
    ogType: "article"
  }
};

// SEO utility functions
export const generateMetaTags = (pageKey: string, customSEO?: Partial<SEOConfig>): SEOConfig => {
  const pageSEOConfig = pageSEO[pageKey] || {};
  return {
    ...baseSEO,
    ...pageSEOConfig,
    ...customSEO
  };
};

export const generateStructuredData = (data: any) => {
  return JSON.stringify(data);
};

// Performance optimization utilities
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/images/jci-nigeria-logo.png',
    '/images/hero-background.jpg',
    '/images/jci-nigeria-og-image.jpg'
  ];

  const criticalFonts = [
    '/fonts/inter-var.woff2',
    '/fonts/poppins-bold.woff2'
  ];

  // Preload critical images
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical fonts
  criticalFonts.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy loading utility
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Critical CSS inlining utility
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    .hero-section { display: block; }
    .navigation { display: flex; }
    .container { max-width: 1200px; margin: 0 auto; }
    .btn-primary { 
      background: linear-gradient(135deg, #003da5 0%, #003087 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = criticalCSS;
  document.head.appendChild(style);
};

// Google Analytics setup
export const setupGoogleAnalytics = (trackingId: string) => {
  // Google Analytics 4 setup
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}', {
      page_title: document.title,
      page_location: window.location.href
    });
  `;
  document.head.appendChild(script2);
};

// Performance monitoring
export const setupPerformanceMonitoring = () => {
  // Core Web Vitals monitoring - optional dependency
  try {
    // Only import if web-vitals is available
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Basic performance monitoring without external dependency
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`Performance: ${entry.name} - ${entry.duration}ms`);
        });
      });
      
      if ('observe' in observer) {
        observer.observe({ entryTypes: ['measure', 'navigation'] });
      }
    }
  } catch (error) {
    console.log('Performance monitoring not available');
  }
};

export default {
  baseSEO,
  pageSEO,
  generateMetaTags,
  generateStructuredData,
  preloadCriticalResources,
  setupLazyLoading,
  inlineCriticalCSS,
  setupGoogleAnalytics,
  setupPerformanceMonitoring
};
