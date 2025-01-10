import styled from '@emotion/styled';
import Box from '@mui/material/Box';

interface ModalStyledProps {
  show: string;
  align: string;
}

const AnimationModalStyled = styled(Box)(({
  show,
  align,
}: ModalStyledProps) => {
  const isShow = show === 'true';
  const obj: any = {
    left: isShow ? 'slideInLeft' : 'slideOutLeft',
    right: isShow ? 'slideInRight' : 'slideOutRight',
  };
  return {
    opacity: Number(isShow),
    animation: `${obj[align]} .3s forwards`,
    willChange: 'transform, opacity',
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
    '@keyframes slideInLeft': {
      from: {
        opacity: 0,
        transform: 'translateX(-100%)',
      },
      to: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    '@keyframes slideOutLeft': {
      from: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      to: {
        opacity: 0,
        transform: 'translateX(-100%)',
      },
    },
    '@media (max-width: 640px)': {
      width: '100%',
    },
  };
});

export { AnimationModalStyled };
