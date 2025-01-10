import BaseModal, { BaseModalProps } from '@/components/common/base-modal';
import { Box, styled } from '@mui/material';

interface modalStyledProps extends BaseModalProps {
  show: string;
}

const BlockTitle = styled(Box)({
  paddingLeft: '20px',
  minHeight: '36px',
  position: 'relative',
  borderBottom: '0',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '8px',
    height: '85%',
    backgroundColor: '#3F8FD7',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: 3,
  },
});

const ContentStyled = styled(Box)({
  border: '1px solid #EAECF0',
  borderRadius: '10px',
  ['& .content-title']: {
    backgroundColor: '#F9FAFB',
    borderTop: '1px solid #EAECF0',
    borderBottom: '1px solid #EAECF0',
  },
  ['& .strong_label']: {
    color: '#079455',
  },
  ['& .weaknesses_label']: {
    color: '#D92D20',
  },
  ['& .grid-item-content']: {
    color: '#475467',
    lineHeight: '20px',
  },
  ['& .leader-style-content-label']: {
    color: '#079455',
  },
  ['& .result-exam-active']: {
    border: '1px solid #B2DDFF',
    borderRadius: '8px',
  },
});

const BaseModalSlideInRight = styled(BaseModal)(
  ({ show }: modalStyledProps) => ({
    opacity: show === 'true' ? 1 : 0,
    animation: `${show === 'true' ? 'slideInRight' : 'slideOutRight'} .3s forwards`,
    '@keyframes slideInRight': {
      from: {
        opacity: 0,
        transform: 'translateX(100%)',
      },
      to: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    '@keyframes slideOutRight': {
      from: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      to: {
        opacity: 0,
        transform: 'translateX(100%)',
      },
    },
  }),
);

export { ContentStyled, BlockTitle, BaseModalSlideInRight };
