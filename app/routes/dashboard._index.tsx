import { FC } from 'react';
import { Navigation } from '~/components/Navigation';
import { OverviewMain } from '~/components/OverviewMain';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';

const Page: FC = () => {
  return (
    <div className="flex">
      <SideBar>
        <Navigation />
        <User />
      </SideBar>
      <OverviewMain />
    </div>
  );
};

export default Page;
