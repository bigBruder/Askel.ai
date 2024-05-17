import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { ItemChatProps } from '~/types/props';
import { useIsOpen } from '~/hooks/useIsOpen';

export const ItemChat: FC<ItemChatProps> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <li className="bg-[#14141bcc] rounded">
      <button
        type="button"
        onClick={toggleIsOpen}
        className={clsx(
          'flex w-full px-4 py-3 animate_icons hover:text-white',
          `${isOpen ? 'text-white' : 'bg-transparent text-[#5d6983]'}`
        )}
      >
        <svg className="mr-[22px] w-5 h-5 stroke-[#74D71E]">
          <use xlinkHref="/icons/sprite.svg#graph" />
        </svg>
        <span className="text-start text-xs font-bold transition-color duration-300">
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
            className="flex flex-col "
          >
            {item.description.map((el, i) => (
              <li key={i} className=" px-14 py-3">
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
