import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { titles } from '~/data/mockData';
import { Messages } from '~/types/interfaces';
import { getStoredMessages, storeMessages } from '~/helpers/messages';
import { MainChat } from '~/components/MainChat';
import { ListChat } from '~/components/ListChat';
import { NavProcess } from '~/components/NavProcess';

export default function ChatPage() {
  const messages: Messages[] = useLoaderData();
  return (
    <div className="mx-auto h-full flex gap-4">
      <div className="relative flex flex-col ">
        <NavProcess />
        <MainChat messages={messages} />
      </div>
      <ListChat titles={titles} />
    </div>
  );
}
export async function loader() {
  const messages = await getStoredMessages();
  return messages;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const message = formData.get('chat');

  if ((message as string).trim() === '') return redirect('/dashboard/chat');

  const messageData = {
    body: message,
    id: Date.now(),
  };
  const existingMessage = await getStoredMessages();
  const updatedMessages = existingMessage.concat(messageData);
  await storeMessages(updatedMessages);

  return redirect('/dashboard/chat');
}
