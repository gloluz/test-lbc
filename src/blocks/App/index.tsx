import React, { useEffect, useState } from 'react';

import Flex from '../../components/atoms/Flex';
import Loader from '../../components/atoms/Loader';
import Message from '../../components/molecules/Message';
import Container from '../../components/atoms/Container';
import MessageBox from '../../components/organisms/MessageBox';
import messageApi from '../../services/messageApi';
import Intro from '../Intro';
import { Message as MessageType } from '../../types/entities';
import Form from '../Form';
import { ReactComponent as ErrorIcon } from '../../assets/svg/cancel.svg';

import { GlobalStyle, ErrorMessage } from './styles';

const App = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const getMessages = async () => {
    try {
      const result = await messageApi.getAll();
      setMessages(result);
    } catch (e) {
      setError('Oops, une erreur inatendue est survenue. Veuillez réessayer plus tard');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getMessages();
  }, []);

  return (
    <>
      <GlobalStyle />

      <Container>
        <Intro />
      </Container>

      <MessageBox bottomRender={() => <Form setMessages={setMessages} setError={setError} />}>
        {!error ? (
          <>
            {!!isLoading && (
              <Flex justify="center" align="center" style={{ height: '300px' }}>
                <Loader />
              </Flex>
            )}

            {messages.map((message) => (
              <Message message={message} />
            ))}
          </>
        ) : (
          <Flex justify="center" align="center" direction="column" style={{ height: '300px' }}>
            <ErrorIcon />
            <ErrorMessage>{error}</ErrorMessage>
          </Flex>
        )}
      </MessageBox>
    </>
  );
};

export default App;
