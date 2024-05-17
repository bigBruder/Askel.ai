import { FC } from 'react';

import { ListChatProps } from '~/types/props';
import { ItemChat } from './ItemChat';

export const ListChat: FC<ListChatProps> = ({ titles }) => {
  return (
    <ul className="w-[360px] max-h-[800px] flex flex-col gap-2 overflow-y-auto">
      {titles && titles.map(el => <ItemChat key={el.id} item={el} />)}
    </ul>
  );
};
