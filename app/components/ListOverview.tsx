import { FC } from 'react';

import { ListOverviewProps } from '~/types/props';
import { ItemOverview } from './ItemOverview';

export const ListOverview: FC<ListOverviewProps> = ({ titles }) => {
  return (
    <ul className="flex flex-col">
      {titles.map(item => (
        <ItemOverview key={item.id} item={item} />
      ))}
    </ul>
  );
};
