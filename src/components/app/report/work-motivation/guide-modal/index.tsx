'use client';
import React from 'react';
import ModalContent, { ModalProps } from './content';
import ModalWrapper from '@/components/modules/modal-wrapper';
import { ModalNames } from '@/types/ModalNames.type';

const WorkMotivationGuideModal = (props: ModalProps) => {
  return (
    <ModalWrapper modalName={ModalNames.REPORT_WORK_MOTIVATION_GUIDE}>
      <ModalContent {...props} />
    </ModalWrapper>
  );
};
export default React.memo(WorkMotivationGuideModal);
