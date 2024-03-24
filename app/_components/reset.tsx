'use client';

import React from 'react';
import { Button, Text, View } from 'reshaped';
import useResetModal from '@/lib/store/useResetModal';

function Reset() {
  const { activate } = useResetModal();

  return (
    <View direction="row" justify="space-between" paddingBlock={4}>
      <View direction="column">
        <Text variant="body-2">重置数据</Text>
        <Text variant="body-3" color="neutral-faded">
          此操作将清空所有数据，不可恢复
        </Text>
      </View>
      <Button color="critical" onClick={activate} variant="faded">
        重置
      </Button>
    </View>
  );
}

export default Reset;
