import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const Ads = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

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
