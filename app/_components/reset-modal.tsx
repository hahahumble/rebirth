'use client';

import React from 'react';
import { Button, Dismissible, Modal, Text, View } from 'reshaped';
import useResetModal from '@/lib/store/useResetModal';
import { useBirth } from '@/lib/store/useBirth';

function ResetModal() {
  const { active, deactivate } = useResetModal();
  const { clearBirthResults } = useBirth(state => ({
    clearBirthResults: state.clearBirthResults
  }));

  function handleReset() {
    clearBirthResults();
    deactivate();
  }

  return (
    <Modal active={active} onClose={deactivate}>
      <View gap={3}>
        <Dismissible onClose={deactivate} closeAriaLabel="Close modal">
          <Modal.Title>确定要重置数据？</Modal.Title>
          <Modal.Subtitle>此操作将清空所有数据，不可恢复</Modal.Subtitle>
        </Dismissible>
        <View gap={2} direction="row">
          <View.Item columns={6}>
            <Button
              color="primary"
              variant="faded"
              fullWidth
              onClick={deactivate}
            >
              取消
            </Button>
          </View.Item>
          <View.Item columns={6}>
            <Button
              color="critical"
              variant="faded"
              fullWidth
              onClick={handleReset}
            >
              重置
            </Button>
          </View.Item>
        </View>
      </View>
    </Modal>
  );
}

export default ResetModal;
