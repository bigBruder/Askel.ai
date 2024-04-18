import { FC } from "react";
import { ItemSideBar } from "./ItemSideBar";
import { Titles } from "~/routes/dashboard";
interface ListSideBarProps {
  titles: Titles[];
  value: string;
}
export const ListSideBar: FC<ListSideBarProps> = ({ titles, value }) => {
  const res = titles.filter((el) =>
    el.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <ul className=" flex flex-col gap-1">
      {res.length !== 0 ? res.map((el) => <ItemSideBar key={el.id} item={el}/>) : (<p className=" px-4 py-3 w-[220px]">Not found process</p>)}
    </ul>
  );
};
