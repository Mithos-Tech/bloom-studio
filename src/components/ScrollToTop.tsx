import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets or smoothly navigates scroll position on route and hash changes.
 * Handles both smooth page-top scroll and cross-route anchor scrolling.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        attempts++;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearInterval(scrollInterval);
        } else if (attempts > 15) {
          clearInterval(scrollInterval);
        }
      }, 50);
      return () => clearInterval(scrollInterval);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
