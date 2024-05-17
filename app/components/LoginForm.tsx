import { FC, useState } from 'react';
import { Form } from '@remix-run/react';

import { FaCheck } from 'react-icons/fa';

export const LoginForm: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Form action="/login" method="post" className=" w-[400px] flex flex-col">
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
        name="password"
        placeholder="Password"
        className="mb-2 py-3 px-4 bg-black rounded-lg border  border-[#617080]"
        required
        autoComplete="off"
      />
      <div className="h-10 mb-6 flex items-center justify-between ">
        <button
          type="button"
          className="flex flex-row-reverse gap-[10px] select-none cursor-pointer"
          onClick={() => setIsChecked(prevState => !prevState)}
        >
          <input
            type="checkbox"
            name="remember"
            className="hidden pointer-events-none"
            autoComplete="off"
          />
          Remember me
          <span className="w-5 h-5 flex items-center justify-center rounded bg-black not-to-show">
            {isChecked && <FaCheck className="text-[#51bc51]" />}
          </span>
        </button>

        <span className="mr-[6px]">Forgot password</span>
      </div>
      <button
        type="submit"
        className=" p-3 bg-[#051423]  border border-[#51bc51] rounded-md font-semibold"
      >
        Login
      </button>
    </Form>
  );
};
