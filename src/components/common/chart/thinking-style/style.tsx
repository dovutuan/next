import { Box, styled } from '@mui/material';

const ThinkingStyleChartContainer = styled(Box)({
  ['& .strong_label']: {
    color: '#079455',
  },
  ['& .weaknesses_label']: {
    color: '#D92D20',
  },
  ['& .grid-item-content']: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
  },
  ['& .lengthwise-label']: {
    lineHeight: '1.8em',
    fontWeight: '600',
    color: '#101828',
  },
  ['& .direction-label']: {
    letterSpacing: '.3em',
    fontWeight: '600',
    color: '#101828',
  },
  ['& .resize-width']: {
    '@media (max-width: 1280px)': {
      width: '100%',
    },
    '@media (min-width: 1280px)': {
      width: '50%',
    },
  },
});

const BoxContent = styled(Box)({
  maxWidth: '270px',
  ['& .active']: {
    borderColor: '#1570EF!important',
    backgroundColor: 'rgba(21, 112, 239, 0.1)!important',
  },
  ['& .items-content']: {
    paddingBottom: '100%',
  },
  ['& .chart-content-items-middle']: {
    transform: 'translate(-50%, -50%)',
    // backgroundColor: '#FFF',
  },
  ['& .chart-content-items']: {
    cursor: 'pointer',
    borderColor: '#D0D5DD',
    borderStyle: 'solid',
    ['& .items-content-text']: {
      transform: 'translate(-50%, -50%)',
      width: '100%',
    },
  },
  ['& .vector']: {
    backgroundColor: '#D0D5DD',
  },
  ['& .vectorX .content']: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '3px',
      transform: 'translateY(-50%) rotate(-45deg)',
      borderWidth: '2px 0px 0px 2px',
      borderStyle: 'solid',
      borderColor: '#D0D5DD',
      padding: '4px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      right: '3px',
      transform: 'translateY(-50%) rotate(-45deg)',
      borderWidth: '0px 2px 2px 0px',
      borderStyle: 'solid',
      borderColor: '#D0D5DD',
      padding: '4px',
    },
  },
  ['& .vectorY .content']: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '3px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      borderWidth: '2px 0px 0px 2px',
      borderStyle: 'solid',
      borderColor: '#D0D5DD',
      padding: '4px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '3px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      borderWidth: '0px 2px 2px 0px',
      borderStyle: 'solid',
      borderColor: '#D0D5DD',
      padding: '4px',
    },
  },
});

const AnimationBox = styled(Box)<{ isshow: string }>(({ isshow }) => ({
  opacity: 0,
  animation: isshow === 'true' ? 'zoomIn .5s ease-in-out forwards' : 'none',
  '@keyframes zoomIn': {
    '0%': {
      opacity: 0.5,
      transform: 'scale(.9)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
}));

export { ThinkingStyleChartContainer, BoxContent, AnimationBox };
