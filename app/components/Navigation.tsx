import { Link, useLocation } from '@remix-run/react';
import clsx from 'clsx';
import { FC } from 'react';

export const Navigation: FC = () => {
  const pathname = useLocation().pathname;
  return (
    <nav>
      <ul className="flex flex-col gap-[10px]">
        <li>
          <Link
            className={clsx(
              'py-1 px-4 flex gap-5 items-center text-[#5d6983] stroke-[#5d6983] fill-[#5d6983]',
              'hover:text-white hover:stroke-[#007AFF] hover:fill-[#007AFF] hover:bg-[#1f1f28] transition-colors duration-300',
              ` ${pathname === '/dashboard' && 'activeLink'}`
            )}
            to="/dashboard"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#graph" />
            </svg>
            Overview
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              'py-1 px-4 flex gap-5 items-center text-[#5d6983] stroke-[#5d6983] fill-[#5d6983]',
              'hover:text-white hover:stroke-[#007AFF] hover:fill-[#007AFF] hover:bg-[#1f1f28] transition-colors duration-300',
              ` ${pathname === '/dashboard/automations' && 'activeLink'}`
            )}
            to="/dashboard/automations"
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
              'py-1 px-4 flex gap-5 items-center text-[#5d6983] stroke-[#5d6983] fill-[#5d6983]',
              'hover:text-white hover:stroke-[#007AFF] hover:fill-[#007AFF] hover:bg-[#1f1f28] transition-colors duration-300',
              ` ${pathname === '/dashboard/metrics' && 'activeLink'}`
            )}
            to="/dashboard/metrics"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#metrics" />
            </svg>
            Metrics
          </Link>
        </li>
        <li>
          <Link
            className={clsx(
              'py-1 px-4 flex gap-5 items-center text-[#5d6983] stroke-[#5d6983] fill-[#5d6983]',
              'hover:text-white hover:stroke-[#007AFF] hover:fill-[#007AFF] hover:bg-[#1f1f28] transition-colors duration-300',
              ` ${pathname === '/dashboard/users' && 'activeLink'}`
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
              'py-1 px-4 flex gap-5 items-center text-[#5d6983] stroke-[#5d6983] fill-[#5d6983]',
              'hover:text-white hover:stroke-[#007AFF] hover:fill-[#007AFF] hover:bg-[#1f1f28] transition-colors duration-300',
              ` ${pathname === '/dashboard/integrations' && 'activeLink'}`
            )}
            to="/dashboard/integrations"
          >
            <svg className="w-5 h-5">
              <use xlinkHref="/icons/sprite.svg#integrations" />
            </svg>
            Integrations
          </Link>
        </li>
      </ul>
    </nav>
  );
};
