import { FC } from 'react';
import { useIsOpen } from '~/hooks/useIsOpen';
import { AnimatePresence, motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import { Titles } from '~/routes/dashboard';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const ItemSideBar: FC<{ item: Titles }> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <li>
      <div
        className={clsx`flex px-4 py-3  rounded animate_icons cursor-pointer
       ${isOpen ? 'bg-[#07b83f19]' : 'bg-transparent'}`}
      >
        <img src="/icons/frame.svg" alt="" className="mr-[22px] w-5 h-5" />
        <h3
          className={clsx` max-w-[160px] text-xs font-bold animate_icons
        ${isOpen ? 'text-white' : 'text-[#5d6983]'}`}
        >
          {item.title}
        </h3>
        <button
          type="button"
          onClick={toggleIsOpen}
          className="w-5 ml-auto flex  text-[#5D6983] hover:text-[#007aff] animate_icons "
        >
          <MdKeyboardArrowDown
            className={clsx` w-5 h-5 animate_icons
          ${isOpen && 'rotate-[-180deg] text-[#007aff]'}`}
          />
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
