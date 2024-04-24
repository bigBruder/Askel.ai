import clsx from 'clsx';
import { FC } from 'react';
type ChartProps = {
  mockProcessed: Array<{
    day: string;
    value: number;
  }>;
  mockRate: Array<{
    day: string;
    value: number;
  }>;
};
export const Chart: FC<ChartProps> = ({ mockProcessed, mockRate }) => {
  const isMore100 =
    mockProcessed.some(el => el.value > 100) || mockRate.some(el => el.value > 100);
  return (
    <div className="flex gap-4">
      <div className=" w-[408px] p-5 bg-[#12121ae5] rounded-lg flex flex-col justify-end">
        <p className="mb-3 text-[#ffffff99] text-xs/5 font-medium">
          Volume of events processed
        </p>

        <div className="flex flex-col items-end gap-[33px] justify-between ">
          {isMore100 && (
            <div className=" flex gap-[10px] items-center">
              <p className="text-[#ffffff99] text-xs">150</p>
              <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
            </div>
          )}
          <div className=" flex gap-[10px] items-center">
            <p className="text-[#ffffff99] text-xs">100</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
          <div className=" flex gap-[10px]  items-center">
            <p className="text-[#ffffff99] text-xs">50</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
          <div className=" flex gap-[10px]  items-center">
            <p className="text-[#ffffff99] text-xs">0</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
        </div>
        <ul className="ml-14 flex gap-8  text-xs/[18px] text-[#ffffff4d]">
          {mockProcessed.map(el => (
            <li key={el.day} className="flex flex-col items-center relative bottom-1">
              <div className={clsx('absolute bottom-[22px] z-10')}>
                {el.value > 0 && (
                  <div className="w-4 h-[6px] bg-[#007aff] rounded-t-sm absolute top-[-4px] z-[-10]"></div>
                )}
                <div
                  style={{ height: el.value - 6 }}
                  className="w-4 bg-gradient-to-b from-[#0033ff] to-[#007aff40] rounded-t-sm drop-shadow-[0_2px_12px_#007aff]"
                ></div>
              </div>

              <p>{el.day}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-[408px] p-5 bg-[#12121a] rounded-lg flex flex-col justify-end">
        <p className="mb-3 text-[#ffffff99] text-xs/5 font-medium">
          Error and success rate
        </p>
        <div className="mt-auto flex flex-col items-end gap-[33px] justify-between ">
          {isMore100 && (
            <div className=" flex gap-[10px] items-center">
              <p className="text-[#ffffff99] text-xs">150</p>
              <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
            </div>
          )}
          <div className=" flex gap-[10px] items-center">
            <p className="text-[#ffffff99] text-xs">100</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
          <div className=" flex gap-[10px]  items-center">
            <p className="text-[#ffffff99] text-xs">50</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
          <div className=" flex gap-[10px]  items-center">
            <p className="text-[#ffffff99] text-xs">0</p>
            <div className="h-[1px] w-[322px] bg-[#ffffff0f]"></div>
          </div>
        </div>
        <ul className="ml-14 flex gap-8  text-xs/[18px] text-[#ffffff4d]">
          {mockRate.map(el => (
            <li key={el.day} className="flex flex-col items-center relative bottom-1">
              <div className={clsx('absolute bottom-[22px] z-10')}>
                {el.value > 0 && (
                  <div className="w-4 h-[6px] bg-[#07b83f] rounded-t-sm absolute top-[-4px] z-[-10]"></div>
                )}
                <div
                  style={{ height: el.value - 6 }}
                  className="w-4 bg-gradient-to-b from-[#0f7e32] to-[#00561b3f] rounded-t-sm drop-shadow-[0_2px_12px_#65d46e7f]"
                ></div>
              </div>

              <p>{el.day}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
