import React from 'react';
import { Actionable, Text, View } from 'reshaped';
import BirthTable from '@/components/birth-table';
import DeathTable from '@/components/death-table';

function Page() {
  return (
    <>
      <View as="main">
        <View paddingBottom={12} paddingTop={24} as="header">
          <Text weight="medium" variant="featured-3" as="h1">
            数据来源
          </Text>
          <Text variant="body-2" color="neutral-faded" as="h2">
            中国大陆：
            <Actionable
              className="underline hover:underline hover:text-primary hover:cursor-pointer"
              href="https://www.stats.gov.cn/sj/pcsj/rkpc/7rp/zk/indexch.htm"
            >
              第七次人口普查
            </Actionable>
            （2019.11.1 - 2020.10.31）；香港特别行政区：
            <Actionable
              className="underline hover:underline hover:text-primary hover:cursor-pointer"
              href="https://www.censtatd.gov.hk/tc/web_table.html?id=3"
            >
              香港政府统计处
            </Actionable>
            （2023）；澳门特别行政区：
            <Actionable
              className="underline hover:underline hover:text-primary hover:cursor-pointer"
              href="https://www.dsec.gov.mo/zh-MO/Statistic?id=101"
            >
              统计暨普查局
            </Actionable>
            （2023）；台湾地区：
            <Actionable
              className="underline hover:underline hover:text-primary hover:cursor-pointer"
              href="https://www.ris.gov.tw/app/portal/346"
            >
              人口统计资料
            </Actionable>
            （2023）
          </Text>
        </View>
        <View paddingTop={12} as="article">
          <BirthTable />
        </View>
        <View paddingTop={6} paddingBottom={8} as="article">
          <DeathTable />
        </View>
      </View>
    </>
  );
}

export default Page;
