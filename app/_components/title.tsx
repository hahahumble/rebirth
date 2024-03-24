import React from 'react';
import { Actionable, Text, View } from 'reshaped';

function CarrotIcon() {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="10" fill="#FF4F04" />
      <path
        d="M24.16 36.6667L19.3767 31.9067M39.7933 39L34.0533 33.26M9.29666 54.6333C9.29666 54.6333 32.3267 46.4667 39 39.7933C39.9759 38.8189 40.7504 37.6618 41.2792 36.3881C41.8079 35.1144 42.0806 33.749 42.0817 32.3699C42.0828 30.9908 41.8122 29.625 41.2855 28.3505C40.7587 27.0759 39.9861 25.9176 39.0117 24.9417C38.0373 23.9657 36.8802 23.1913 35.6065 22.6625C34.3327 22.1337 32.9674 21.861 31.5882 21.86C30.2091 21.8589 28.8433 22.1294 27.5688 22.6562C26.2942 23.183 25.1359 23.9556 24.16 24.93C17.4633 31.6267 9.29666 54.6333 9.29666 54.6333Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55.3333 25C55.3333 25 52.23 20.3333 47.1667 20.3333C43.34 20.3333 39 25 39 25C39 25 42.1033 29.6667 47.1667 29.6667C52.23 29.6667 55.3333 25 55.3333 25Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 8.66666C39 8.66666 34.3333 11.77 34.3333 16.8333C34.3333 21.8967 39 25 39 25C39 25 43.6667 20.7067 43.6667 16.8333C43.6667 11.77 39 8.66666 39 8.66666Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Title() {
  return (
    <>
      <View direction="row" align="center" gap={2}>
        <Actionable href="/">
          <View direction="row" align="center" gap={2}>
            <CarrotIcon />
            <Text variant="body-1" weight="medium">
              投胎模拟器
            </Text>
          </View>
        </Actionable>
        <div className="bg-[#01ca78] px-2 py-1 rounded-xl hover:cursor-default">
          <Text className="text-white" weight="medium" variant="caption-1">
            中国版
          </Text>
        </div>
      </View>
    </>
  );
}

export default Title;
