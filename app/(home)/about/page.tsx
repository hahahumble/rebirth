import React from 'react';
import { Actionable, Divider, Text, View } from 'reshaped';
import MathComponent from '@/components/math-component';
import Reset from '@/components/reset';

function Page() {
  return (
    <>
      <View paddingBottom={12} paddingTop={24} width={{ s: '100%', m: 130 }}>
        <Text weight="medium" variant="featured-3">
          关于
        </Text>
        <Text variant="body-2" color="neutral-faded">
          关于本网站
        </Text>
      </View>
      <View>
        <View paddingBlock={4}>
          <View direction="column">
            <Text variant="body-2">如果来世还在种花家，你会出生在哪里？</Text>
            <View gap={2} direction="column" paddingBottom={2}>
              <Text variant="body-2">
                本网站根据中国公布的最新出生人口数据，计算出生在某地区的可能性。
                使用了以下公式计算出生在某地区的可能性：
              </Text>
              <MathComponent formula="\displaystyle{\text{出生在该地区的可能性} = \frac{该地区出生人口}{全国总出生人口}}" />
            </View>
            <Text variant="body-2">
              参考项目：
              <Actionable
                className="underline hover:underline hover:text-primary hover:cursor-pointer"
                href="https://uahh.site/reborn"
              >
                https://uahh.site/reborn
              </Actionable>
            </Text>
          </View>
        </View>
        <View paddingBlock={8}>
          <Divider />
        </View>
        <Reset />
      </View>
    </>
  );
}

export default Page;
