import { Box, styled, Tabs } from '@mui/material';

type AnimationProps = {
  delay: number;
};

const TextAnimation = styled(Box)<AnimationProps>(({ delay }) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `fadeInUp 0.6s forwards ${delay}s`,
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const TabContent = styled(Box)({
  ['& .strong_label']: {
    color: '#079455',
  },
  ['& .grid-item-content']: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
  },
  ['& .weaknesses_label']: {
    color: '#D92D20',
  },
  ['& .tab-content-description']: {
    color: '#475467',
  },
  ['& .leader-style-content-label']: {
    color: '#667085',
  },
  ['& .w40']: {
    '@media (max-width: 1280px)': {
      width: '100%',
    },
    '@media (min-width: 1280px)': {
      width: '40%',
    },
  },
  ['& .w60']: {
    '@media (max-width: 1280px)': {
      width: '100%',
    },
    '@media (min-width: 1280px)': {
      width: '60%',
    },
  },
});

const TabListStyled = styled(Tabs)({
  ['& .MuiTab-root']: {
    fontWeight: '600',
    fontSize: '14px',
  },
  ['& .Mui-selected']: {
    color: '#3F8FD7!important',
  },
  ['& .MuiTabs-indicator']: {
    backgroundColor: '#3F8FD7!important',
  },
});

const ImageAnimation = styled(Box)({
  opacity: 0,
  transform: 'scale(0.3)',
  animation: 'fadeInScale 1s forwards',
  '@keyframes fadeInScale': {
    from: {
      opacity: 0,
      transform: 'scale(0.3)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
});

export { TabContent, TabListStyled, ImageAnimation, TextAnimation };
