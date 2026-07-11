import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const Ads = () => {
  // Render the <ins> only after mount. Google's async AdSense script auto-fills
  // any `.adsbygoogle` element (injecting an iframe + data-adsbygoogle-status)
  // as soon as it loads, which can happen before React hydrates and causes a
  // hydration mismatch. Keeping it out of SSR avoids that entirely.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Defer the ad request to the next frame so the freshly-mounted <ins> has
    // been laid out and has a real width. Pushing immediately can hit AdSense's
    // "No slot size for availableWidth=0" error for the fluid in-article slot.
    const id = requestAnimationFrame(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log(err);
      }
    });
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
        textAlign: 'center'
      }}
      data-ad-client="ca-pub-1341437621876451"
      data-ad-slot="9971145124"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-full-width-responsive="true"
    />
  );
};
export default Ads;
