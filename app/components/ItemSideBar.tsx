import { FC } from 'react';
import { useIsOpen } from '~/hooks/useIsOpen';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import { Titles } from '~/routes/dashboard.chat';

export const ItemSideBar: FC<{ item: Titles }> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <li>
      <button
        type="button"
        onClick={toggleIsOpen}
        className={clsx`flex w-full px-4 py-3 rounded animate_icons ${
          isOpen ? 'bg-[#07b83f19]' : 'bg-transparent'
        }`}
      >
        <svg className="mr-[22px] w-5 h-5 stroke-[#74D71E]">
          <use xlinkHref="/icons/sprite.svg#graph" />
        </svg>
        <span
          className={clsx` max-w-[155px] text-start text-xs font-bold animate_icons
        ${isOpen ? 'text-white' : 'text-[#5d6983]'}`}
        >
          {item.title}
        </span>
        <svg
          className={clsx`w-5 h-5  ml-auto fill-[#5D6983] animate_icons
          ${isOpen && 'rotate-[-180deg] fill-[#007aff]'}`}
        >
          <use xlinkHref="/icons/sprite.svg#arrow-down" />
        </svg>
      </button>
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
              <li key={nanoid()} className="pt-3 pr-[22px] pb-3 pl-[57px]">
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
