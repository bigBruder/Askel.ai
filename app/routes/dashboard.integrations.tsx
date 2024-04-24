import { FC } from 'react';
import { Navigation } from '~/components/Navigation';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';

const IntegrationsPage: FC = () => {
  return (
    <div className="flex">
      <SideBar>
        <Navigation />
        <User />
      </SideBar>
    </div>
  );
};

export default IntegrationsPage;
