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
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.75098 15.6946L4.75098 4.30542"
            stroke="#74D71E"
            strokeWidth={isOpen ? '2' : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.75052 15.6944L16.1396 15.6944"
            stroke="#74D71E"
            strokeWidth={isOpen ? '2' : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.30859 11.0896C8.7937 9.73316 9.85894 8.95757 11.0602 7.88062L11.8057 10.8009L15.0542 8.06259"
            stroke="#74D71E"
            strokeWidth={isOpen ? '2' : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3
          className={clsx` max-w-[160px] text-xs font-bold animate_icons
        ${isOpen ? 'text-white' : 'text-[#5d6983]'}`}
        >
          {item.title}
        </h3>
        <button
          type="button"
          onClick={toggleIsOpen}
          className="w-5 ml-auto flex  text-[#5D6983] hover:text-activeColor animate_icons "
        >
          <MdKeyboardArrowDown
            className={clsx` w-5 h-5 animate_icons
          ${isOpen && 'rotate-[-180deg] text-activeColor'}`}
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
