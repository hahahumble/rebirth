import { Inter } from 'next/font/google';
import './globals.css';
import './_themes/orangeTheme/theme.css';
import ReshapedProvider from '@/components/reshaped-provider';
import React from 'react';
import { Toaster } from 'sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-rs-theme="orangeTheme" data-rs-color-mode="light">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <ReshapedProvider>{children}</ReshapedProvider>
      </body>
      <Script
        defer
        src="https://api.pirsch.io/pa.js"
        id="pianjs"
        data-code="5ViJ2vqwjdIqQChvyXX3IEooyOb5lsMQ"
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1341437621876451"
        crossOrigin="anonymous"
      />
    </html>
  );
}
