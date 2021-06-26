import { Message } from '../types/entities';

import { idCreator } from './idCreator';

const ids = idCreator();

let messages: Message[] = [
  {
    id: ids.next().value,
    text: 'Bonjour, pensez-vous que Gloria ferait une bonne recrue ?',
    isPrivate: false,
    author: 'me',
  },
  {
    id: ids.next().value,
    text: 'Je pense que oui',
    isPrivate: false,
    author: 'lbc',
  },
  {
    id: ids.next().value,
    text: "Mais ce n'est pas très objectif",
    isPrivate: false,
    author: 'lbc',
  },
];

export default {
  getAll(): Promise<Message[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(messages), 500);
    });
  },

  postAndList({ text, isPrivate }: Omit<Message, 'id'>): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      if (!text) {
        reject(new Error('text is required'));
      }

      if (typeof isPrivate !== 'boolean') {
        reject(new Error('private is required'));
      }

      const message = {
        id: ids.next().value,
        text,
        isPrivate,
        author: 'me',
      };

      messages = [...messages, message];

      setTimeout(() => resolve(messages), 500);
    });
  },
};
