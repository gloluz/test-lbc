import React from 'react';

import { Message as MessageType } from '../../../types/entities';

import { MessageContainer, Text, Privacy } from './styles';

interface BubbleProps {
  message: MessageType;
}

const Message = ({ message }: BubbleProps) => (
  <MessageContainer key={message.id} isSendByMe={message.author === 'me'}>
    <Text>{message.text}</Text>
    <Privacy>{message.isPrivate ? 'privé' : 'public'}</Privacy>
  </MessageContainer>
);

export default Message;
