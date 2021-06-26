import React, { PropsWithChildren, ReactNode, useState, useEffect } from 'react';

import { useHover } from '../../../hooks/useHover';

import { TooltipWrapper, StyledTooltip, StyledTooltipEffect } from './styles';

export interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: PropsWithChildren<TooltipProps>) => {
  const [putInDom, setPuInDom] = useState(false);
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      setPuInDom(true);
    } else {
      timeout = setTimeout(() => setPuInDom(false), 300);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isHovered]);

  return (
    <TooltipWrapper ref={hoverRef}>
      <div style={{ position: 'relative', zIndex: 11 }}>{children}</div>

      <StyledTooltipEffect isHovered={isHovered}>
        {putInDom && <StyledTooltip>{text}</StyledTooltip>}
      </StyledTooltipEffect>
    </TooltipWrapper>
  );
};

export default Tooltip;
