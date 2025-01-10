'use client';
import { useAppSelector } from '@/store/hooks';
import { isModalOpen } from '@/store/selectors';
import { ModalNames } from '@/types/ModalNames.type';
import * as React from 'react';

interface ModalWrapperProps extends React.PropsWithChildren {
  modalName: ModalNames;
}

const ModalWrapper: React.FunctionComponent<ModalWrapperProps> = (props) => {
  const isOpen = useAppSelector((state) => isModalOpen(state, props.modalName));
  if (!isOpen) return null;
  return <>{props.children}</>;
};

export default ModalWrapper;
