import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [isTablet, setIsTablet] = useState<boolean | undefined>(undefined);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      checkDevice();
    };

    mql.addEventListener("change", onChange);
    checkDevice();

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return {
    isMobile: !!isMobile,
    isTablet: !!isTablet,
    isTouch,
    isDesktop: !isMobile && !isTablet
  };
}

// Hook for detecting device orientation
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const checkOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    window.addEventListener('resize', checkOrientation);
    checkOrientation();

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return orientation;
}

// Hook for detecting viewport size
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', updateViewport);
    updateViewport();

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}
