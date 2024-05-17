import { Outlet } from '@remix-run/react';
import { FC } from 'react';
import { ModalNewAutomation } from '~/components/ModalNewAutomation';
import { SideBar } from '~/components/SideBar';
import { useIsOpen } from '~/hooks/useIsOpen';

const LayoutDashboard: FC = () => {
  const { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <div className="h-screen flex bg-logo bg-no-repeat bg-cover bg-left">
      <SideBar toggleIsOpen={toggleIsOpen} />
      <main className="p-5 grow flex flex-col">
        <Outlet />
        {isOpen && <ModalNewAutomation toggleIsOpen={toggleIsOpen} />}
      </main>
    </div>
  );
};

export default LayoutDashboard;
