'use client';

import React, { useState } from 'react';
import { Pagination, Table, Text, View } from 'reshaped';
import { translateGender } from '@/lib/rebirth';
import { useBirth } from '@/lib/store/useBirth';

function ResultTable() {
  const birthResults = useBirth(state => state.birthResults);
  const reversedResults = [...birthResults].reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = reversedResults.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reversedResults.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View gap={4}>
      <View backgroundColor="neutral-faded" className="rounded-xl">
        <Table border columnBorder>
          <Table.Row highlighted>
            <Table.Heading padding={1.5}>
              <Text align="center">投胎次数</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">性别</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">省份/地区</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">区域</Text>
            </Table.Heading>
            <Table.Heading padding={1.5}>
              <Text align="center">第几孩</Text>
            </Table.Heading>
          </Table.Row>
          {currentPageData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell padding={1}>
                <Text align="center">
                  {reversedResults.length - (startIndex + index)}
                </Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{translateGender(item.gender)}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.province}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.category || '-'}</Text>
              </Table.Cell>
              <Table.Cell padding={1}>
                <Text align="center">{item.order || '-'}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table>
      </View>
      {totalPages > 1 && (
        <View align="center">
          <Pagination
            total={totalPages}
            previousAriaLabel="上一页"
            nextAriaLabel="下一页"
            pageAriaLabel={args => `Page ${args.page}`}
            onChange={args => handlePageChange(args.page)}
          />
        </View>
      )}
    </View>
  );
}

export default ResultTable;
