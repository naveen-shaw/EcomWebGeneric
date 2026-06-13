// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls to top of page whenever route changes
 * @param {string} behavior - 'auto' or 'smooth' (default: 'auto')
 * @param {Array} dependencies - Additional dependencies to trigger scroll
 */
const useScrollToTop = (behavior = 'auto', dependencies = []) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior,
    });
  }, [pathname, ...dependencies, behavior]);
};

export default useScrollToTop;