import styled from 'styled-components';

import { COLORS } from '../../constants/theme';

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

export const Link = styled.a`
  color: ${COLORS.orange};
`;

export const Introduction = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
`;
