import { FC } from 'react';
type ModalNewAutomationProps = {
  toggleIsOpen: () => void;
};
export const ModalNewAutomation: FC<ModalNewAutomationProps> = ({ toggleIsOpen }) => {
  return (
    <div className="w-full h-full absolute z-20 top-0 right-0 flex flex-col items-center justify-center backdrop-blur-[10px] bg-[#1f1f283f]">
      <div className="">
        <h2 className="mb-5 font-bold text-[24px]/[36px] text-center">
          Ignite the Magic!
        </h2>
        <button
          onClick={toggleIsOpen}
          type="button"
          className="py-3 px-4 mb-7 flex items-center justify-center gap-2 fill-[#07B83F] bg-[#051423] rounded border border-[#51BC51]"
        >
          <svg width={18} height={18}>
            <use xlinkHref="/icons/sprite.svg#plus" />
          </svg>
          <p>Set Up Your First Automation</p>
        </button>
      </div>
    </div>
  );
};
