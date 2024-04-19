import { Form } from '@remix-run/react';
import { FC } from 'react';

export const RegisterForm: FC = () => {
  return (
    <Form action="/register" method="post" className=" w-[400px] flex flex-col">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mb-2 py-3 px-4 bg-black rounded-lg border  border-[#617080]"
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="page"
        placeholder="Your homepage"
        className="mb-6 py-3 px-4 bg-black rounded-lg border  border-[#617080]"
        required
        autoComplete="off"
      />
      <button
        type="submit"
        className=" p-3 bg-[#051423]  border border-[#51bc51] rounded-md font-semibold"
      >
        Register
      </button>
    </Form>
  );
};
