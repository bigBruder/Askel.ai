import { FC } from 'react';
import { Form } from '@remix-run/react';

import { MdKeyboardArrowDown } from 'react-icons/md';

export const DownloadFile: FC = () => {
  return (
    <div>
      <p className="text-xs opacity-[0.87]">
        Please select the sales spreadsheet from your Google drive
      </p>
      <Form>
        <label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden pointer-events-none"
          />
          <div className="w-[145px] py-[2px] px-2 flex items-center border border-[#242c3b] rounded-[3px] cursor-pointer">
            <img src="/icons/google-drive.svg" alt="google drive file" className="mr-2" />
            <span className=" text-xs/3">Sales.xls</span>

            <MdKeyboardArrowDown className="ml-[auto] w-5 h-5 text-white hover:text-activeColor focus:text-activeColor animate_icons " />
          </div>
        </label>
      </Form>
    </div>
  );
};
