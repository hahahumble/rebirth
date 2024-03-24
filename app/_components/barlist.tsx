import { View, Text, useResponsiveClientValue } from 'reshaped';
import React, { useMemo } from 'react';
import { useBirth } from '@/lib/store/useBirth';
import { BirthResult } from '@/lib/rebirth';

interface ProvinceData {
  province: string;
  probability: number;
  count: number;
}

const BarList: React.FC = () => {
  const percentage = useResponsiveClientValue({
    s: 56,
    l: 70
  });

  const birthResults = useBirth(
    (state: { birthResults: BirthResult[] }) => state.birthResults
  );

  // Calculate the total occurrences for each province
  const provinceOccurrences = useMemo(() => {
    const occurrences: Record<string, number> = birthResults.reduce(
      (acc: Record<string, number>, result) => {
        acc[result.province] = (acc[result.province] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return occurrences;
  }, [birthResults]);

  // Calculate the total number of BirthResult entries
  const totalBirthResults = birthResults.length;

  // Calculate the probability for each province and sort the results
  const sortedResults: ProvinceData[] = useMemo(() => {
    const results = Object.entries(provinceOccurrences)
      .map(([province, count]) => ({
        province,
        probability: count / totalBirthResults,
        count // Include the count in the results
      }))
      .sort((a, b) => b.probability - a.probability);

    return results;
  }, [provinceOccurrences, totalBirthResults]);

  // Find the maximum probability to use as a baseline
  const maxProbability = useMemo(() => {
    return sortedResults.length > 0 ? sortedResults[0].probability : 0;
  }, [sortedResults]);

  return (
    <View direction="column" gap={1}>
      {sortedResults.map((item: ProvinceData) => (
        <View key={item.province} direction="row" align="center" gap={2}>
          <View width={12}>
            <Text>{item.province}</Text>
          </View>
          <div
            className="bg-[#ebe8e7] h-8 rounded-xl"
            style={{
              width:
                percentage !== undefined
                  ? `${(item.probability / maxProbability) * percentage}%`
                  : '0%'
            }}
          >
            <Text
              variant="body-3"
              color="neutral-faded"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {(item.probability * 100).toFixed(2)}%
            </Text>
          </div>
          <Text variant="body-3" color="neutral-faded">
            {item.count}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default BarList;
