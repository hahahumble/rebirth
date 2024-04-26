'use client';

import { Button, View, Divider, Tabs, Text, Icon, Loader } from 'reshaped';
import Map from '@/components/map';
import React, { useEffect, useRef, useState } from 'react';
import ResultTable from '@/components/result-table';
import { toast } from 'sonner';
import { Share2, X } from 'lucide-react';
import {
  BirthResult,
  simulateBirth,
  translateGenderChild
} from '@/_lib/rebirth';
import { useBirth } from '@/lib/store/useBirth';
import BarList from '@/components/barlist';
import Piechart from '@/components/piechart';
import FirstTimeTable from '@/components/first-time-table';
import useShareModal from '@/lib/store/useShareModal';
import Ads from '@/components/ads';

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPressing, setIsPressing] = useState(false);

  const pressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const rehydrate = async () => {
      await useBirth.persist.rehydrate();
      setIsLoading(false);
    };
    rehydrate();
  }, []);

  const { activate, deactivate, setShareInfo } = useShareModal(state => ({
    activate: state.activate,
    deactivate: state.deactivate,
    setShareInfo: state.setShareInfo
  }));

  const { addBirthResult, getBirthResultsCount } = useBirth(state => ({
    addBirthResult: state.addBirthResult,
    getBirthResultsCount: state.getBirthResultsCount
  }));

  const handleRebirth = () => {
    const randomNumber = Math.floor(Math.random() * 10000);

    if (randomNumber < 31) {
      // 31 out of 10000 is 3.1‰
      showRebirthErrorToast();
    } else {
      const birthResult = simulateBirth();
      addBirthResult(birthResult);
      showRebirthToast(birthResult, getBirthResultsCount());
    }
  };

  const startPress = () => {
    setIsPressing(true);
    pressIntervalRef.current = setInterval(() => {
      handleRebirth();
    }, 150);
  };

  const endPress = () => {
    setIsPressing(false);
    if (pressIntervalRef.current) {
      clearInterval(pressIntervalRef.current);
      pressIntervalRef.current = null;
    }
  };

  const showRebirthToast = (birthResult: BirthResult, count: number) => {
    const countAtCreation = count;
    toast.custom(t => (
      <div className="relative bg-white w-full sm:w-[354px] py-5 pl-3 pr-5 border-neutral-faded border rounded-xl">
        <div className="flex flex-row justify-start space-x-2 items-center">
          <Button
            variant="ghost"
            onClick={() => {
              activate();
              setShareInfo({
                count: countAtCreation,
                region: birthResult.province,
                category: birthResult.category,
                gender: birthResult.gender,
                order: birthResult.order,
                probability: birthResult.probability
              });
            }}
          >
            <Icon size={4} color="neutral-faded" svg={<Share2 />} />
          </Button>
          <Text>
            第{' '}
            <span className="font-medium text-primary">{countAtCreation}</span>{' '}
            次投胎，
            {['香港', '澳门', '台湾'].includes(birthResult.province) ? (
              <>
                你出生在
                <span className="font-medium text-primary">
                  {birthResult.province}
                </span>
                ，是一个
                <span className="font-medium text-primary">
                  {translateGenderChild(birthResult.gender)}
                </span>
                。
              </>
            ) : (
              <>
                你出生在
                <span className="font-medium text-primary">
                  {birthResult.province}
                </span>
                的
                <span className="font-medium text-primary">
                  {birthResult.category}
                </span>
                ，是一个
                <span className="font-medium text-primary">
                  {translateGenderChild(birthResult.gender)}
                </span>
                ，你是这个家庭
                <span className="font-medium text-primary">
                  第{birthResult.order}个
                </span>
                孩子。
              </>
            )}
          </Text>
        </div>

        <button
          className="absolute top-2 right-3"
          onClick={() => toast.dismiss(t)}
        >
          <Icon size={4} color="neutral-faded" svg={<X />} />
        </button>
      </div>
    ));
  };

  const showRebirthErrorToast = () => {
    toast.custom(t => (
      <div className="relative bg-red-100 w-full sm:w-[354px] p-5 border-red-500 border rounded-xl">
        <div className="flex flex-row justify-between">
          <Text color="critical">
            抱歉，你在这次投胎中不幸夭折，再试一次吧！
          </Text>
        </div>
        <button
          className="absolute top-2 right-3"
          onClick={() => toast.dismiss(t)}
        >
          <Icon color="critical" size={4} svg={<X />} />
        </button>
      </div>
    ));
  };

  const renderTabPanel = (component: React.ReactNode) => {
    return getBirthResultsCount() > 0 ? (
      component
    ) : (
      <>
        {isLoading ? (
          <View
            direction="row"
            gap={2}
            align="center"
            paddingBlock={4}
            height={64}
            justify="center"
          >
            <Loader />
            <Text>数据加载中</Text>
          </View>
        ) : (
          <View align="center" paddingBlock={4} height={64} justify="center">
            <Text color="neutral">暂无投胎记录，点击投胎按钮开始！</Text>
          </View>
        )}
      </>
    );
  };

  return (
    <>
      <View paddingInline={4} paddingBottom={9} className="select-none">
        <View paddingBlock={4}>
          <Map />
        </View>
        <View align="center">
          <View
            direction="row"
            justify="center"
            paddingBlock={4}
            gap={4}
            position="relative"
            width="100%"
          >
            <View width={64}>
              <div
                onMouseDown={event => {
                  if (event.button === 0) {
                    startPress();
                  }
                }}
                onMouseUp={endPress}
                onMouseLeave={endPress}
                onTouchStart={startPress}
                onTouchEnd={endPress}
              >
                <Button
                  color="primary"
                  rounded
                  fullWidth
                  onClick={handleRebirth}
                >
                  投胎
                </Button>
              </div>
            </View>
          </View>
          <View width="100%" paddingBottom={2} paddingTop={4}>
            <Divider />
          </View>
          <View width="100%" paddingBlock={2}>
            <Tabs variant="pills" defaultValue="record">
              <View paddingBottom={3}>
                <Tabs.List>
                  <Tabs.Item value="record">投胎记录</Tabs.Item>
                  <Tabs.Item value="province">地区分布</Tabs.Item>
                  <Tabs.Item value="gender">性别分布</Tabs.Item>
                  <Tabs.Item value="first">第一次出现</Tabs.Item>
                </Tabs.List>
              </View>
              <Tabs.Panel value="record">
                {renderTabPanel(<ResultTable />)}
              </Tabs.Panel>
              <Tabs.Panel value="province">
                {renderTabPanel(<BarList />)}
              </Tabs.Panel>
              <Tabs.Panel value="gender">
                {renderTabPanel(<Piechart />)}
              </Tabs.Panel>
              <Tabs.Panel value="first">
                {renderTabPanel(<FirstTimeTable />)}
              </Tabs.Panel>
            </Tabs>
          </View>
        </View>
      </View>
      <View paddingBottom={4} paddingInline={4}>
        <Ads />
      </View>
    </>
  );
}

export default Page;
