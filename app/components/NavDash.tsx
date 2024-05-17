import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { FC } from 'react';

export const NavDash: FC = () => {
  const pathname = useLocation().pathname;
  return (
    <nav>
      <ul className="flex flex-col gap-[10px]">
        <li>
          <Link
            className={clsx(
              'p-3 flex gap-5 items-center rounded  text-[#5d6983] stroke-[#07B83F] fill-[#07B83F]',
              'hover:text-white  hover:bg-[#152721] focus:text-white  focus:bg-[#152721] transition-colors duration-300',
              ` ${
                (pathname === '/dashboard' || pathname === '/dashboard/') &&
                'bg-[#152721] text-white'
              }`
            )}
            to="/dashboard"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#automations" />
            </svg>
            Automations
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              'p-3 flex gap-5 items-center rounded text-[#5d6983] stroke-[#07B83F] fill-[#07B83F]',
              'hover:text-white  hover:bg-[#152721] focus:text-white  focus:bg-[#152721] transition-colors duration-300',
              ` ${pathname.includes('users') && 'bg-[#152721] text-white'}`
            )}
            to="/dashboard/users"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#users" />
            </svg>
            Users
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              'p-3 flex gap-5 items-center rounded text-[#5d6983] stroke-[#07B83F] fill-[#07B83F]',
              'hover:text-white  hover:bg-[#152721] focus:text-white  focus:bg-[#152721] transition-colors duration-300',
              ` ${pathname.includes('tools') && 'bg-[#152721] text-white'}`
            )}
            to="/dashboard/tools"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#tools" />
            </svg>
            Tools
          </Link>
        </li>
      </ul>
    </nav>
  );
};
