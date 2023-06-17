import type { FC } from "react";
import { Plus } from "../icons/Plus";

interface ColumnProps {
  title: string;
  cardCount: number;
  separatorColor: string;
  indicatorColor: string;
}

export const Column: FC<ColumnProps> = ({
  title,
  cardCount,
  separatorColor,
  indicatorColor,
}) => {
  const bulletBGColor = `bg-[${indicatorColor}]`;
  const dividerColor = `border-[${separatorColor}]`;
  const showAddButton = title === "To Do";

  return (
    <div className="w-[354px] flex flex-col bg-[#F5F5F5] rounded-2xl p-5">
      <div className="flex items-center pb-6">
        <span
          className={`inline-block w-2 h-2 rounded-full ${bulletBGColor}`}
        ></span>
        <p className="ml-2 mr-3">{title}</p>
        <span className="text-center text-sm font-medium inline-block w-5 h-5 rounded-full bg-[#E0E0E0] text-[#625F6D]">
          {cardCount}
        </span>
        {showAddButton ? (
          <Plus className="w-[30px] h-[30px] rounded-md ml-auto" />
        ) : null}
      </div>
      <span className={`border-t-[3px] ${dividerColor} mb-7`}></span>
    </div>
  );
};
