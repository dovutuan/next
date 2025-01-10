'use client';
import React from 'react';
import ModalContent, { ModalProps } from './content';
import ModalWrapper from '@/components/modules/modal-wrapper';
import { ModalNames } from '@/types/ModalNames.type';

const ThinkingTypeGuideModal = (props: ModalProps) => {
  return (
    <ModalWrapper modalName={ModalNames.REPORT_THINKING_TYPE_GUIDE}>
      <ModalContent {...props} />
    </ModalWrapper>
  );
};
export default React.memo(ThinkingTypeGuideModal);
