import { BackBtn } from '~/components/BackBtn';
import { ListChat } from '~/components/ListChat';
import { MainChat } from '~/components/MainChat';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';
import { titles } from '~/mockData';

const ChatPage = () => {
  return (
    <div className="flex ">
      <SideBar>
        <BackBtn path="/dashboard/overview" />
        <ListChat titles={titles} />
        <User />
      </SideBar>
      <MainChat />
    </div>
  );
};

export default ChatPage;
