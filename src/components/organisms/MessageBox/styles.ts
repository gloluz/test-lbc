import styled, { css } from 'styled-components';

import { COLORS, MEDIA } from '../../../constants/theme';

interface BoxProps {
  isOpen: boolean;
}

export const Box = styled.div<BoxProps>`
  position: fixed;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.14);
  transform: translateY(0);
  transition: all 0.3s ease-in-out;

  ${MEDIA.MAX.s} {
    top: 0;
    right: 0;
    left: 0;
  }

  ${MEDIA.MIN.s} {
    border-radius: 10px 10px 0 0;
    max-height: calc(100% - 20px);
    height: 500px;
    width: 326px;
    right: 30px;
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: translateY(calc(100% - 60px));
    `}
`;

export const TopBox = styled.div<BoxProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 16px 26px;
  font-size: 20px;
  color: ${COLORS.white};
  background-color: ${COLORS.orange};

  svg {
    transition: all 0.3s ease-in-out;
    transition-delay: 0.2s;
    fill: ${COLORS.white};
    cursor: pointer;

    ${({ isOpen }) =>
      !isOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

export const ContentBox = styled.div`
  padding: 18px;
  overflow-y: auto;
  flex: 1;
  background-color: ${COLORS.white};
`;

export const BottomBox = styled.div`
  display: flex;
  padding: 6px 0 12px 12px;
  background: ${COLORS.white};
`;
