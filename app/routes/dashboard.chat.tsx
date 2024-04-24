import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BackBtn } from '~/components/BackBtn';

import { ListSideBar } from '~/components/ListSideBar';
import { MainChat } from '~/components/MainChat';
import { SideBar } from '~/components/SideBar';
import { User } from '~/components/User';

export type Titles = {
  id: string;
  title: string;
  description: [];
};

export async function loader() {
  const getTitle = await fetch(
    'https://661cf1d7e7b95ad7fa6ba837.mockapi.io/test/sidebar'
  );

  const titles: Titles[] = await getTitle.json();

  return json({ titles });
}
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get('chat'));

  return json({ ok: true });
}

const ChatPage = () => {
  const { titles } = useLoaderData<typeof loader>();
  return (
    <div className="flex ">
      <SideBar>
        <BackBtn path="/dashboard/overview" />
        <ListSideBar titles={titles} />
        <User />
      </SideBar>
      <MainChat />
    </div>
  );
};

export default ChatPage;
