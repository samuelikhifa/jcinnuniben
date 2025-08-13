import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'JCI Nigeria UNIBEN - Junior Chamber International',
  description = 'JCI Nigeria UNIBEN chapter - Empowering young leaders through personal development, community service, and global networking opportunities.',
  keywords = 'JCI Nigeria, Junior Chamber International, UNIBEN, leadership development, community service, young professionals, networking',
  image = '/images/hero/jci-uniben-hero.jpg',
  url = 'https://jcinigeria-uniben.org',
  type = 'website',
  author = 'JCI Nigeria UNIBEN',
  noIndex = false,
  canonicalUrl
}) => {
  const fullTitle = title.includes('JCI Nigeria') ? title : `${title} | JCI Nigeria UNIBEN`;
  const fullUrl = url.startsWith('http') ? url : `https://jcinigeria-uniben.org${url}`;
  const fullImage = image.startsWith('http') ? image : `https://jcinigeria-uniben.org${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'JCI Nigeria UNIBEN', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);

    // Robots
    if (noIndex) {
      updateMetaTag('robots', 'noindex,nofollow');
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || fullUrl);

    // Structured Data
    let structuredData = document.querySelector('#structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      (structuredData as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "JCI Nigeria UNIBEN",
      "description": description,
      "url": fullUrl,
      "logo": fullImage,
      "sameAs": [
        "https://facebook.com/jcinigeria.uniben",
        "https://twitter.com/jcinigeria_uniben",
        "https://instagram.com/jcinigeria.uniben",
        "https://linkedin.com/company/jci-nigeria-uniben"
      ]
    });
  }, [fullTitle, description, keywords, author, fullImage, fullUrl, type, noIndex, canonicalUrl]);

  return null;
};

export default SEOHead;
