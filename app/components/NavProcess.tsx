import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { FC } from 'react';

export const NavProcess: FC = () => {
  const pathName = useLocation().pathname;
  return (
    <>
      <h2 className="mb-4 text-[22px]/[20px] font-bold ">Invoice reminders</h2>
      <div className="mb-4 flex gap-2">
        <Link
          className={clsx(
            'w-[140px] py-[10px] text-center text-[13px]/[10px] bg-[#12121a] border  rounded-[50px]',
            'hover:bg-[#152721] hover:border-[#07b83f] focus:bg-[#152721] focus:border-[#07b83f] transition-colors duration-300',
            `${
              pathName.includes('history')
                ? 'bg-[#152721]  border-[#07b83f]'
                : 'border-[#12121a]'
            }`
          )}
          to="/dashboard/history"
        >
          Run History
        </Link>
        <Link
          className={clsx(
            'w-[140px] py-[10px] text-center text-[13px]/[10px] bg-[#12121a] border rounded-[50px]',
            'hover:bg-[#152721] hover:border-[#07b83f] focus:bg-[#152721] focus:border-[#07b83f] transition-colors duration-300',
            `${
              pathName.includes('chat')
                ? 'bg-[#152721]  border-[#07b83f]'
                : 'border-[#12121a]'
            }`
          )}
          to="/dashboard/chat"
        >
          View and Modify
        </Link>
        <Link
          className={clsx(
            'w-[140px] py-[10px] text-center text-[13px]/[10px] bg-[#12121a] border rounded-[50px]',
            'hover:bg-[#152721] hover:border-[#07b83f] focus:bg-[#152721] focus:border-[#07b83f] transition-colors duration-300',
            `${
              pathName.includes('files')
                ? 'bg-[#152721]  border-[#07b83f]'
                : 'border-[#12121a]'
            }`
          )}
          to="/dashboard/files"
        >
          Files
        </Link>
      </div>
    </>
  );
};
