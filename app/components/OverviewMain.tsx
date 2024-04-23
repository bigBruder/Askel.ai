import { FC } from 'react';

export const OverviewMain: FC = () => {
  return (
    <main className="p-6 grow flex flex-col bg-dashboard bg-no-repeat bg-right">
      <div className="mx-auto flex flex-col gap-4">
        <div className="w-[833px] py-6 flex bg-[#12121a] rounded-lg">
          <div className="grow flex flex-col items-center gap-[10px] border-r border-r-[#ffffff33]">
            <div className="flex gap-1 ">
              <svg className="w-[18px] h-[18px] ">
                <use xlinkHref="/icons/sprite.svg#playlist-add-check" />
              </svg>
              <p className=" text-xs/[18px] text-[#ffffff99]">Process Completion Time</p>
            </div>
            <p className=" text-[26px]/[20px] font-semibold">1h 22m 10s</p>
            <span className=" flex items-center fill-[#2ac670] text-[#2ac670]">
              <svg className="w-[14px] h-[14px]">
                <use xlinkHref="/icons/sprite.svg#play-fill" />
              </svg>
              %10
            </span>
          </div>
          <div className="grow  flex flex-col items-center gap-[10px]">
            <div className="flex gap-1 ">
              <svg className="w-[18px] h-[18px]">
                <use xlinkHref="/icons/sprite.svg#time" />
              </svg>
              <p className="text-xs/[18px] text-[#ffffff99]">Total time saved</p>
            </div>
            <p className=" text-[26px]/[20px] font-semibold">108h 41m 28s</p>
          </div>
        </div>
      </div>
    </main>
  );
};
