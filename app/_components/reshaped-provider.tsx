'use client';

import React, { ReactNode } from 'react';
import { Reshaped, View } from 'reshaped';
import '../_themes/orangeTheme/theme.css';

const ReshapedProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Reshaped theme="orangeTheme">
      <View backgroundColor="page">{children}</View>
    </Reshaped>
  );
};

export default ReshapedProvider;
