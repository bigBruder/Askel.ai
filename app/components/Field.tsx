import { Form } from "@remix-run/react";
import { FC } from "react";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Field: FC = () => {
  return (
    <div className="mt-auto ml-[7px]">
      <Form
        action="/dashboard"
        method="post"
        className="w-[650px] flex gap-2 mb-[10px]"
      >
        <textarea
          name="chat"
          className="w-[619px] min-h-[60px] px-4 py-2 text-xs/5 text-white bg-[#12121ae5] border-2 border-[#242c3b] rounded-lg"
        />
        <button
          type="submit"
          className="w-6 h-6 flex items-center justify-center bg-[#12121ae5] rounded-lg border-2 border-[#242c3b]"
        >
          <LuPlus className="text-[#128c7e]" />
        </button>
      </Form>

      <div className=" max-w-[650px] flex gap-2 items-center">
        <button type="button">
          <MdKeyboardArrowLeft className="w-6 h-6 text-[#fff]" />
        </button>
        <ul className="flex gap-[6px]">
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
          <li className="max-w-[78px] px-[10px] bg-[#12121ae5] border border-[#242c3b] rounded-lg">
            <span className="text-xs/6 text-[#5f6a85]">Suggestion</span>
          </li>
        </ul>
        <button type="button">
          <MdKeyboardArrowRight className="w-6 h-6 text-[#fff]" />
        </button>
      </div>
    </div>
  );
};
