import styled from 'styled-components';

import { COLORS } from '../../../constants/theme';

export const CheckboxIcon = styled.div`
  display: inline-flex;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
    fill: ${COLORS.blue.base};
  }
`;

export const CheckIcon = styled.div`
  transform: scale(0);
  transition: all 0.3s ease;

  svg {
    max-width: 100%;
    max-height: 100%;
    fill: ${COLORS.white};
  }
`;

export const CheckboxDiv = styled.div`
  display: inline-flex;
  width: 16px;
  height: 16px;
  padding: 4px;
  border-radius: 4px;
  background: ${COLORS.grey.lightest};
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  left: 0;
  opacity: 0.01;
  cursor: pointer;

  &:focus-visible ~ ${CheckboxDiv} {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${COLORS.blue.base};
  }

  &:checked ~ ${CheckboxDiv} {
    background: ${COLORS.blue.base};

    ${CheckIcon} {
      transform: scale(1);
    }
  }

  &:focus-visible ~ ${CheckboxIcon} {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${COLORS.blue.base};
  }

  &:checked ~ ${CheckboxIcon} {
    svg {
      fill: ${COLORS.grey.dark};
    }
  }
`;
