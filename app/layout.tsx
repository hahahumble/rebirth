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
      <Script
        defer
        src="https://api.pirsch.io/pirsch-extended.js"
        id="pirschextendedjs"
        data-code="oybHcrMr5hY3eJeFle5rcwXY2Vu131OU"
      ></Script>
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <ReshapedProvider>{children}</ReshapedProvider>
      </body>
    </html>
  );
}
