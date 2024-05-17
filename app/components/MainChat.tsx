// import { Form } from '@remix-run/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { useIsOpen } from '~/hooks/useIsOpen';
// import { DownloadFile } from './DownloadFile';
import { FC, useState } from 'react';
import { Field } from './Field';
import { MainChatProps } from '~/types/props';
import { Messages } from '~/types/interfaces';

export const MainChat: FC<MainChatProps> = () => {
  // const { isOpen, toggleIsOpen } = useIsOpen();
  const [messages, setMessages] = useState<Messages[]>([]);

  return (
    <div className="mx-auto max-w-[650px] grow flex flex-col justify-between">
      <ul className="max-h-[600px] flex flex-col gap-1 overflow-y-auto">
        {messages.map(message => (
          <li key={message.id} className="max-w-[77%] ml-auto mr-2 flex flex-col gap-2 ">
            <div className="flex flex-row-reverse items-center gap-2">
              <span className=" flex items-center justify-center size-6 text-[#f2f3f5] bg-[#007aff] rounded-full">
                A
              </span>
              <span className="text-[#5d6983] text-[11px]">Andrew</span>
            </div>
            <p className="mr-8 py-3 px-4 bg-[#004C94] rounded-lg  text-[13px]/[15px]">
              {message.body}
            </p>
          </li>
        ))}
        {/* <li className="w-[275px] box_message">
          <p className=" text-xs opacity-[0.87]">
            Happy to help - lets walk the process through together once and we should be
            good to go.
          </p>
        </li>
        <li className="box_message flex flex-col gap-[10px] max-w-[355px]">
          <DownloadFile />
        </li>
        <li className="box_message max-w-[585px]">
          <p className="text-xs opacity-[0.87]">
            The following columns are present in the Sales Google Sheet:
            <span className="text-[#07EB47]">Customer ID</span>,{' '}
            <span className="text-[#07EB47]">Name</span>,{' '}
            <span className="text-[#07EB47]">Date of Sale</span>,{' '}
            <span className="text-[#07EB47]">Value</span>,{' '}
            <span className="text-[#07EB47]">Currency</span>,{' '}
            <span className="text-[#07EB47]">TAX ID</span>,{' '}
            <span className="text-[#07EB47]"> Country of origin</span>. Based on this
            information I can generate the invoices with Xero. I will keep track of which
            invoices have been created.
          </p>
        </li>
        <li className="box_message max-w-[560px] relative">
          <p className="text-xs opacity-[0.87]">
            Based on the Customer ID, I&apos;ve been able to find correct customer details
            from HubSpot. Some customers seemed to share the same Customer ID across
            multiple countries with different contact details for each country. Should I
            use{' '}
            <span className=" px-1 text-[#6a7794] text-xs/6 font-bold border border-[#263149] rounded-lg">
              Country specific
            </span>{' '}
            or{' '}
            <span className=" px-1 py-[2px] text-[#6a7794] text-xs/6 font-bold border border-[#263149] rounded-lg">
              Global
            </span>{' '}
            contact information for each customer?
          </p>
          <div className=" absolute right-2 bottom-1">
            <button
              type="button"
              onClick={toggleIsOpen}
              className=" w-4 h-4 cursor-pointer text-[#5D6983] hover:text-activeColor focus:text-activeColor  animate_icons "
            >
              <svg className="w-3 h-3">
                <use xlinkHref="/icons/sprite.svg#dislike" />
              </svg>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <Form
                    onSubmit={toggleIsOpen}
                    className="flex absolute min-[1200px]:left-4 min-[1200px]:top-0 top-4 left-[-120px] transition-all"
                  >
                    <input
                      type="text"
                      className="min-w-[220px] pl-[10px] pr-6 py-[6px] text-[#B6BAC0] bg-[#040a13bf] rounded-[3px]"
                      placeholder="Add a comment"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      className=" w-[18px] h-[18px] absolute  top-2 right-1"
                    >
                      <svg className=" w-[18px] h-[18px] fill-[#6a7794]animate_icons">
                        <use xlinkHref="/icons/sprite.svg#arrow-circle" />
                      </svg>
                    </button>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </li>
        <li className="box_message max-w-[350px]">
          <p className="text-xs opacity-[0.87]">
            Can you describe in couple of sentences what was wrong with the invoice or
            what good would have looked like?
          </p>
        </li>
        <li className="box_message max-w-[270px]">
          <p className="text-xs opacity-[0.87]">
            We use the Customer ID + Year and Month Number as reference for the invoice -
            in this case it should have been.{' '}
            <span className="text-[#07EB47]">A234ER202312</span>
          </p>
        </li>
        <li className="box_message max-w-[270px]">
          <p className="text-xs opacity-[0.87]">
            I&apos;ve fixed the reference number - here is another invoice preview for you
            to
          </p>
          <div className="flex gap-1 mt-[10px]">
            <button
              type="button"
              className="w-[67px] h-[22px] flex items-center justify-center rounded-lg text-[10px]/[12px] font-bold text-[#6A7794] border border-[#222d43]"
            >
              Decline
            </button>
            <button
              type="button"
              className="w-[67px] h-[22px] flex items-center justify-center rounded-lg text-[10px]/[12px] font-bold text-[#1d3208] bg-[#07b83f]"
            >
              Approve
            </button>
          </div>
        </li>
        <li className="box_message max-w-[134px]">
          <div className="flex items-center gap-[10px]">
            <motion.svg
              className="w-5 h-5"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
              }}
            >
              <use xlinkHref="/icons/sprite.svg#loading" />
            </motion.svg>
            <p className="text-xs opacity-[0.87]">Implementing</p>
          </div>
        </li> */}
      </ul>
      <Field setMessages={setMessages} />
    </div>
  );
};
