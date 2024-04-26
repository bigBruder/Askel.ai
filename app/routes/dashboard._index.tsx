import { FC } from 'react';
import { Navigation } from '~/components/Navigation';
import { MainOverview } from '~/components/MainOverview';
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
      <MainOverview
        mockOverviews={mockOverviews}
        mockProcessed={mockProcessed}
        mockRate={mockRate}
      />
    </div>
  );
};

export default DashboardPage;
