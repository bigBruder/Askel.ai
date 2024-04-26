import { FC } from 'react';
import { ItemOverview } from './ItemOverview';
import { ListOverviewProps } from '~/types/props';

export const ListOverview: FC<ListOverviewProps> = ({ titles }) => {
  return (
    <ul className="flex flex-col">
      {titles.map(item => (
        <ItemOverview key={item.id} item={item} />
      ))}
    </ul>
  );
};
