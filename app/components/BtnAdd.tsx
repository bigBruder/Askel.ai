import { FC } from 'react';
import { LuPlus } from 'react-icons/lu';

import { BtnAddProps } from '~/types/props';

export const BtnAdd: FC<BtnAddProps> = ({ handler }) => {
  return (
    <button
      onClick={handler}
      type="submit"
      className="w-6 h-6 flex items-center justify-center bg-[#000000] rounded-lg border-2 border-[#506182]"
    >
      <LuPlus className="text-[#128c7e]" />
    </button>
  );
};
