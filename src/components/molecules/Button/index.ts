import styled, { css } from 'styled-components';

import { COLORS } from '../../../constants/theme';

type Variant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: Variant;
}

const Button = styled.button<ButtonProps>`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? css`
          background-color: ${COLORS.blue.base};

          svg {
            fill: ${COLORS.white};
          }
        `
      : css`
          background-color: ${COLORS.white};
          color: ${COLORS.blue.base};

          svg {
            fill: ${COLORS.blue.base};
          }
        `}

  &:focus-visible {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${COLORS.black};
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default Button;
