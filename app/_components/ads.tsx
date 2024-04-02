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
        height: '100px',
        width: '300px',
        paddingInline: '1rem',
        paddingBottom: '2rem'
      }}
      data-ad-client="ca-pub-1341437621876451"
      data-ad-slot="2362148225"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
export default Ads;
