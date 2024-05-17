import { FC, ReactNode } from 'react';
import { useIsOpen } from '~/hooks/useIsOpen';
import { SideBar } from '../SideBar';
import { ModalNewAutomation } from '../ModalNewAutomation';

export const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <div className="flex bg-logo bg-no-repeat bg-cover bg-left">
      <SideBar toggleIsOpen={toggleIsOpen} />
      <main className="p-5 grow flex flex-col relative">
        {children}
        {isOpen && <ModalNewAutomation toggleIsOpen={toggleIsOpen} />}
      </main>
    </div>
  );
};
