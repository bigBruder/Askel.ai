import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useIsOpen } from '~/hooks/useIsOpen';
import { ItemOverviewProps } from '~/types/props';

export const ItemOverview: FC<ItemOverviewProps> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <li key={item.id}>
      <div className="flex justify-between mb-1 py-3 px-4 bg-[#1f1f28] rounded">
        <Link
          to="/dashboard/chat"
          className=" max-w-[160px] text-xs text-[#5d6983] hover:text-[#007AFF] transition-colors duration-300"
        >
          {item.title}
        </Link>
        <button type="button" className="w-5 h-5" onClick={toggleIsOpen}>
          <svg
            className={clsx`w-5 h-5  ml-auto fill-[#5D6983] animate_icons
          ${isOpen && 'rotate-[-180deg] fill-[#007aff]'}`}
          >
            <use xlinkHref="/icons/sprite.svg#arrow-down" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {item.description.map((el, i) => (
              <li key={i} className="p-2">
                <p
                  className={clsx`text-[#5d6983] text-[10px]/[14px] ${
                    i === 1 ? 'text-white' : 'text-[#5d6983]'
                  }`}
                >
                  {el}
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
