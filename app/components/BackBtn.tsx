import { Link } from '@remix-run/react';
import { FC } from 'react';
type BackBtnProps = {
  path: string;
};
export const BackBtn: FC<BackBtnProps> = ({ path }) => {
  return (
    <div>
      <Link
        to={path}
        type="button"
        className="px-4 py-3 flex items-center gap-6 text-[#5d6983] hover:text-activeColor transition-colors duration-300"
      >
        <svg className="w-5 h-5 fill-[#007aff]" >
          <use xlinkHref="/icons/sprite.svg#arrow-back" />
        </svg>

        <span className="text-xs font-bold text-white ">Back</span>
      </Link>
    </div>
  );
};