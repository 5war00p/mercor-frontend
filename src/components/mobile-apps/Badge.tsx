import type { FC } from "react";

interface BadgeProps {
  content: string;
  textColor: string;
  bgColor: string;
}

export const Badge: FC<BadgeProps> = ({ content, textColor, bgColor }) => {
  console.log(bgColor);
  return (
    <span
      className={`w-fit inline-flex items-center rounded-md px-[6px] py-1 text-xs font-medium ${textColor} ${bgColor}`}
    >
      {content}
    </span>
  );
};
