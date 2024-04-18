import { FC } from "react";
import { Field } from "./Field";
import { Messages } from "~/routes/dashboard";

export const Chat: FC<{ messages: Messages[] }> = ({ messages }) => {
  return (
    <main className=" pt-9 pb-4 w-full bg-dashboard bg-no-repeat bg-right bg-contain ">
      <div className="flex flex-col mx-auto max-w-[664px] h-full">
        <p className="mb-4 min-[43px] text-white opacity-90 font-bold text-[22px]/[20px]">
          Event Name
        </p>
        <div className="flex flex-col gap-1">
          {messages &&
            messages.map((el) => (
              <div
                key={el.id}
                className="py-3 px-4 bg-[#0308127f] border border-[#222d43] rounded-lg w-fit"
              >
                <p className=" text-xs/4 text-white opacity-[0.87]">
                  {el.message}
                </p>
              </div>
            ))}
        </div>
        <Field />
      </div>
    </main>
  );
};
