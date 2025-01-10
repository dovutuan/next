import React from 'react';
import Box from '@mui/material/Box';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { Instance } from '@popperjs/core';
import { styled } from '@mui/material';

interface AnchorElTooltipType extends TooltipProps {
  children: React.ReactElement;
  title: string;
}

const TooltipStyle = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 12,
    lineHeight: 1.8,
    border: '1px solid #D0D5DD',
    boxShadow: '0px 32px 48px -8px #0000001A',
    color: '#344054',
    backdropFilter: 'blur(32px)',
    backgroundColor: '#fff',
    borderRadius: '10px',
    fontWeight: '500',
    cursor: 'pointer',
  },
}));

const AnchorElTooltips = (props: AnchorElTooltipType) => {
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <TooltipStyle
      title={props.title}
      placement={props.placement}
      slotProps={{
        popper: {
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current!.getBoundingClientRect().y,
                0,
                0,
              );
            },
          },
        },
      }}
    >
      <Box ref={areaRef} onMouseMove={handleMouseMove}>
        {props.children}
      </Box>
    </TooltipStyle>
  );
};

export default React.memo(AnchorElTooltips);
