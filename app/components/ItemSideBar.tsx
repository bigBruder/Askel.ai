import { FC } from "react";
import { useIsOpen } from "~/hooks/useIsOpen";
import { data } from "./ListSideBar";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import clsx from "clsx";

type ItemProps = {
  item: data;
};
export const ItemSideBar: FC<ItemProps> = ({ item }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <li>
      <div className=" w-[220px] pt-3 pr-[16px] pb-[14px] pl-[15px] flex justify-between  gap-2 rounded bg-[#1f1f28]">
        <h3
          className={clsx`text-xs max-w-[170px] font-bold w-fit transition-colors duration-300
        ${isOpen ? "text-white" : "text-[#5d6983]"}`}
        >
          {item.title}
        </h3>
        <button
          onClick={toggleIsOpen}
          type="button"
          className="w-[14px] h-3 flex "
        >
          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className={clsx`w-[14px] h-3 transition-transform duration-300
          ${isOpen && "rotate-[-180deg]"}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0, margin: "0" }}
            animate={{ height: "auto", opacity: 1, margin: "8px 0" }}
            exit={{ height: 0, opacity: 0, margin: "0" }}
            style={{
              padding: "0 16px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {item.description.map((el) => (
              <li key={nanoid()}>
                <p className="text-[#5d6983] text-[10px]/[14px]">{el}</p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
