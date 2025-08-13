// Image utility for JCI Nigeria project
export interface ImageConfig {
  src: string;
  fallback: string;
  alt: string;
  category: 'hero' | 'projects' | 'about' | 'contact' | 'blog' | 'press' | 'gallery' | 'administration' | 'community';
}

// Import actual existing images from assets
import eblImage from '../assets/Images/Press/ebl.jpg';
import lwImage from '../assets/Images/Gallery/lw.jpg';
import divineImage from '../assets/Images/board1/Copy of Divine Oghenetega.webp';
import peculiarImage from '../assets/Images/board1/Copy of PECULIAR CHIDINMA IKEM .webp';
import taiyeImage from '../assets/Images/board1/Copy of Abiodun Taiye Peace.webp';
import divineFavourImage from '../assets/Images/board1/Copy of DIVINEFAVOUR.webp';
import cp1Image from "../assets/Images/Gallery/cp1.jpg";

// Default fallback images for each category using actual existing assets
const fallbackImages = {
  hero: lwImage,
  projects: eblImage,
  about: lwImage,
  contact: lwImage,
  blog: lwImage,
  press: eblImage,
  gallery: lwImage,
  gallery: cp1Image,
  administration: divineImage
};

// Generate proper image path with fallback
export const getImagePath = (filename: string, category: ImageConfig['category']): string => {
  // Always return a valid fallback if filename is empty or invalid
  if (!filename || filename.trim() === '') {
    return fallbackImages[category];
  }
  
  // If it's already a processed asset URL, return as is
  if (filename.startsWith('/') || filename.startsWith('http') || filename.includes('assets')) {
    return filename;
  }
  
  // For now, return fallback for any unprocessed filename
  // In production, you'd want to set up proper dynamic imports
  return fallbackImages[category];
};

// Create image config with fallback
export const createImageConfig = (
  filename: string, 
  category: ImageConfig['category'], 
  alt: string
): ImageConfig => ({
  src: getImagePath(filename, category) || fallbackImages[category],
  fallback: fallbackImages[category],
  alt: alt || 'JCI Nigeria Image',
  category
});

// Predefined image configurations for JCI Nigeria using actual imported assets
export const jciImages = {
  // Hero images
  hero: {
    home: { src: lwImage, fallback: lwImage, alt: 'JCI Nigeria - Empowering Young Leaders', category: 'hero' as const },
    about: { src: lwImage, fallback: lwImage, alt: 'About JCI Nigeria', category: 'hero' as const },
    vision: { src: lwImage, fallback: lwImage, alt: 'Our Vision & Mission', category: 'hero' as const },
    contact: { src: lwImage, fallback: lwImage, alt: 'Contact JCI Nigeria', category: 'hero' as const },
    press: { src: eblImage, fallback: eblImage, alt: 'Press Releases', category: 'hero' as const },
    gallery: { src: lwImage, fallback: lwImage, alt: 'Photo Gallery', category: 'hero' as const },
    gallery: { src: cp1Image, fallback: cp1Image, alt: 'Photo Gallery', category: 'community' as const },
    administration: { src: divineImage, fallback: divineImage, alt: 'Our Leadership', category: 'hero' as const }
  },
  
  // Project images
  projects: {
    ebl: { src: eblImage, fallback: eblImage, alt: 'Entrepreneurial Business Leadership', category: 'projects' as const },
    toyp: { src: eblImage, fallback: eblImage, alt: 'Ten Outstanding Young Persons', category: 'projects' as const },
    community: { src: lwImage, fallback: lwImage, alt: 'Community Health Initiative', category: 'projects' as const },
    business: { src: eblImage, fallback: eblImage, alt: 'Business Development Program', category: 'projects' as const }
  },
  
  // Gallery images
  gallery: {
    leadership: { src: lwImage, fallback: lwImage, alt: 'Leadership Workshop', category: 'gallery' as const },
    community: { src: lwImage, fallback: lwImage, alt: 'Community Service', category: 'gallery' as const },
    events: { src: lwImage, fallback: lwImage, alt: 'JCI Events', category: 'gallery' as const },
    training: { src: lwImage, fallback: lwImage, alt: 'Training Programs', category: 'gallery' as const }
  },
  
  // Press images
  press: {
    ebl: { src: eblImage, fallback: eblImage, alt: 'EBL Event Coverage', category: 'press' as const },
    toyp: { src: eblImage, fallback: eblImage, alt: 'TOYP Awards', category: 'press' as const },
    community: { src: lwImage, fallback: lwImage, alt: 'Community Impact', category: 'press' as const },
    business: { src: eblImage, fallback: eblImage, alt: 'Business Leadership', category: 'press' as const }
  },
  
  // Administration images
  administration: {
    president: { src: divineImage, fallback: divineImage, alt: 'President', category: 'administration' as const },
    vp: { src: peculiarImage, fallback: peculiarImage, alt: 'Vice President', category: 'administration' as const },
    secretary: { src: taiyeImage, fallback: taiyeImage, alt: 'Secretary', category: 'administration' as const },
    treasurer: { src: divineFavourImage, fallback: divineFavourImage, alt: 'Treasurer', category: 'administration' as const }
  }
};

// Safe image source getter - prevents empty src attributes
export const getSafeImageSrc = (src: string | undefined | null, fallback?: string): string => {
  if (!src || src.trim() === '') {
    return fallback || lwImage;
  }
  return src;
};

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!src || src.trim() === '') {
      resolve();
      return;
    }
    
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
      resolve(); // Don't reject, just warn
    };
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (images: string[]): Promise<void> => {
  try {
    const validImages = images.filter(img => img && img.trim() !== '');
    await Promise.all(validImages.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Generate responsive image srcset
export const generateSrcSet = (basePath: string, sizes: number[] = [400, 800, 1200, 1600]): string => {
  if (!basePath || basePath.trim() === '') {
    return '';
  }
  
  return sizes
    .map(size => `${basePath}?w=${size} ${size}w`)
    .join(', ');
};

export default {
  getImagePath,
  createImageConfig,
  jciImages,
  getSafeImageSrc,
  preloadImage,
  preloadImages,
  generateSrcSet,
  fallbackImages
};
