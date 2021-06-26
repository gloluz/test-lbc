/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, ReactNode, useState, useRef, useEffect } from 'react';

import { ReactComponent as DownChevron } from '../../../assets/svg/down-chevron.svg';

import { Box, ContentBox, TopBox, BottomBox } from './styles';

interface MessageBoxProps {
  bottomRender: () => ReactNode;
}

const MessageBox = ({ children, bottomRender }: PropsWithChildren<MessageBoxProps>) => {
  const [isOpen, setIsOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scroll({
        top: contentRef.current.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [children]);

  return (
    <Box isOpen={isOpen}>
      <TopBox isOpen={isOpen}>
        <span>Mes messages</span>
        <div
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'fermer' : 'ouvrir'}
          role="button"
          tabIndex={0}
        >
          <DownChevron />
        </div>
      </TopBox>
      <ContentBox ref={contentRef}>{children}</ContentBox>
      <BottomBox>{!!bottomRender && bottomRender()}</BottomBox>
    </Box>
  );
};

export default MessageBox;
