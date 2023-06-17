import { ArrowDown2, Calendar1, Menu, Profile2User } from "iconsax-react";
import type { FC } from "react";
import { Filter } from "../icons/Filter";
import { Equals } from "../icons/Equals";

export const SubHeader: FC = () => {
  return (
    <div className="flex mt-10 mb-8">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => null}
          className="w-[122px] h-10 flex rounded-md bg-white px-4 py-2 items-center text-sm font-medium text-[#787486] ring-1 ring-inset ring-[#787486]"
        >
          <Filter />
          <p className="pl-[8.27px] pr-[12.22px]">Filter</p>
          <ArrowDown2 size={16} />
        </button>
        <button
          type="button"
          onClick={() => null}
          className="w-[122px] h-10 flex rounded-md bg-white px-4 py-2 items-center text-sm font-medium text-[#787486] ring-1 ring-inset ring-[#787486]"
        >
          <Calendar1 color="#787486" size={16} />
          <p className="pl-[8.27px] pr-[12.22px]">Today</p>
          <ArrowDown2 size={16} />
        </button>
      </div>
      <div className="flex ml-auto">
        <button
          type="button"
          onClick={() => null}
          className="w-[97px] h-10 flex rounded-md bg-white px-4 py-2 items-center text-sm font-medium text-[#787486] ring-1 ring-inset ring-[#787486]"
        >
          <Profile2User color="#787486" size={16} />
          <p className="pl-[8.27px]">Share</p>
        </button>
      </div>
      <div className="mx-5 border-l border-[#787486]"></div>
      <div className="flex gap-[22px]">
        <button onClick={() => null}>
          <Equals />
        </button>
        <button onClick={() => null}>
          <Menu size={21} color="#787486" />
        </button>
      </div>
    </div>
  );
};
