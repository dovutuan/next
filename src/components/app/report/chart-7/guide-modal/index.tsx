'use client';
import React from 'react';
import ModalContent, { ModalProps } from './content';
import ModalWrapper from '@/components/modules/modal-wrapper';
import { ModalNames } from '@/types/ModalNames.type';

const Chart7GuideModal = (props: ModalProps) => {
  return (
    <ModalWrapper modalName={ModalNames.CHART_7_GUIDE}>
      <ModalContent {...props} />
    </ModalWrapper>
  );
};
export default React.memo(Chart7GuideModal);
