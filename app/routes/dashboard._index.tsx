import { FC } from 'react';
import { Navigation } from '~/components/Navigation';
import { OverviewMain } from '~/components/OverviewMain';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';
import { mockOverviews, mockProcessed, mockRate } from '~/mockData';

const DashboardPage: FC = () => {
  return (
    <div className="flex">
      <SideBar>
        <Navigation />
        <User />
      </SideBar>
      <OverviewMain
        mockOverviews={mockOverviews}
        mockProcessed={mockProcessed}
        mockRate={mockRate}
      />
    </div>
  );
};

export default DashboardPage;
