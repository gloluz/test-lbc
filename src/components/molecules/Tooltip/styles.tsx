import styled, { css } from 'styled-components';

import { COLORS } from '../../../constants/theme';

export const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

interface StyledTooltipEffectProps {
  isHovered?: boolean;
}

export const StyledTooltipEffect = styled.div<StyledTooltipEffectProps>`
  position: absolute;
  top: calc(-100% - 8px);
  z-index: 10;
  margin-top: 10px;
  transition: all 0.3s ease;
  opacity: 0;

  ${(props) =>
    props.isHovered &&
    css`
      margin-top: 0px;
      opacity: 1;
    `}
`;

export const StyledTooltip = styled.div`
  padding: 5px 10px;
  border-radius: 4px;
  background: ${COLORS.black};
  color: ${COLORS.white};
  font-size: 14px;
  white-space: nowrap;

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 0;
    width: 0;
    border: 6px solid transparent;
    border-top-color: ${COLORS.black};
    left: calc(50% - 6px);
    bottom: -12px;
  }
`;
