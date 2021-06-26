/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import Tooltip from '../../components/molecules/Tooltip';
import InputGroup from '../../components/organisms/InputGroup';
import Button from '../../components/molecules/Button';
import Checkbox from '../../components/molecules/Checkbox';
import Input from '../../components/molecules/Input';
import { Message as MessageType } from '../../types/entities';
import { ReactComponent as SendIcon } from '../../assets/svg/send.svg';
import { ReactComponent as WorldIcon } from '../../assets/svg/world.svg';
import messageApi from '../../services/messageApi';

import { StyledForm, ButtonContainer } from './styles';

type Setter<T extends unknown> = (param: T) => void;

interface FormProps {
  setMessages: Setter<MessageType[]>;
  setError: Setter<string>;
}

const Form = ({ setMessages, setError }: PropsWithChildren<FormProps>) => {
  const { register, handleSubmit, reset, watch } = useForm<MessageType>();

  const isCheckboxPublic = watch('isPrivate');
  const changePrivacyLabel = isCheckboxPublic ? 'rendre public' : 'rendre privé';

  const post = async (data: MessageType) => {
    try {
      const result = await messageApi.postAndList(data);
      setMessages(result);
    } catch (e) {
      setError('Oops, une erreur inatendue est survenue. Veuillez réessayer plus tard');
    }
  };

  const onSubmit = useCallback((data: MessageType) => {
    post(data);
    reset();
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <InputGroup>
        <Input
          {...register('text', {
            validate: (value) => !!value.trim(),
          })}
          placeholder="Aa"
        />

        <Tooltip text={changePrivacyLabel}>
          <Checkbox
            {...register('isPrivate')}
            icon={<WorldIcon />}
            aria-label={changePrivacyLabel}
          />
        </Tooltip>
      </InputGroup>

      <ButtonContainer>
        <Button type="submit" variant="secondary" aria-label="Envoyer">
          <SendIcon />
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
};

export default Form;
