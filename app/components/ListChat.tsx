import { FC } from 'react';
import { ItemChat } from './ItemChat';
import { ListChatProps } from '~/types/props';

export const ListChat: FC<ListChatProps> = ({ titles }) => {
  return (
    <ul className=" flex flex-col">
      {titles && titles.map(el => <ItemChat key={el.id} item={el} />)}
    </ul>
  );
};
