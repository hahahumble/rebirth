'use client';

import React, { useState } from 'react';
import { Icon, Pagination, Table, Text, Tooltip, View } from 'reshaped';
import { useBirth } from '@/lib/store/useBirth';
import { CircleHelp } from 'lucide-react';
import { BirthResult } from '@/lib/rebirth';
import { FemaleIcon, MaleIcon } from '@/components/gender-icon';

interface UniqueResult {
  province: string;
  firstBoyAppearance: number | string;
  firstGirlAppearance: number | string;
}

function FirstTimeTable() {
  const birthResults = useBirth(state => state.birthResults) as BirthResult[];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 20;

  const uniqueProvinces = Array.from(
    new Set(birthResults.map(item => item.province))
  );

  const uniqueResults: UniqueResult[] = uniqueProvinces.map(province => {
    const firstBoyIndex = birthResults.findIndex(
      item => item.province === province && item.gender === 'male'
    );
    const firstGirlIndex = birthResults.findIndex(
      item => item.province === province && item.gender === 'female'
    );
    return {
      province,
      firstBoyAppearance: firstBoyIndex >= 0 ? firstBoyIndex + 1 : 'N/A',
      firstGirlAppearance: firstGirlIndex >= 0 ? firstGirlIndex + 1 : 'N/A'
    };
  });

  uniqueResults.sort((a, b) => {
    const aFirstBoyAppearance =
      a.firstBoyAppearance !== 'N/A' ? Number(a.firstBoyAppearance) : Infinity;
    const aFirstGirlAppearance =
      a.firstGirlAppearance !== 'N/A'
        ? Number(a.firstGirlAppearance)
        : Infinity;
    const bFirstBoyAppearance =
      b.firstBoyAppearance !== 'N/A' ? Number(b.firstBoyAppearance) : Infinity;
    const bFirstGirlAppearance =
      b.firstGirlAppearance !== 'N/A'
        ? Number(b.firstGirlAppearance)
        : Infinity;

    const aMinAppearance = Math.min(aFirstBoyAppearance, aFirstGirlAppearance);
    const bMinAppearance = Math.min(bFirstBoyAppearance, bFirstGirlAppearance);

    return bMinAppearance - aMinAppearance;
  });

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
                <Tooltip text="男孩和女孩第一次出现的序号" position="top">
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
                <View direction="row" justify="center" gap={3}>
                  {item.firstBoyAppearance !== 'N/A' && (
                    <View direction="row" align="center" gap={1}>
                      <MaleIcon size={14} />
                      <Text align="center">{item.firstBoyAppearance}</Text>
                    </View>
                  )}
                  {item.firstGirlAppearance !== 'N/A' && (
                    <View direction="row" align="center" gap={1}>
                      <FemaleIcon size={14} />
                      <Text align="center">{item.firstGirlAppearance}</Text>
                    </View>
                  )}
                  {item.firstBoyAppearance === 'N/A' &&
                    item.firstGirlAppearance === 'N/A' && (
                      <Text align="center">-</Text>
                    )}
                </View>
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
