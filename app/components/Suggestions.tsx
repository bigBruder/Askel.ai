import { FC, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { suggestion } from '~/data/mockData';

export const Suggestions: FC = () => {
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLLIElement).scrollTo({
        left: -650,
        behavior: 'smooth',
      });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLLIElement).scrollTo({
        left: 650,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=" max-w-[650px] flex gap-2 items-center translate-x-1">
      <button
        onClick={scrollLeft}
        type="button"
        className="w-6 h-6 text-white hover:text-activeColor focus:text-activeColor animate_icons"
      >
        <MdKeyboardArrowLeft className="w-6 h-6" />
      </button>
      <ul
        ref={containerRef}
        className="w-[600px] flex gap-[6px] justify-around hidden-scrollbar overflow-x-auto"
      >
        {suggestion.map(el => (
          <li
            key={el.id}
            className="max-w-fit px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg"
          >
            <span className="text-xs/6 text-white whitespace-nowrap">{el.value}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollRight}
        type="button"
        className="w-6 h-6 text-white hover:text-activeColor focus:text-activeColor animate_icons"
      >
        <MdKeyboardArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};
