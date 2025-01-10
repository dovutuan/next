'use client';
import * as React from 'react';
import BaseModal, { BaseModalProps } from '../base-modal';
import Button from '@/components/common/button';

interface Props extends BaseModalProps {}

const InformModal: React.FunctionComponent<Props> = (props) => {
  const renderFooter = () => {
    return <Button variant="contained">条件をクリア</Button>;
  };

  return (
    <BaseModal {...props} renderFooter={renderFooter()}>
      {props.children}
    </BaseModal>
  );
};

export default InformModal;
