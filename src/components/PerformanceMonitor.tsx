import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const metrics: PerformanceMetrics = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null
    };

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries[entries.length - 1];
      metrics.fcp = fcpEntry.startTime;
      console.log('FCP:', metrics.fcp);
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries[entries.length - 1];
      metrics.lcp = lcpEntry.startTime;
      console.log('LCP:', metrics.lcp);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        if (fidEntry.processingStart) {
          metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', metrics.fid);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metrics.cls = clsValue;
      console.log('CLS:', metrics.cls);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', metrics.ttfb);
    }

    // Send metrics to analytics (you can replace this with your analytics service)
    const sendMetrics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {
            metric1: 'fcp',
            metric2: 'lcp',
            metric3: 'fid',
            metric4: 'cls',
            metric5: 'ttfb'
          }
        });
      }
    };

    // Send metrics after 5 seconds
    setTimeout(sendMetrics, 5000);

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}; 