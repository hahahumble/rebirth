import React from 'react';
import Script from 'next/script';

function Ads() {
  return (
    <>
      <Script
        id="adsense"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1341437621876451"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client="ca-pub-1341437621876451"
        data-ad-slot="2362148225"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="adsense2">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </>
  );
}

export default Ads;
