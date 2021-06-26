import styled, { keyframes } from 'styled-components';

import { COLORS } from '../../../constants/theme';

const loaderAnim = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.6)
  }
  0% {
    transform: scale(1) 
  }
`;

interface DotProps {
  dotDelay: number;
}

export const Dot = styled.div<DotProps>`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: ${COLORS.orange};
  animation: ${loaderAnim} 0.8s ease-in-out infinite;
  animation-delay: ${(props) => props.dotDelay}s;
`;

export const Dots = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 30px;
`;
