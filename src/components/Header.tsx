import {
  Calendar2,
  MessageQuestion,
  SearchNormal1,
  Notification,
  ArrowDown2,
} from "iconsax-react";
import type { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="h-[89px] flex z-50 border-b border-[#DBDBDB] text-sm py-2.5">
      <nav className="flex basis-full items-center w-full" aria-label="Global">
        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="hidden sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative ml-[48px]">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <SearchNormal1 size="17.42" color="#787486" variant="TwoTone" />
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 pl-11 w-[417px] h-[44px] bg-[#F5F5F5] border-0 rounded-md text-sm"
                placeholder="Search for anything..."
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-[30px] mr-[50.5px]">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-6 w-6 rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
            >
              <Calendar2 color="#787486" variant="Linear" />
            </button>
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-6 w-6 rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <MessageQuestion color="#787486" variant="Linear" />
            </button>
            <button
              type="button"
              className="relative inline-flex flex-shrink-0 justify-center items-center gap-2 h-6 w-6 rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <Notification color="#787486" variant="Linear" />
              <span className="absolute top-0 left-3 w-[6px] h-[6px] rounded-full bg-[#D8727D]"></span>
            </button>

            <div
              className="hs-dropdown relative inline-flex"
              data-hs-dropdown-placement="bottom-right"
            >
              <span className="text-right mr-[18px]">
                <p className="text-[#0D062D]">Anima Agrawal</p>
                <p className="text-sm text-[#787486]">U.P, India</p>
              </span>
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[38px] w-[38px] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs"
              >
                <img
                  className="inline-block h-[38px] w-[38px] rounded-full ring-2 ring-white"
                  src="/profile.png"
                  alt="Image Description"
                />
              </button>
              <button className="pl-3">
                <ArrowDown2 size={"18px"} color="#292D32" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
