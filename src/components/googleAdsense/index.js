import { useEffect } from 'react';
import styles from './index.module.css';

export default function GoogleAdsense({
  adSlot,
  adFormat = "auto",
  containerClass = styles.adContainer,
  style = {}
}) {
  useEffect(() => {
    // Reinitialize ad scripts when component mounts
    try {
      if (window.adsbygoogle !== undefined) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log('Error loading AdSense ad:', e);
    }
  }, [adSlot]);

  return (
    <div className={containerClass}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style
        }}
        data-ad-client="ca-pub-1745023730981943"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}



