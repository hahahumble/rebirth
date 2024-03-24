'use client';

import React from 'react';
import { Table, Text, View } from 'reshaped';
import { regions } from '@/lib/rebirth';

function BirthTable() {
  return (
    <View gap={4}>
      <View backgroundColor="neutral-faded" className="rounded-xl">
        <Table border columnBorder>
          <Table.Row highlighted>
            <Table.Heading padding={1.5}>
              <Text align="center">省份/地区</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">男孩</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">女孩</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">合计</Text>
            </Table.Heading>
          </Table.Row>
          {regions.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell padding={1}>
                <Text align="center">{item.name}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.male}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.female}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.total}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table>
      </View>
    </View>
  );
}

export default BirthTable;
