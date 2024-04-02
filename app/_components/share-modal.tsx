'use client';

import React from 'react';
import { Button, Dismissible, Icon, Modal, Tabs, Text, View } from 'reshaped';
import useShareModal, { ShareInfo } from '@/lib/store/useShareModal';
import html2canvas from 'html2canvas';
import { CarrotIcon } from '@/components/title';
import QRCode from 'react-qr-code';
import ShareMap from '@/components/share-map';
import { toast } from 'sonner';
import { X } from 'lucide-react';
import ChinaMap from '@/components/icon';
import { translateGenderChild } from '@/lib/rebirth';

function ShareStyle1({ shareInfo }: { shareInfo: ShareInfo }) {
  return (
    <div
      className="w-full bg-orange-200 relative aspect-square"
      id="shareContent"
    >
      <View
        direction="column"
        padding={6}
        justify="space-between"
        height="100%"
      >
        <ShareMap region={shareInfo.region} />
        <Text variant="body-2" weight="medium">
          {['香港', '澳门', '台湾'].includes(shareInfo.region) ? (
            <>
              我在投胎模拟器第{' '}
              <span className="text-[#ba3700] font-medium">
                {shareInfo.count}
              </span>{' '}
              次投胎在
              <span className="text-[#ba3700] font-medium">
                {shareInfo.region}
              </span>
              ，是一个
              <span className="text-[#ba3700] font-medium">
                {translateGenderChild(shareInfo.gender)}
              </span>
              ，你也来试试吧！
            </>
          ) : (
            <>
              我在投胎模拟器第{' '}
              <span className="text-[#ba3700] font-medium">
                {shareInfo.count}
              </span>{' '}
              次投胎在
              <span className="text-[#ba3700] font-medium">
                {shareInfo.region}的{shareInfo.category}
              </span>
              ，是家里
              <span className="text-[#ba3700] font-medium">
                第{shareInfo.order}个{translateGenderChild(shareInfo.gender)}
              </span>
              ，概率只有{' '}
              <span className="text-[#ba3700] font-medium">
                {shareInfo.probability.toPrecision(2)}%
              </span>
              ，你也来试试吧！
            </>
          )}
        </Text>
        <View direction="row" justify="space-between" align="center">
          <View direction="row" gap={2} align="center">
            <CarrotIcon size={40} />
            <View direction="column">
              <Text color="primary" weight="medium" variant="body-1">
                投胎模拟器
              </Text>
              <Text color="primary" weight="medium">
                toutai.cc
              </Text>
            </View>
          </View>
          <QRCode
            value="https://toutai.cc"
            bgColor="#fed8aa"
            className="w-12 h-12"
          />
        </View>
      </View>
    </div>
  );
}

function ShareStyle2({ shareInfo }: { shareInfo: ShareInfo }) {
  return (
    <div
      className="w-full bg-[#f5f3ef] relative aspect-square"
      id="shareContent"
    >
      <View direction="column" padding={6} height="100%">
        <div className="absolute right-2 top-12">
          <ChinaMap size={180} />
        </div>
        <View direction="column" justify="center" grow paddingTop={6}>
          {['香港', '澳门', '台湾'].includes(shareInfo.region) ? (
            <>
              <Text variant="body-2" weight="medium" className="z-10">
                第{' '}
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.count}
                </span>{' '}
                次
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                我投胎在了
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.region}
                </span>
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                是一个
                <span className="text-[#ba3700] font-medium">
                  {translateGenderChild(shareInfo.gender)}
                </span>
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                概率只有{' '}
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.probability.toPrecision(2)}%
                </span>
              </Text>
            </>
          ) : (
            <>
              <Text variant="body-2" weight="medium" className="z-10">
                第{' '}
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.count}
                </span>{' '}
                次
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                我投胎在了
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.region}的{shareInfo.category}
                </span>
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                是家里
                <span className="text-[#ba3700] font-medium">
                  第{shareInfo.order}个{translateGenderChild(shareInfo.gender)}
                </span>
              </Text>
              <Text variant="body-2" weight="medium" className="z-10">
                概率只有{' '}
                <span className="text-[#ba3700] font-medium">
                  {shareInfo.probability.toPrecision(2)}%
                </span>
              </Text>
            </>
          )}
        </View>
        <View direction="row" justify="space-between" align="center">
          <View direction="row" gap={2} align="center">
            <CarrotIcon size={40} />
            <View direction="column">
              <Text color="primary" weight="medium" variant="body-1">
                投胎模拟器
              </Text>
              <Text color="primary" weight="medium">
                toutai.cc
              </Text>
            </View>
          </View>
          <QRCode
            value="https://toutai.cc"
            bgColor="#f5f3ef"
            className="w-12 h-12"
          />
        </View>
      </View>
    </div>
  );
}

function ShareStyle3({ shareInfo }: { shareInfo: ShareInfo }) {
  return (
    <div
      className="w-full bg-[#f5f3ef] relative aspect-square"
      id="shareContent"
    >
      <View
        direction="column"
        padding={6}
        height="100%"
        justify="space-between"
      >
        <ShareMap region={shareInfo.region} />
        <View direction="row" justify="space-between" paddingBottom={4}>
          <View direction="column">
            {['香港', '澳门', '台湾'].includes(shareInfo.region) ? (
              <>
                <Text variant="body-2" weight="medium" className="z-10">
                  第{' '}
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.count}
                  </span>{' '}
                  次
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  我投胎在了
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.region}
                  </span>
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  是一个
                  <span className="text-[#ba3700] font-medium">
                    {translateGenderChild(shareInfo.gender)}
                  </span>
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  概率只有{' '}
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.probability.toPrecision(2)}%
                  </span>
                </Text>
              </>
            ) : (
              <>
                <Text variant="body-2" weight="medium" className="z-10">
                  第{' '}
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.count}
                  </span>{' '}
                  次
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  我投胎在了
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.region}的{shareInfo.category}
                  </span>
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  是家里
                  <span className="text-[#ba3700] font-medium">
                    第{shareInfo.order}个
                    {translateGenderChild(shareInfo.gender)}
                  </span>
                </Text>
                <Text variant="body-2" weight="medium" className="z-10">
                  概率只有{' '}
                  <span className="text-[#ba3700] font-medium">
                    {shareInfo.probability.toPrecision(2)}%
                  </span>
                </Text>
              </>
            )}
          </View>
          <View justify="end" height="100%">
            <Text color="neutral-faded">#投胎 #重开</Text>
          </View>
        </View>
        <View direction="row" justify="space-between" align="center">
          <View direction="row" gap={2} align="center">
            <CarrotIcon size={40} />
            <View direction="column">
              <Text color="primary" weight="medium" variant="body-1">
                投胎模拟器
              </Text>
              <Text color="primary" weight="medium">
                toutai.cc
              </Text>
            </View>
          </View>
          <QRCode
            value="https://toutai.cc"
            bgColor="#f5f3ef"
            className="w-12 h-12"
          />
        </View>
      </View>
    </div>
  );
}

function ModalFooter({
  onCancel,
  onSave
}: {
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <View gap={2} direction="row">
      <View.Item columns={6}>
        <Button color="primary" variant="faded" fullWidth onClick={onCancel}>
          取消
        </Button>
      </View.Item>
      <View.Item columns={6}>
        <Button color="primary" variant="solid" fullWidth onClick={onSave}>
          保存图片
        </Button>
      </View.Item>
    </View>
  );
}

function ShareModal() {
  const { active, deactivate, shareInfo } = useShareModal();

  function handleSaveAsImage() {
    const shareContent = document.getElementById('shareContent');

    if (shareContent) {
      html2canvas(shareContent, { scale: 3 })
        .then(canvas => {
          const link = document.createElement('a');
          link.download = '投胎模拟器-第' + shareInfo.count + '次.png';
          link.href = canvas.toDataURL('image/png');
          link.click();

          toast.custom(t => (
            <div className="relative bg-green-100 w-full sm:w-[354px] p-5 border-green-500 border rounded-xl">
              <div className="flex flex-row justify-between">
                <Text color="positive">图片保存成功！</Text>
              </div>
              <button
                className="absolute top-2 right-3"
                onClick={() => toast.dismiss(t)}
              >
                <Icon color="positive" size={4} svg={<X />} />
              </button>
            </div>
          ));
        })
        .catch(err => console.error('Error capturing image:', err));
    }
  }

  return (
    <Modal active={active} onClose={deactivate}>
      <View gap={3}>
        <Dismissible onClose={deactivate} closeAriaLabel="Close modal">
          <Modal.Title>分享</Modal.Title>
          <Modal.Subtitle>分享你的投胎结果</Modal.Subtitle>
        </Dismissible>
        <Tabs variant="pills">
          <View gap={3}>
            <View>
              <Tabs.Panel value="1">
                <ShareStyle1 shareInfo={shareInfo} />
              </Tabs.Panel>
              <Tabs.Panel value="2">
                <ShareStyle2 shareInfo={shareInfo} />
              </Tabs.Panel>
              <Tabs.Panel value="3">
                <ShareStyle3 shareInfo={shareInfo} />
              </Tabs.Panel>
            </View>
            <Tabs.List>
              <Tabs.Item value="1">样式一</Tabs.Item>
              <Tabs.Item value="2">样式二</Tabs.Item>
              <Tabs.Item value="3">样式三</Tabs.Item>
            </Tabs.List>
          </View>
        </Tabs>
        <ModalFooter onCancel={deactivate} onSave={handleSaveAsImage} />
      </View>
    </Modal>
  );
}

export default ShareModal;
