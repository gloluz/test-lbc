import styled from 'styled-components';

import { COLORS } from '../../../constants/theme';
import Input from '../../molecules/Input';

const StyledInput = styled(Input)``;

export const Group = styled.div`
  position: relative;
  flex: 1;
  display: inline-flex;
  align-items: center;
  padding-right: 10px;
  border-radius: 50px;
  background-color: ${COLORS.grey.lightest};

  &:focus {
    box-shadow: 0 0 0 2px ${COLORS.black};
  }

  ${StyledInput} {
    flex: 1;
    background: none;

    &:focus {
      box-shadow: none;
    }
  }
`;
