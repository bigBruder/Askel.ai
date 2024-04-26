import { FC } from 'react';
import { Navigation } from '~/components/Navigation';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';

const UsersPage: FC = () => {
  return (
    <div className="flex">
      <SideBar>
        <Navigation />
        <User />
      </SideBar>
      <main className="p-6 grow flex flex-col bg-logo bg-no-repeat bg-top bg-cover">
      UsersPage
      </main>
    </div>
  );
};

export default UsersPage;
