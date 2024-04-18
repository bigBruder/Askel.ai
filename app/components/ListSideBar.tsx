import { FC } from "react";
import { ItemSideBar } from "./ItemSideBar";
import { Titles } from "~/routes/dashboard";

export const ListSideBar: FC<{ titles: Titles[] }> = ({ titles }) => {
  return (
    <ul className=" flex flex-col gap-1">
      {titles && titles.map((el) => <ItemSideBar key={el.id} item={el} />)}
    </ul>
  );
};
