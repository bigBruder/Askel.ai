import { FC } from "react";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { ListSideBar } from "./ListSideBar";
import { Titles } from "~/routes/dashboard";

export const SideBar: FC<{titles: Titles[]}> = ({titles}) => {
  return (
    <aside className="w-[250px] flex flex-col h-screen p-4 bg-aside-bg">
      <div className="flex items-center gap-2 ml-2 mb-[41px]">
        <img src="/icons/sidebar-logo.svg" alt="logo" />
        <p className="text-[#5d6983]">askel.ai</p>
      </div>
      <button
        type="button"
        className=" ml-[22px] mb-[14px] flex items-center gap-[25px]"
      >
        <MdArrowBack className=" w-5 h-5 text-[#007aff]" />
        <span className="text-xs text-white">Back</span>
      </button>
      <div className=" relative mb-[17px]">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className=" w-[202px] h-7 ml-2 mb-[17px] pr-5 pl-2 text-sm text-white bg-[#1f1f28] rounded-[3px] border border-solid border-[#242c3b]"
        />
        <IoSearch className=" absolute top-[6px] right-5 text-[#b6bac099] cursor-pointer" />
        <ListSideBar titles={titles} />
      </div>
      <div className="ml-[6px] mt-auto flex justify-between">
        <div className="flex items-center gap-[7px]">
          <IoPersonCircleOutline className=" w-7 h-7 bg-white text-black rounded-full " />
          <div>
            <p className="text-white font-medium text-[13px]">User Name</p>
            <p className="text-[10px] text-[#5d6983]">User status</p>
          </div>
        </div>
        <button type="button">
          <img src="/icons/setting.svg" alt="setting" />]ʼ
        </button>
      </div>
    </aside>
  );
};
