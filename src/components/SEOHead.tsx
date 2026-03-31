import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = 'English Pro';
const DEFAULT_DESCRIPTION = 'Master English with AI-powered learning. Practice conversation, build vocabulary, and prepare for exams.';
const DEFAULT_IMAGE = 'https://english.dreamitbiz.com/og-image.png?v=2';
const SITE_URL = 'https://english.dreamitbiz.com';

function setMetaTag(property: string, content: string): void {
  if (!content) return;

  const attr = property.startsWith('og:') ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export default function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
}: SEOHeadProps): null {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const metaImage = image || DEFAULT_IMAGE;
  const metaUrl = url || (typeof window !== 'undefined' ? window.location.href : SITE_URL);

  useEffect(() => {
    // Set document title
    const previousTitle = document.title;
    document.title = fullTitle;

    // Set standard meta tags
    setMetaTag('description', metaDescription);

    // Set Open Graph meta tags
    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', metaDescription);
    setMetaTag('og:image', metaImage);
    setMetaTag('og:url', metaUrl);
    setMetaTag('og:type', type);
    setMetaTag('og:site_name', DEFAULT_TITLE);

    // Set Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', metaDescription);
    setMetaTag('twitter:image', metaImage);

    // Cleanup: restore previous title on unmount
    return () => {
      document.title = previousTitle;
    };
  }, [fullTitle, metaDescription, metaImage, metaUrl, type]);

  // This component doesn't render anything visible
  return null;
}
