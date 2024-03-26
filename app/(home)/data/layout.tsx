import { Container } from 'reshaped';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '数据来源 - 投胎模拟器「中国版」 toutai.cc',
  description: '如果来世还在种花家，你会出生在哪里？ - 投胎模拟器「中国版」'
};

export default function DataLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container width="640px">{children}</Container>
    </>
  );
}
