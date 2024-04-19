import { FC } from 'react';
import { IoPersonCircleOutline, IoSettingsSharp } from 'react-icons/io5';
import { MdArrowBack } from 'react-icons/md';
import { ListSideBar } from './ListSideBar';
import { Titles } from '~/routes/dashboard';

export const SideBar: FC<{ titles: Titles[] }> = ({ titles }) => {
  return (
    <aside className="w-[320px] h-screen p-3  flex flex-col bg-aside">
      {/* logo */}
      <div className=" my-5 flex gap-2 items-center">
        <img src="/icons/sidebar-logo.svg" alt="logo" />
        <p className="text-[#5d6983]">askel.ai</p>
      </div>
      {/* process */}

      <button
        type="button"
        className="px-4 py-3 flex items-center gap-6 text-[#5d6983] hover:text-[#007aff] transition-colors duration-300"
      >
        <MdArrowBack className="w-5 h-5" />
        <span className="text-xs font-bold text-white ">Back</span>
      </button>
      <ListSideBar titles={titles} />
      {/* user */}
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
          className="w-8 h-8 flex items-center justify-center hover:text-[#007aff] animate_icons"
        >
          <IoSettingsSharp className=" w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};
