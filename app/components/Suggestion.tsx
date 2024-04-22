import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
type SuggestionProps = {
  items: string[];
};
export const Suggestion: FC<SuggestionProps> = ({ items }) => {
  return (
    <>
      {items.map((el, i) => (
        <AnimatePresence key={i}>
          <motion.li className="max-w-fit px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <motion.span className="text-xs/6 text-white whitespace-nowrap">
              {el}
            </motion.span>
          </motion.li>
        </AnimatePresence>
      ))}
    </>
  );
};
