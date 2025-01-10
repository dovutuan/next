'use client';
import * as React from 'react';
import Modal, { ModalOwnProps } from '@mui/material/Modal';
import cn from '@/utils/classNames';
import omit from 'lodash/omit';
import { AnimationModalStyled } from './style';

export type BaseModalProps = React.PropsWithChildren &
  ModalOwnProps & {
    className?: string;
    align: 'left' | 'right';
    isShowAnimation: boolean;
  };

const AnimationBaseModal: React.FunctionComponent<BaseModalProps> = (props) => {
  const getAlignClassName = React.useMemo(() => {
    return props.align === "left" ? 'left-0' : 'right-0';
  }, [props.align]);

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...omit(props, ['className', 'align'])}
    >
      <AnimationModalStyled
        show={props.isShowAnimation?.toString()}
        align={props.align}
        className={cn(
          `fixed overflow-auto rounded-xl bg-white text-left outline-none top-0`,
          props.className,
          getAlignClassName,
        )}
      >
        {props.children}
      </AnimationModalStyled>
    </Modal>
  );
};

export default AnimationBaseModal;
