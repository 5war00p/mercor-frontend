import type { FC } from "react";
import { Pencil } from "../icons/Pencil";
import { Link } from "../icons/Link";
import { Plus } from "../icons/Plus";

export const Header: FC = () => {
  return (
    <div className="flex mt-[41.5px] ml-[48.5px] ">
      <p className="text-3xl font-semibold mr-[21.5px]">Mobile App</p>
      <div className="flex space-x-[17px]">
        <Pencil className="w-[30px] h-[30px] rounded-md m-auto" />
        <Link className="w-[30px] h-[30px] rounded-md m-auto" />
      </div>
      <div className="flex ml-auto">
        <Plus className="w-[30px] h-[30px] rounded-md m-auto" />
        <p className="text-[#5030E5] ml-[8.5px] m-auto font-medium">Invite</p>
        <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto ml-3 mr-12">
          <div className="flex -space-x-0.5">
            <dt className="sr-only">Commenters</dt>
            {[...Array(5).keys()].map((invitee) => (
              <dd key={invitee.toString()}>
                <img
                  className="h-[38px] w-[38px] rounded-full bg-gray-50 ring-2 ring-white"
                  src={`/invites/${invitee}.png`}
                  alt={invitee.toString()}
                />
              </dd>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
};
