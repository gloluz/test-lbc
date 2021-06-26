import styled from 'styled-components';

import { COLORS } from '../../../constants/theme';

const Input = styled.input`
  padding: 10px 18px;
  border: none;
  border-radius: 50px;
  background-color: ${COLORS.grey.lightest};
  outline: none;
  transition: all 0.3s ease;
  flex: 1;
`;

export default Input;
