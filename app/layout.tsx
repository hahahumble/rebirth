import { Inter } from 'next/font/google';
import './globals.css';
import './_themes/productTheme/theme.css';
import ReshapedProvider from '@/components/reshaped-provider';
import React from 'react';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-rs-theme="productTheme" data-rs-color-mode="light">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <ReshapedProvider>{children}</ReshapedProvider>
      </body>
    </html>
  );
}
