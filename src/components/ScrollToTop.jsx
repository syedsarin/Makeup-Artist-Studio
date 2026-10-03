import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// In-memory scroll position cache keyed by pathname and location key
const scrollPositions = new Map();

function savePosition(key, pathname, y) {
  if (typeof window === 'undefined') return;
  if (y >= 0) {
    scrollPositions.set(key, y);
    scrollPositions.set(pathname, y);
    try {
      sessionStorage.setItem(`scroll_${key}`, String(y));
      sessionStorage.setItem(`scroll_${pathname}`, String(y));
    } catch {
      // ignore storage quota errors
    }
  }
}

function getSavedPosition(key, pathname) {
  if (scrollPositions.has(key)) return scrollPositions.get(key);
  if (scrollPositions.has(pathname)) return scrollPositions.get(pathname);
  try {
    const fromKey = sessionStorage.getItem(`scroll_${key}`);
    if (fromKey !== null) return Number(fromKey);
    const fromPath = sessionStorage.getItem(`scroll_${pathname}`);
    if (fromPath !== null) return Number(fromPath);
  } catch {
    // ignore
  }
  return 0;
}

export default function ScrollToTop() {
  const location = useLocation();
  const navType = useNavigationType(); // 'POP', 'PUSH', 'REPLACE'

  // 1. Keep track of current scroll position continuously on scroll
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        savePosition(location.key, location.pathname, window.scrollY);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      // Save exact position before navigation/unmount
      savePosition(location.key, location.pathname, window.scrollY);
    };
  }, [location.key, location.pathname]);

  // 2. Handle scroll position on route changes
  useEffect(() => {
    // Disable browser default restoration so custom restoration has full control
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Clean up any stray hash in URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // If navigation specifies a target section to scroll to (e.g. Contact), bypass scrolling to top
    if (location.state?.scrollTo) {
      return;
    }

    if (navType === 'POP') {
      // User clicked BACK or FORWARD
      const targetY = getSavedPosition(location.key, location.pathname);

      // Restore position across animation stages (instant + RAF + post-Framer Motion)
      window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });

      const raf = requestAnimationFrame(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
      });

      const t1 = setTimeout(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
      }, 50);

      const t2 = setTimeout(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
      }, 220); // aligns with Framer Motion AnimatePresence mode="wait" duration

      const t3 = setTimeout(() => {
        window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
      }, 380);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      // PUSH or REPLACE: New page navigation, start fresh from the top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.key, navType, location.state]);

  return null;
}
