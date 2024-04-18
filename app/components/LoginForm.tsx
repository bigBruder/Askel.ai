import { Form } from "@remix-run/react";
import { FC } from "react";

export const LoginForm: FC = () => {
  return (
    <Form action="/login" method="post" className=" w-[400px] flex flex-col">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="mb-2 py-3 px-4 bg-black rounded-lg border  border-[#617080]"
        required
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        className="mb-2 py-3 px-4 bg-black rounded-lg border  border-[#617080]"
        required
      />
      <div className="h-10 mb-6 flex items-center justify-between ">
        <label className="flex flex-row-reverse gap-[10px] select-none cursor-pointer">
          <input
            type="checkbox"
            name="remember"
            className="hidden pointer-events-none"
          />
          Remember me
          <span className="w-5 h-5 rounded bg-black not-to-show"></span>
        </label>

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
