import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "VoidBounce – Email Verification Tool",
  description = "VoidBounce helps you validate and verify email addresses instantly, reduce bounces, and improve email deliverability for marketers, businesses, and developers.",
  keywords = "email verification, email validator, email checker, verify email address, email list cleaning, reduce bounces, email deliverability",
  image = "https://theunbounce.com/opengraph-image.png",
  url = "https://theunbounce.com",
  type = "website",
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute(attr, value);
      }
    };

    // Basic meta
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="keywords"]', 'content', keywords);

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:type"]', 'content', type);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);

    // Structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
};
