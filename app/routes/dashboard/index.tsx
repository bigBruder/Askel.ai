import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Chat } from '~/components/Chat';
import { SideBar } from '~/components/SideBar';
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

const Dashboard = () => {
  const { titles } = useLoaderData<typeof loader>();

  return (
    <div className="flex ">
      <SideBar titles={titles} />
      <Chat />
    </div>
  );
};

export default Dashboard;
