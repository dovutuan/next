'use client';
import * as React from 'react';
import Modal, { ModalOwnProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import isFunction from 'lodash/isFunction';
import omit from 'lodash/omit';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';

export interface BaseModalProps
  extends React.PropsWithChildren,
    Omit<ModalOwnProps, 'children'> {
  title?: string;
  renderTitle?: React.ReactElement | (() => React.ReactElement) | null;
  renderFooter?: React.ReactElement | (() => React.ReactElement) | null;
  showFooter?: boolean;
  showHeader?: boolean;
}

const BaseModal: React.FunctionComponent<BaseModalProps> = (props) => {
  const renderHeader = () => {
    if (props.showHeader === false) return null;
    return (
      <Box className="modal-header relative flex items-center p-5 font-bold">
        {renderTitle()}
        <IconButton sx={{ position: 'absolute', right: '0.5rem' }}>
          <CloseIcon sx={{ color: STYLE_VARIABLES.CLR_TXT_PRIMARY }} />
        </IconButton>
      </Box>
    );
  };

  const renderTitle = () => {
    if (props.renderTitle) {
      if (isFunction(props.renderTitle)) {
        return props.renderTitle();
      } else {
        return props.renderTitle;
      }
    } else {
      return (
        <span className="border-clr-sky text-clr-secondary-4 border-l-4 border-solid pl-2 leading-6">
          {props.title ?? ''}
        </span>
      );
    }
  };

  const renderBody = () => {
    return <Box className="modal-body p-5">{props.children}</Box>;
  };

  const renderFooter = () => {
    if (props.showFooter === false) return null;
    if (props.renderFooter) {
      let children: React.ReactElement | null = null;
      if (isFunction(props.renderFooter)) {
        children = props.renderFooter();
      } else {
        children = props.renderFooter;
      }
      return (
        <Box className="modal-footer border-t border-solid border-clr-border-primary p-5">
          {children}
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            background: STYLE_VARIABLES.CLR_BG_OVERLAY,
          },
        },
      }}
      {...omit(props, ['title', 'renderTitle', 'renderFooter'])}
    >
      <Box className="fixed left-1/2 top-1/2 w-1/2 max-w-[714px] -translate-x-2/4 -translate-y-2/4 rounded-lg bg-white outline-none">
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </Box>
    </Modal>
  );
};

export default BaseModal;
