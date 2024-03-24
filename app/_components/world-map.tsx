'use client';

import world from '@/data/world.json';
import * as echarts from 'echarts';
import { useEffect, useRef, useMemo } from 'react';
import { Loader2 } from 'lucide-react';
import { Text } from 'reshaped';
import { useBirth } from '@/lib/store/useBirth';

const WorldMap = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const echartsMapClick = () => {
    // 点击地图模块逻辑事件
  };

  const mapOption = (mapName: any, data: any) => {
    const myChart = echarts.init(chartRef.current);

    echarts.registerMap(mapName, data);

    const option = {
      radius: '100%',
      tooltip: {
        trigger: 'item',
        padding: [5, 10],
        backgroundColor: '#ffffff', // tooltip 背景颜色
        borderColor: '#e1e1e1', // tooltip 边框颜色
        borderWidth: 1, // tooltip 边框宽度
        textStyle: {
          color: '#666', // tooltip 文字颜色
          fontSize: 14 // tooltip 字体大小
        },
        extraCssText: 'box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);'
      },
      legend: {
        orient: 'horizontal', // 图例的排列方向
        // textStyle: { color: '#1a1e45' },
        x: 'left', //图例的位置
        y: '-20000000000000'
      },
      visualMap: {
        //颜色的设置  dataRange
        // textStyle: { color: '#1a1e45' },
        x: 'left',
        y: 'bottom',
        // splitList: [{ start: 0, end: 150000 }],
        show: false,
        // text:['高','低'],// 文本，默认为数值文本
        color: ['#1a1e45']
      },
      geo: {
        map: 'world', // 此处需与注册地图命名保持一致
        type: 'map',
        zoom: 1.2,
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#FFFFFF'
            }
          },
          emphasis: {
            show: false
          }
        },
        roam: true, // 是否允许缩放
        scaleLimit: {
          // 设置缩放的最小和最大比例
          min: 1,
          max: 5
        },
        itemStyle: {
          normal: {
            color: '#fcfcfd', // 地图背景色，用到组件配置的变量
            borderColor: '#bebfc0' // 省市边界线
          },
          emphasis: {
            areaColor: '#afd8af' // 悬浮背景
          }
        },
        data: []
      }
    };
    myChart.setOption(option);

    myChart.getZr().on('click', params => {
      if (params.target) {
        myChart.on('click', echartsMapClick);
      }
    });
  };

  const loadingChina = () => {
    mapOption('world', world);
  };

  useEffect(() => {
    loadingChina();
  }, []);

  return (
    <div
      className="flex flex-row space-x-1.5 items-center justify-center md:min-h-[460px] min-h-[320px] md:w-[600px] w-full px-2"
      ref={chartRef}
    >
      <Loader2 size={16} className="animate-spin" />
      <Text>地图加载中</Text>
    </div>
  );
};

export default WorldMap;
