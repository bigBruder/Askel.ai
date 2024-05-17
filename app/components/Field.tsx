/* eslint-disable jsx-a11y/no-autofocus */
import { FC, KeyboardEvent } from 'react';
import { Form } from '@remix-run/react';
import clsx from 'clsx';

import { BtnAdd } from './BtnAdd';

export const Field: FC = () => {
  const addMessage = (e: KeyboardEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (e.code === 'Enter') {
        (e.target as HTMLInputElement).value = '';
      }
    }, 0);
  };
  return (
    <>
      <Form method="post" id="chat-form" className="w-[650px] mt-auto flex gap-2">
        <input
          onKeyDown={addMessage}
          className={clsx(
            'w-[618px] min-h-[60px] max-h-[100px] px-3 text-xs/5 text-white bg-transparent border-2 border-[#506182] rounded-lg',
            'placeholder:w-[151px] placeholder:px-[6px] placeholder:py-[2px] placeholder:text-[#8A95AF] placeholder:text-[11px]/[16px] placeholder:text-center placeholder:bg-black placeholder:rounded'
          )}
          type="text"
          name="chat"
          placeholder="WORKFLOW_CONFIRMED"
          autoFocus
        />
        <BtnAdd handler={() => {}} />
      </Form>
    </>
  );
};
