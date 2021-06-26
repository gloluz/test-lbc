import styled, { css } from 'styled-components';

import { COLORS } from '../../../constants/theme';

interface MessageProps {
  isSendByMe: boolean;
}

export const Text = styled.div`
  max-width: 220px;
  margin-bottom: 4px;
  padding: 8px 16px;
  word-break: break-word;
  background-color: ${COLORS.grey.light};
  border-radius: 10px 10px 10px 0;
`;

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ isSendByMe }) =>
    isSendByMe &&
    css`
      align-items: flex-end;

      ${Text} {
        background-color: ${COLORS.blue.light};
        border-radius: 10px 10px 0 10px;
      }
    `}
`;

export const Privacy = styled.div`
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 400;
  color: ${COLORS.grey.base};
`;
