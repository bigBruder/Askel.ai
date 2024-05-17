import { FC } from 'react';
import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';

import { NavDash } from './NavDash';
import { User } from './User';

export const SideBar: FC<{ toggleIsOpen: () => void }> = ({ toggleIsOpen }) => {
  const pathName = useLocation().pathname;

  return (
    <aside
      className={clsx(
        ' p-3 flex flex-col bg-[#0000003f]',
        `${pathName === '/dashboard/chat' ? 'w-[320px]' : 'w-[250px]'}`
      )}
    >
      <Link to="/dashboard" className=" my-5 flex gap-2 items-center ">
        <img src="/icons/sidebar-logo.svg" alt="logo" />
        <p className="text-[#5d6983]">askel.ai</p>
      </Link>
      <button
        onClick={toggleIsOpen}
        type="button"
        className="w-[208px] h-[39px] mb-7 flex items-center justify-center gap-2 fill-[#07B83F] bg-[#051423] rounded border border-[#51BC51]"
      >
        <svg width={18} height={18}>
          <use xlinkHref="/icons/sprite.svg#plus" />
        </svg>
        <p>New automation</p>
      </button>
      <NavDash />
      <User />
    </aside>
  );
};
