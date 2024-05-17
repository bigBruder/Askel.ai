import clsx from 'clsx';
import { FC } from 'react';
import { EnumStatusOverview } from '~/types/enums';

import { RateProps } from '~/types/props';

export const Rate: FC<RateProps> = ({ rate, status }) => {
  let bgColor = '#ED654C';
  switch (status) {
    case EnumStatusOverview.running:
      bgColor = '#22A447';
      break;
    case EnumStatusOverview.auditMode:
      bgColor = '#FFC145';

      break;
    case EnumStatusOverview.needAttention:
      bgColor = '#ED654C';
      break;
  }

  return (
    <div
      style={{ width: `${rate}%`, backgroundColor: bgColor }}
      className={clsx('h-1 absolute z-10 rounded-xl ')}
    ></div>
  );
};
