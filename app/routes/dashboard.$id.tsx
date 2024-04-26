
import { BackBtn } from '~/components/BackBtn';
import { ListOverview } from '~/components/ListOverview';
import { MainOverview } from '~/components/MainOverview';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';
import { mockOverviewsId, mockProcessedId, mockRateId, titles } from '~/mockData';




export default function DashboardOverview() {


  return (
    <div className="flex">
      <SideBar>
        <BackBtn path="/dashboard" />
        <div>
          <h2 className="mb-1 flex-[1] py-3 px-4 bg-[#1f1f28] rounded">Overview</h2>
          <ListOverview titles={titles} />
        </div>
        <User />
      </SideBar>
      <MainOverview
        mockOverviews={mockOverviewsId}
        mockProcessed={mockProcessedId}
        mockRate={mockRateId}
      />
    </div>
  );
}
