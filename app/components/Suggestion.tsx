import { FC, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
type test = {
  id: number;
  value: string;
};
const testArr: test[] = [
  { id: 1, value: 'Suggestion' },
  { id: 2, value: 'Example text' },
  { id: 3, value: 'Lorem ipsum dolor sit amet.' },
  { id: 4, value: 'Alias rem aperiam repudiandae?' },
  { id: 5, value: 'Non voluptate sit' },
  { id: 6, value: 'Assumenda sint laboriosam quidem' },
  { id: 4, value: 'Alias rem aperiam repudiandae?' },
  { id: 5, value: 'Non voluptate sit' },
  { id: 6, value: 'Assumenda sint laboriosam quidem' },
];
export const Suggestion: FC = () => {
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
        className="w-6 h-6 text-white hover:text-activeColor animate_icons"
      >
        <MdKeyboardArrowLeft className="w-6 h-6" />
      </button>
      <ul
        ref={containerRef}
        className="w-[600px] flex gap-[6px] justify-around hidden-scrollbar overflow-x-auto"
      >
        {testArr.map(el => (
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
        className="w-6 h-6 text-white hover:text-activeColor animate_icons"
      >
        <MdKeyboardArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};
