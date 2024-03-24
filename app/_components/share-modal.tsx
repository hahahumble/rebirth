'use client';

import React from 'react';
import { Button, Dismissible, Modal, Text, View } from 'reshaped';
import useShareModal from '@/lib/store/useShareModal';

function ShareModal() {
  const { active, deactivate } = useShareModal();

  return (
    <Modal active={active} onClose={deactivate} transparentOverlay={true}>
      <View gap={3}>
        <Dismissible onClose={deactivate} closeAriaLabel="Close modal">
          <Modal.Title>分享</Modal.Title>
        </Dismissible>
        <View
          aspectRatio={1}
          height={72}
          width={72}
          className="bg-[#f5e1d6]"
          position="relative"
        >
          第 16 次重开，我出生到了四川，是个男孩
        </View>
        <View>
          <Button color="primary" variant="faded">
            保存
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default ShareModal;
