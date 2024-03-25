'use client';

import React from 'react';
import { Actionable, Table, Text, View } from 'reshaped';

function DeathTable() {
  return (
    <View gap={4}>
      <View backgroundColor="neutral-faded" className="rounded-xl">
        <Table border columnBorder>
          <Table.Row highlighted>
            <Table.Heading padding={1.5}>
              <Text align="center">新生儿死亡率</Text>
            </Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell padding={1}>
              <View justify="center">
                <Actionable href="https://www.stats.gov.cn/sj/zxfb/202304/t20230417_1938688.html">
                  <Text
                    align="center"
                    className="underline hover:underline hover:text-primary hover:cursor-pointer"
                  >
                    3.1‰
                  </Text>
                </Actionable>
              </View>
            </Table.Cell>
          </Table.Row>
        </Table>
      </View>
    </View>
  );
}

export default DeathTable;
