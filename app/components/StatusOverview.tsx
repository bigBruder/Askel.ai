import { FC } from 'react';
import { EnumStatusOverview } from '~/types/enums';
import { StatusOverviewProps } from '~/types/props';

export const StatusOverview: FC<StatusOverviewProps> = ({ status, text }) => {
  let textColor = '';
  let textBgColor = '';

  switch (status) {
    case EnumStatusOverview.running:
      textColor = '#22A447';
      textBgColor = '#213226';

      break;
    case EnumStatusOverview.auditMode:
      textColor = '#FFC145';
      textBgColor = '#3B2B0B';
      break;

    case EnumStatusOverview.needAttention:
      textColor = '#ED654C';
      textBgColor = '#322121';
      break;
  }
  return (
    <div className="flex-[1]">
      <span
        style={{
          color: textColor,
          backgroundColor: textBgColor,
        }}
        className="py-1 px-2 rounded-[20px] uppercase text-[11px] font-bold"
      >
        {text}
      </span>
    </div>
  );
};
