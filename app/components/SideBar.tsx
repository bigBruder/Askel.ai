import { FC, ReactNode } from 'react';
import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';

export const SideBar: FC<{ children: ReactNode }> = ({ children }) => {
  const pathName = useLocation().pathname;

  return (
    <aside
      className={clsx`${
        pathName === '/dashboard/chat' ? 'w-[320px]' : 'w-[250px]'
      } h-screen p-3  flex flex-col bg-gradient-to-b from-[#12121A] to-[#ffffff3d])`}
    >
      <Link to="/dashboard" className=" my-5 flex gap-2 items-center ">
        <img src="/icons/sidebar-logo.svg" alt="logo" />
        <p className="text-[#5d6983]">askel.ai</p>
      </Link>
      {children}
    </aside>
  );
};
