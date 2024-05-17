import { FC } from 'react';
import { Link, useParams } from '@remix-run/react';

import { StatisticsProps } from '~/types/props';
import { StatusOverview } from './StatusOverview';
import { Rate } from './Rate';

export const Statistics: FC<StatisticsProps> = ({ mockOverviews }) => {
  const params = useParams()?.id;
  return (
    <div className="py-6 pl-9 bg-[#12121ae5] rounded-lg h-[320px]">
      <p className="mb-5 font-bold text-lg/5">{params ? 'Run history' : 'Overview'}</p>
      <div className="flex mb-4">
        <button type="button" className="flex-[1] flex ">
          <span className="text-[11px] text-[#ffffff4d] uppercase">
            {params ? 'ID' : 'Title'}
          </span>
          <svg className="w-4 h-4">
            <use xlinkHref="/icons/sprite.svg#arrow-down" />
          </svg>
        </button>
        <button type="button" className="flex-[1] flex ">
          <span className="text-[11px] text-[#ffffff4d] uppercase">Status</span>
          <svg className="w-4 h-4">
            <use xlinkHref="/icons/sprite.svg#arrow-down" />
          </svg>
        </button>
        <button type="button" className="flex-[1] flex ">
          <span className="text-[11px] text-[#ffffff4d] uppercase">Time</span>
          <svg className="w-4 h-4">
            <use xlinkHref="/icons/sprite.svg#arrow-down" />
          </svg>
        </button>
        <button type="button" className="flex-[1] flex ">
          <span className="text-[11px] text-[#ffffff4d] uppercase">Success rate</span>
          <svg className="w-4 h-4">
            <use xlinkHref="/icons/sprite.svg#arrow-down" />
          </svg>
        </button>
      </div>
      <ul className="pr-9 flex flex-col gap-1 h-[75%] overflow-y-auto">
        {mockOverviews.map(el => (
          <li key={el.id} className="flex">
            <Link
              to={`/dashboard/${el.id}`}
              className="flex-[1] py-2 hover:text-[#007AFF] focus:text-[#007AFF] transition-colors duration-300"
            >
              {el.title}
            </Link>
            <StatusOverview status={el.status} text={el.status} />
            <p className="flex-[1] py-2">{el.time}</p>
            <div className="flex-[1] py-2">
              <div className="flex items-center justify-between">
                <p className="text-[#07b83f]">{el.success_rate}%</p>
                <div className="w-[97px] h-1 bg-[#39394b] rounded-xl relative">
                  <Rate rate={el.rate} status={el.status} />
                </div>
                <p>{el.rate}%</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
