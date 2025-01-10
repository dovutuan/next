'use client';
import * as React from 'react';
import Modal, { ModalOwnProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '/public/assets/icons/close.svg';
import { IconButton } from '@mui/material';
import cn from '@/utils/classNames';
import omit from 'lodash/omit';

export type BaseModalProps = React.PropsWithChildren &
  ModalOwnProps & {
    className?: string;
  };
type ModalTitleProps = {
  onClose?: () => void;
  className?: string;
};
type ModalContentProps = {
  className?: string;
};

const BaseModal: React.FunctionComponent<BaseModalProps> = (props) => {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...omit(props, ['className'])}
    >
      <Box
        className={cn(
          'fixed left-1/2 top-1/2 w-1/2 w-fit -translate-x-2/4 -translate-y-2/4',
          'overflow-auto rounded-xl bg-white outline-none',
          props.className,
        )}
      >
        {props.children}
      </Box>
    </Modal>
  );
};

const ModalTitle = (props: ModalTitleProps & React.PropsWithChildren) => {
  return (
    <Box
      className={cn(
        'relative min-h-[68px] border-b border-solid border-clr-border-secondary p-[22px]',
        props.className,
      )}
    >
      <IconButton
        sx={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translate(0, -50%)',
          padding: '10px',
        }}
        onClick={props.onClose}
      >
        <CloseIcon />
      </IconButton>
      {props.children}
    </Box>
  );
};

const ModalContent = (props: ModalContentProps & React.PropsWithChildren) => {
  return (
    <Box className={cn('px-[32px] py-[40px]', props.className)}>
      {props.children}
    </Box>
  );
};

const ModalFooter = (props: ModalContentProps & React.PropsWithChildren) => {
  return (
    <Box
      className={cn(
        'border border-t border-solid border-clr-border-secondary px-[32px] py-[40px]',
        props.className,
      )}
    >
      {props.children}
    </Box>
  );
};

export { ModalTitle, ModalContent, ModalFooter };

export default BaseModal;
