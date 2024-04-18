import { useState } from "react";

export const useIsOpen = (): {
  isOpen: boolean;
  toggleIsOpen: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, toggleIsOpen };
};
