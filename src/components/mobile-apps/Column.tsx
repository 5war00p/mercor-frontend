import { useRef, type FC } from "react";
import { Plus } from "../icons/Plus";
import { Card, CardProps } from "./Card";
import { useDrop } from "react-dnd";

export type ColumnType = "todo" | "onprogress" | "done";

interface ColumnProps {
  id: ColumnType;
  title: string;
  cardCount: number;
  separatorColor: string;
  indicatorColor: string;
  cardProps?: CardProps[];
  changeTaskStatus: (title: string, id: ColumnType) => void;
}

export const Column: FC<ColumnProps> = ({
  id,
  title,
  cardCount,
  separatorColor,
  indicatorColor,
  cardProps,
  changeTaskStatus,
}) => {
  const showAddButton = title === "To Do";

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus((item as unknown as CardProps).title, id);
    },
  });
  drop(ref);

  return (
    <div
      className="min-w-[355px] flex flex-col bg-[#F5F5F5] rounded-2xl p-5"
      ref={ref}
    >
      <div className="flex items-center pb-6">
        <span
          className={`inline-block w-2 h-2 rounded-full ${indicatorColor}`}
        ></span>
        <p className="ml-2 mr-3">{title}</p>
        <span className="text-center text-sm font-medium inline-block w-5 h-5 rounded-full bg-[#E0E0E0] text-[#625F6D]">
          {cardCount}
        </span>
        {showAddButton ? (
          <Plus className="w-[30px] h-[30px] rounded-md ml-auto" />
        ) : null}
      </div>
      <span className={`border-t-[3px] ${separatorColor} mb-7`}></span>
      {cardProps?.length ? (
        <div className="flex flex-col gap-5">
          {cardProps.map((card, index) => {
            return (
              <Card
                key={index.toString()}
                title={card.title}
                status={card.status}
                priorityStatus={card.priorityStatus}
                description={card.description}
                images={card.images}
                subscriberImages={card.subscriberImages}
                fileCount={card.fileCount}
                commentCount={card.fileCount}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
