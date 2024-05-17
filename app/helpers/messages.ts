import fs from 'fs/promises';
import path from 'path';

import { Messages } from '~/types/interfaces';

const messagePath = path.resolve('app', 'messages.json');

export async function getStoredMessages() {
  const rawFileContent = await fs.readFile(messagePath, { encoding: 'utf-8' });

  const data = JSON.parse(rawFileContent);
  const storedMessages = data.messages ?? [];

  return storedMessages;
}
export function storeMessages(messages: Messages[]) {
  return fs.writeFile(messagePath, JSON.stringify({ messages: messages || [] }, null, 2));
}
