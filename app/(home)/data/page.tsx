import React from 'react';
import { Actionable, Text, View } from 'reshaped';
import BirthTable from '@/components/birth-table';
import DeathTable from '@/components/death-table';

function Page() {
  return (
    <>
      <View paddingBottom={12} paddingTop={24}>
        <Text weight="medium" variant="featured-3">
          数据来源
        </Text>
        <Text variant="body-2" color="neutral-faded">
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
            href="https://www.censtatd.gov.hk/tc/web_table.html?id=3"
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
      <View paddingTop={12}>
        <BirthTable />
      </View>
      <View paddingTop={6} paddingBottom={8}>
        <DeathTable />
      </View>
    </>
  );
}

export default Page;
