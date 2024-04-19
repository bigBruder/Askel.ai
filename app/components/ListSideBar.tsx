import { FC } from "react";
import { ItemSideBar } from "./ItemSideBar";
import { Titles } from "~/routes/dashboard";

interface ListSideBarProps {
  titles: Titles[];
}
export const ListSideBar: FC<ListSideBarProps> = ({ titles }) => {
  return (
    <ul className=" flex flex-col">
      {titles && titles.map((el) => <ItemSideBar key={el.id} item={el} />)}
    </ul>
  );
};
