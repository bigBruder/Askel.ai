import { FC } from 'react';

import { mockOverviews, mockProcessed, mockRate } from '~/data/mockData';
import { MainOverview } from '~/components/MainOverview';

const DashboardPage: FC = () => {
  return (
    <div className="flex">
      <MainOverview
        mockOverviews={mockOverviews}
        mockProcessed={mockProcessed}
        mockRate={mockRate}
      />
    </div>
  );
};

export default DashboardPage;
