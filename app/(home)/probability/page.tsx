import React from 'react';
import { Text, View } from 'reshaped';
import Calculator from '@/components/calculator';

function Page() {
  return (
    <>
      <View paddingBottom={12} paddingTop={24} width={{ s: '100%', m: 130 }}>
        <Text weight="medium" variant="featured-3">
          概率计算器
        </Text>
        <Text variant="body-2" color="neutral-faded">
          根据真实的出生人口数据，计算投胎的可能性
        </Text>
      </View>
      <Calculator />
    </>
  );
}

export default Page;
