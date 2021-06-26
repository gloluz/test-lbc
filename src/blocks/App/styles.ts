import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from '../../constants/theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    background-color: ${COLORS.blue.light};
  }
`;

export const ErrorMessage = styled.div`
  padding-top: 10px;
  text-align: center;
`;
