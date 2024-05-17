import { ListChat } from '~/components/ListChat';
import { MainOverview } from '~/components/MainOverview';
import { NavProcess } from '~/components/NavProcess';

import { mockOverviewsId, mockProcessedId, mockRateId, titles } from '~/data/mockData';

export default function DashboardOverview() {
  return (
    <div className="flex gap-4">
      <div>
        <NavProcess />
        <MainOverview
          mockOverviews={mockOverviewsId}
          mockProcessed={mockProcessedId}
          mockRate={mockRateId}
        />
      </div>
      <ListChat titles={titles} />
    </div>
  );
}
