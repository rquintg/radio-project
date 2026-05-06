import { useEffect, useRef } from 'react';
import styles from './index.module.css';

export default function GoogleAdsense({
  adSlot,
  adFormat = "auto",
  containerClass = styles.adContainer,
  style = {},
  isSticky = false
}) {
  const adRef = useRef(null);
  const alreadyPushedRef = useRef(false);

  useEffect(() => {
    if (!adSlot || !adRef.current) {
      console.warn('GoogleAdsense: Missing adSlot or container ref');
      return;
    }

    // Reset the flag when adSlot changes (new ad to load)
    alreadyPushedRef.current = false;

    // Create a small delay to ensure DOM elements are properly rendered
    const timer = setTimeout(() => {
      try {
        // Check if window.adsbygoogle exists
        if (typeof window !== 'undefined' && window.adsbygoogle !== undefined) {
          // Only push if we haven't already pushed for this adSlot
          if (!alreadyPushedRef.current) {
            window.adsbygoogle.push({});
            alreadyPushedRef.current = true;
          }
        }
      } catch (error) {
        console.error('Error loading AdSense ad:', error);
      }
    }, 100);

    // Cleanup
    return () => clearTimeout(timer);
  }, [adSlot]);

  return (
    <div 
      ref={adRef}
      className={`${containerClass} ${isSticky ? styles.stickyAd : ''}`}
      style={{
        minHeight: '250px',
        ...style
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'center'
        }}
        data-ad-client="ca-pub-1745023730981943"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        data-ad-layout-key="-gw-1+2a-cb+5c"
      />
    </div>
  );
}



