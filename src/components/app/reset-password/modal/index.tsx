import * as React from 'react';
import BaseModal from '@/components/common/base-modal';
import ModalWrapper from '@/components/modules/modal-wrapper';
import { ModalNames } from '@/types/ModalNames.type';

interface ResetPasswordModalProps {}

const Content = () => {
  return <BaseModal open={true}>AAA</BaseModal>;
};

const ResetPasswordModal: React.FunctionComponent<
  ResetPasswordModalProps
> = () => {
  return (
    <ModalWrapper modalName={ModalNames.RESET_PASSWORD}>
      <Content />;
    </ModalWrapper>
  );
};

export default React.memo(ResetPasswordModal);
