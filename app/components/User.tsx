import { FC } from 'react';

import { IoPersonCircleOutline } from 'react-icons/io5';

export const User: FC = () => {
  return (
    <div className="ml-[6px] mt-auto flex justify-between">
      <div className="flex gap-2 items-center">
        <IoPersonCircleOutline className=" w-8 h-8 bg-white text-black rounded-full " />
        <div>
          <p className="font-medium text-[13px]">User Name</p>
          <p className="text-[10px] text-[#5d6983]">User status</p>
        </div>
      </div>
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center hover:text-activeColor focus:text-activeColor animate_icons"
      >
        <svg className="w-8 h-8 fill-[#5d6983] hover:fill-[#007aff] focus:fill-[#007aff] transition-colors">
          <use xlinkHref="/icons/sprite.svg#setting" />
        </svg>
      </button>
    </div>
  );
};
