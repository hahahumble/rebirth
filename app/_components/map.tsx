'use client';

import china from '@/data/china.json';
import * as echarts from 'echarts';
import { useEffect, useRef, useMemo } from 'react';
import { Loader, Text } from 'reshaped';
import { useBirth } from '@/lib/store/useBirth';
import { BirthResult } from '@/lib/rebirth';

const Map = () => {
  const birthResults = useBirth(
    (state: { birthResults: BirthResult[] }) => state.birthResults
  );

  const chartRef = useRef<HTMLDivElement | null>(null);

  const dataList = useMemo(() => {
    const provinceMap: { [key: string]: number } = {};

    birthResults.forEach(result => {
      if (provinceMap[result.province]) {
        provinceMap[result.province] += result.probability;
      } else {
        provinceMap[result.province] = result.probability;
      }
    });

    return Object.entries(provinceMap).map(([name, value]) => ({
      name,
      value
    }));
  }, [birthResults]);

  const topNumber =
    dataList.length > 0 ? Math.max(...dataList.map(item => item.value)) : 0;
  const bottomNumber =
    dataList.length > 0 ? Math.min(...dataList.map(item => item.value)) : 0;

  const echartsMapClick = () => {
  };

  const mapOption = (mapName: any, data: any) => {
    const myChart = echarts.init(chartRef.current);

    echarts.registerMap(mapName, data);

    const latestBirthResult = useBirth.getState().getLatestBirthResult();
    const currentProvince = latestBirthResult?.province;

    const markPointData = currentProvince
      ? china.features.find(
          feature => feature.properties.name === currentProvince
        )
      : null;

    const option = {
      visualMap: {
        min: 0,
        max: 5,
        left: 'left',
        top: 'bottom',
        text: [topNumber.toFixed(2) + '%', bottomNumber.toFixed(2) + '%'],
        inRange: {
          color: ['#f5e1d6', '#ff4f04']
        },
        show: false
      },
      geo: {
        map: 'china',
        roam: false,
        zoom: 1.23,
        label: {
          normal: {
            show: true,
            fontSize: '10',
            color: '#181716',
            fontWeight: 'medium'
          },
          emphasis: {
            show: true,
            color: '#181716'
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#bebfc0',
            areaColor: '#fcfcfd'
          },
          emphasis: {
            areaColor: '#afd8af'
          }
        }
      },
      series: [
        {
          name: '人口',
          type: 'map',
          geoIndex: 0,
          data: dataList,
          select: {
            disabled: true
          },
          markPoint: {
            symbol: 'pin',
            symbolSize: 30,
            animationDuration: 100, // Animation duration
            itemStyle: {
              color: '#01ca78' // Color of markPoint
            },
            data: markPointData
              ? [
                  {
                    name: currentProvince,
                    coord: markPointData.properties.cp
                  }
                ]
              : []
          }
        }
      ]
    };
    myChart.setOption(option);

    myChart.getZr().on('click', params => {
      if (params.target) {
        myChart.on('click', echartsMapClick);
      }
    });
  };

  const loadingChina = () => {
    mapOption('china', china);
  };

  useEffect(() => {
    loadingChina();
  }, [dataList]);

  return (
    <div
      className="flex flex-row space-x-2 items-center justify-center md:min-h-[460px] min-h-[320px] md:w-[600px] w-full px-2"
      ref={chartRef}
    >
      <Loader />
      <Text>地图加载中</Text>
    </div>
  );
};

export default Map;
