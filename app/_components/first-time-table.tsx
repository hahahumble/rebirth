'use client';

import React, { useState } from 'react';
import { Icon, Pagination, Table, Text, Tooltip, View } from 'reshaped';
import { useBirth } from '@/lib/store/useBirth';
import { CircleHelp } from 'lucide-react';
import { BirthResult } from '@/lib/rebirth';

interface UniqueResult {
  province: string;
  firstAppearance: number;
}

function FirstTimeTable() {
  const birthResults = useBirth(state => state.birthResults) as BirthResult[];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 20;

  // Remove duplicates
  const uniqueProvinces = Array.from(
    new Set(birthResults.map(item => item.province))
  );

  const uniqueResults: UniqueResult[] = uniqueProvinces.map(province => {
    const firstAppearanceIndex = birthResults.findIndex(
      item => item.province === province
    );
    return {
      province,
      firstAppearance: firstAppearanceIndex + 1
    };
  });

  uniqueResults.sort((a, b) => b.firstAppearance - a.firstAppearance);

  const totalPages = Math.ceil(uniqueResults.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageResults = uniqueResults.slice(startIndex, endIndex);

  return (
    <View gap={4}>
      <View backgroundColor="neutral-faded" className="rounded-xl">
        <Table border columnBorder>
          <Table.Row highlighted>
            <Table.Heading padding={1.5}>
              <Text align="center">省份/地区</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <View align="center">
                <Tooltip text="需要多少次才能投胎到这个地方" position="top">
                  {attributes => (
                    <View direction="row" align="center" gap={1}>
                      <Text align="center">第一次出现</Text>
                      <Icon svg={<CircleHelp />} attributes={attributes} />
                    </View>
                  )}
                </Tooltip>
              </View>
            </Table.Heading>
          </Table.Row>
          {currentPageResults.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell padding={1}>
                <Text align="center">{item.province}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.firstAppearance}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table>
      </View>
      <View align="center">
        <Pagination
          total={totalPages}
          previousAriaLabel="上一页"
          nextAriaLabel="下一页"
          pageAriaLabel={args => `Page ${args.page}`}
          onChange={args => handlePageChange(args.page)}
        />
      </View>
    </View>
  );
}

export default FirstTimeTable;
