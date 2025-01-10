import { Box, styled } from '@mui/material';

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
  ['& .content-items']: {
    border: '1px solid #EAECF0',
    borderRadius: '10px',
  },
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

export { ContentStyled, BlockTitle };
