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
  title: "JCIN UNIBEN - Junior Chamber International UNIBEN",
description: "Join JCIN UNIBEN, the first collegiate chapter in the world, a network of young active students of the University of Benin, who share the belief that in order to create positive change, we must take collective action to improve ourselves and the communities around us.",
keywords: [
  "JCIN UNIBEN",
  "Junior Chamber International UNIBEN",
  "Young Leaders",
  "Leadership Development",
  "Youth Empowerment",
  "University of Benin",
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
ogImage: "/images/jcin-uniben-og-image.jpg",
twitterCard: "summary_large_image",
structuredData: {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JCIN UNIBEN",
  "alternateName": "Junior Chamber International UNIBEN",
  "url": "https://jcinuniben.com",
  "logo": "https://jcinuniben.com/images/jcin-uniben-logo.png",
  "description": "Leading global network of young active citizens at the University of Benin focused on leadership development and community impact.",
  "foundingDate": "1980",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nigeria",
    "addressRegion": "Ugbowo",
    "addressLocality": "Benin City"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-xxx-xxx-xxxx",
    "contactType": "customer service",
    "email": "info@jcinuniben.com"
  },
  "sameAs": [
    "https://www.facebook.com/jcinuniben",
    "https://www.twitter.com/jcinuniben",
    "https://www.instagram.com/jcinuniben",
    "https://www.linkedin.com/company/jcin-uniben",
    "https://www.youtube.com/@jcinuniben"
  ]
}
};

// Page-specific SEO configurations
export const pageSEO: Record<string, Partial<SEOConfig>> = {
  home: {
    title: "JCIN UNIBEN - Empowering Young Leaders Across UNIBEN",
    description: "Join JCIN UNIBEN's organization. Connect with active students creating positive change through leadership development, entrepreneurship, and community impact.",
    keywords: ["JCIN UNIBEN homepage", "young professionals network"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JCIN UNIBEN",
      "url": "https://jcinuniben.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://jcinuniben.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  about: {
    title: "About JCIN UNIBEN - Our Mission, Vision & Impact",
    description: "Learn about JCIN UNIBEN's legacy of developing young leaders. Discover our mission to create positive change through active citizenship and leadership development programs.",
    keywords: ["about JCIN UNIBEN", "JCIN UNIBEN history", "leadership organization UNIBEN"],
    ogType: "article"
  },
  projects: {
    title: "JCIN UNIBEN Projects - Leadership & Community Development Initiatives",
    description: "Explore JCIN UNIBEN's impactful projects including TOYP Award, EBL Programs, and community development initiatives across UNIBEN and beyond.",
    keywords: ["JCIN UNIBEN projects", "TOYP", "student entrepreneurship", "community development"],
    ogType: "article",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "JCIN UNIBEN Projects",
      "description": "Leadership and community development projects by JCIN UNIBEN",
      "numberOfItems": 5
    }
  },
  contact: {
    title: "Contact JCIN UNIBEN - Get Involved & Connect",
    description: "Ready to join UNIBEN's leading youth organization? Contact JCIN UNIBEN to learn about membership, partnerships, and opportunities to make a difference in your community.",
    keywords: ["contact JCIN UNIBEN", "join JCIN UNIBEN", "membership inquiry", "partnership opportunities"],
    ogType: "article"
  },
  blog: {
    title: "JCIN UNIBEN Blog - Leadership Insights & Community Stories",
    description: "Stay updated with the latest leadership insights, success stories, and community impact news from JCIN UNIBEN. Read about youth development and active citizenship.",
    keywords: ["JCIN UNIBEN blog", "leadership articles", "youth development", "success stories"],
    ogType: "blog"
  },
  press: {
    title: "JCIN UNIBEN Press & Media - News, Awards & Recognition",
    description: "Latest press releases, media coverage, and recognition of JCIN UNIBEN's impact. Discover our awards, achievements, and media presence in leadership development.",
    keywords: ["JCIN UNIBEN press", "media coverage", "awards", "recognition"],
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
