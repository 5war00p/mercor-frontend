import { useRef, type FC } from "react";
import { Badge } from "./Badge";
import { Folder2, Message } from "iconsax-react";
import { ThreeDots } from "../icons/ThreeDots";
import { useDrag } from "react-dnd";
import { ColumnType } from "./Column";

type ProrityStatus = "Low" | "High" | "Completed";

export interface CardProps {
  priorityStatus: ProrityStatus;
  title: string;
  status: ColumnType;
  description?: string;
  images?: string[];
  subscriberImages: string[];
  fileCount: number;
  commentCount: number;
}

const getStatusBGColor = (priorityStatus: ProrityStatus) => {
  switch (priorityStatus) {
    case "High":
      return "bg-[#D8727D] bg-opacity-10";
    case "Completed":
      return "bg-[#83C29D] bg-opacity-20";
    case "Low":
    default:
      return "bg-[#DFA874] bg-opacity-20";
  }
};

const getStatusTextColor = (priorityStatus: ProrityStatus) => {
  switch (priorityStatus) {
    case "High":
      return "text-[#D8727D]";
    case "Completed":
      return "text-[#68B266]";
    case "Low":
    default:
      return "text-[#D58D49]";
  }
};

export const Card: FC<CardProps> = ({
  priorityStatus,
  title,
  description,
  images,
  fileCount,
  commentCount,
  subscriberImages,
}) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: {
      priorityStatus,
      title,
      description,
      images,
      fileCount,
      commentCount,
      subscriberImages,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(ref);

  return (
    <div
      className={`w-[314px] flex flex-col bg-white p-5 rounded-2xl ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      ref={ref}
    >
      <div className="flex items-center">
        <Badge
          content={priorityStatus}
          textColor={getStatusTextColor(priorityStatus)}
          bgColor={getStatusBGColor(priorityStatus)}
        />
        <ThreeDots className="ml-auto w-5 h-5" />
      </div>
      <div className="flex flex-col mt-2 gap-[6px] mb-7">
        <p className="font-semibold text-lg">{title}</p>
        {description ? (
          <p className="text-sm text-[#787486]">{description}</p>
        ) : null}
        {images?.length ? (
          <div
            className={`grid grid-rows-1 ${
              images.length > 1 ? "grid-cols-2" : ""
            } m-auto space-x-3`}
          >
            {images.slice(0, 2).map((image, index) => {
              return <img key={index} src={image} className="rounded-lg" />;
            })}
          </div>
        ) : null}
      </div>
      <div className="flex">
        <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
          <div className="flex -space-x-0.5">
            <dt className="sr-only">Commenters</dt>
            {subscriberImages.map((subscriber, index) => (
              <dd key={index.toString()}>
                <img
                  className="w-6 h-6 rounded-full bg-gray-50 ring-2 ring-white"
                  src={subscriber}
                  alt={index.toString()}
                />
              </dd>
            ))}
          </div>
        </dl>
        <div className="flex gap-[15px] ml-auto">
          <button
            className="flex items-center space-x-[5.83px] text-[#787486] text-sm font-medium"
            onClick={() => null}
          >
            <Message size={16} />
            <p>{commentCount} Comments</p>
          </button>
          <button
            className="flex items-center space-x-[5.83px] text-[#787486] text-sm font-medium"
            onClick={() => null}
          >
            <Folder2 size={16} />
            <p>{fileCount} files</p>
          </button>
        </div>
      </div>
    </div>
  );
};
