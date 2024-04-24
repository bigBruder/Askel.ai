import { FC } from 'react';
import { Chart } from './Chart';

const mockProcessed = [
  { day: 'Sun', value: 0 },
  { day: 'Mon', value: 50 },
  { day: 'Wed', value: 75 },
  { day: 'Thu', value: 100 },
  { day: 'Fri', value: 100 },
  { day: 'Sat', value: 150 },
];
const mockRate = [
  { day: 'Sun', value: 25 },
  { day: 'Mon', value: 50 },
  { day: 'Wed', value: 75 },
  { day: 'Thu', value: 100 },
  { day: 'Fri', value: 100 },
  { day: 'Sat', value: 50 },
];
enum StatusOverview {
  running = 'running',
  audit_mode = 'audit mode',
  need_attention = 'need attention',
}
const mockOverviews = [
  {
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24  11:30',
    success_rate: '',
  },
];
export const OverviewMain: FC = () => {
  return (
    <main className="p-6 grow flex flex-col bg-auth bg-no-repeat bg-top">
      <div className="mx-auto flex flex-col gap-4">
        <div className="w-[833px] py-6 flex bg-[#12121ae5] rounded-lg">
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
        <Chart mockProcessed={mockProcessed} mockRate={mockRate} />
        <div className=" py-7 px-9 bg-[#12121ae5] rounded-lg">
          <p className="mb-8 font-bold text-lg/5">Overview</p>
        </div>
      </div>
    </main>
  );
};
