'use client';
import React from 'react';
import ModalContent, { ModalProps } from './content';
import ModalWrapper from '@/components/modules/modal-wrapper';
import { ModalNames } from '@/types/ModalNames.type';

const Chart10GuideModal = (props: ModalProps) => {
  return (
    <ModalWrapper modalName={ModalNames.CHART_10_GUIDE}>
      <ModalContent {...props} />
    </ModalWrapper>
  );
};
export default React.memo(Chart10GuideModal);
