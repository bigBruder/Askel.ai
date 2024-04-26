import { FC } from 'react';
import { StatusOverview } from './StatusOverview';
import { Rate } from './Rate';
import { Link } from '@remix-run/react';
import { StatisticsProps } from '~/types/props';

export const Statistics: FC<StatisticsProps> = ({ mockOverviews }) => {
  return (
    <div className=" py-7 px-9 bg-[#12121ae5] rounded-lg">
      <p className="mb-8 font-bold text-lg/5">Overview</p>
      <ul className="flex flex-col gap-3">
        <li className="flex">
          <div className="flex-[1]">
            <div className="flex gap-1">
              <span className="text-[11px] text-[#ffffff4d] uppercase">Title</span>
              <svg className="w-4 h-4">
                <use xlinkHref="/icons/sprite.svg#arrow-down" />
              </svg>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="flex gap-1">
              <span className="text-[11px] text-[#ffffff4d] uppercase">Status</span>
              <svg className="w-4 h-4">
                <use xlinkHref="/icons/sprite.svg#arrow-down" />
              </svg>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="flex gap-1">
              <span className="text-[11px] text-[#ffffff4d] uppercase">Time</span>
              <svg className="w-4 h-4">
                <use xlinkHref="/icons/sprite.svg#arrow-down" />
              </svg>
            </div>
          </div>
          <div className="flex-[1]">
            <div className="flex gap-1">
              <span className="text-[11px] text-[#ffffff4d] uppercase">Success rate</span>
              <svg className="w-4 h-4">
                <use xlinkHref="/icons/sprite.svg#arrow-down" />
              </svg>
            </div>
          </div>
        </li>
        {mockOverviews.map(el => (
          <li key={el.id} className="flex ">
            <Link to={`/dashboard/${el.id}`} className="flex-[1] p-1 hover:text-[#007AFF] transition-colors duration-300">
              {el.title}
            </Link>
            <StatusOverview status={el.status} text={el.status} />
            <p className="flex-[1]">{el.time}</p>
            <div className="flex-[1]">
              <div className="flex items-center justify-between">
                <p className="text-[#07b83f]">{el.success_rate}%</p>
                <div className="w-[97px] h-1 bg-[#39394b] rounded-xl relative">
                  <Rate rate={el.success_rate} status={el.status} />
                </div>
                <p>74%</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
