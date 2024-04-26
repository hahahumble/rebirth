import { Container, View } from 'reshaped';
import React from 'react';
import type { Metadata } from 'next';
import Title from '@/components/title';
import Navbar from '@/components/navbar';
import ResetModal from '@/components/reset-modal';
import ShareModal from '@/components/share-modal';

export const metadata: Metadata = {
  title: '投胎模拟器「中国版」',
  description: '如果来世还在种花家，你会出生在哪里？ - 投胎模拟器「中国版」'
};

export default function HomepageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResetModal />
      <ShareModal />
      <Container width="640px" padding={1}>
        <View
          padding={4}
          direction="row"
          justify="space-between"
          align="center"
        >
          <Title />
          <Navbar />
        </View>
        {children}
      </Container>
    </>
  );
}
