import { View, Text } from 'reshaped';
import React, { useMemo } from 'react';
import { useBirth } from '@/lib/store/useBirth';
import { BirthResult } from '@/lib/rebirth';

interface ProvinceData {
  province: string;
  probability: number;
  count: number;
}

const BarList: React.FC = () => {
  const birthResults = useBirth(
    (state: { birthResults: BirthResult[] }) => state.birthResults
  );

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

  const totalBirthResults = birthResults.length;

  const sortedResults: ProvinceData[] = useMemo(() => {
    const results = Object.entries(provinceOccurrences)
      .map(([province, count]) => ({
        province,
        probability: count / totalBirthResults,
        count
      }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 5);

    return results;
  }, [provinceOccurrences, totalBirthResults]);

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
            className="bg-[#00ca78] h-8 rounded-xl"
            style={{
              width: `${(item.probability / maxProbability) * 60}%`
            }}
          >
            <Text
              variant="body-3"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {(item.probability * 100).toFixed(2)}%
            </Text>
          </div>
        </View>
      ))}
    </View>
  );
};

export default BarList;
