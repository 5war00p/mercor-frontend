import {
  Category,
  TaskSquare,
  Message,
  Profile2User,
  Setting2,
  AddSquare,
  Colorfilter,
  LampOn,
} from "iconsax-react";
import type { FC } from "react";
import { ChevronDoubleLeft } from "./icons/ChevronDoubleLeft";

const navigation = [
  { name: "Home", href: "/home", icon: Category, count: "5" },
  {
    name: "Messages",
    href: "/messages",
    icon: Message,
    count: "12",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: TaskSquare,
    count: "20+",
  },
  { name: "Members", href: "/members", icon: Profile2User },
  { name: "Settings", href: "/settings", icon: Setting2 },
];
const teams = [
  {
    id: 1,
    name: "Mobile App",
    href: "/mobileApp",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#7AC555]",
  },
  {
    id: 2,
    name: "Website Redesign",
    href: "/websiteRedesign",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#FFA500]",
  },
  {
    id: 3,
    name: "Design System",
    href: "/designSystem",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#E4CCFD]",
  },
  {
    id: 3,
    name: "Wireframes",
    href: "/wireframes",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#76A5EA]",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar: FC<{ currentPage: string }> = ({ currentPage }) => {
  return (
    <div className="max-w-[250.5px] h-full flex flex-col gap-y-5 border-r bg-white border-[#DBDBDB]">
      <div className="flex py-8 shrink-0 items-center border-b border-[#DBDBDB] px-6">
        <Colorfilter color="#5030E5" variant="Bulk" size={"24px"} />
        <p className="ml-2 text-xl font-semibold leading-6">Project M.</p>
        <ChevronDoubleLeft className="m-auto ml-[46px] h-5 w-5 text-[#787486]" />
      </div>
      <nav className="flex flex-1 flex-col px-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li className="pb-5 border-b border-[#DBDBDB]">
            <ul role="list" className="-mx-2 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      currentPage === item.href
                        ? "bg-[#5030E5] bg-opacity-[0.08] text-gray-900"
                        : "text-[#787486] hover:text-gray-900 hover:bg-[#5030E5] hover:bg-opacity-[0.08]",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        currentPage === item.href
                          ? "text-gray-900"
                          : "text-[#787486] group-hover:text-gray-900",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="flex items-center gap-x-24 text-xs font-bold leading-[14.52px] text-[#787486]">
              <p>MY PROJECTS</p>
              <AddSquare className="h-4 w-4 shrink-0 text-[#787486]" />
            </div>
            <ul role="list" className="-mx-2 mt-[21px] space-y-2">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      currentPage === team.href
                        ? "bg-[#5030E5] bg-opacity-[0.08] text-gray-900"
                        : "text-[#787486] hover:text-gray-900 hover:bg-[#5030E5] hover:bg-opacity-[0.08]",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-5 font-semibold items-center"
                    )}
                  >
                    <span className={team.indicator}></span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto p-6">
            <div className="relative h-[200px] rounded-2xl bg-[#F5F5F5]">
              <div className="absolute -top-9 left-16 w-[66px] h-[66px] rounded-full bg-[#F5F5F5]">
                <div className="relative mx-auto mt-4 h-[33px] w-[33px] rounded-full bg-[#FCD64A] bg-opacity-70 blur-lg"></div>
                <LampOn
                  className="absolute bottom-4 left-4"
                  size="32"
                  color="#FBCB18"
                  variant="Bulk"
                />
              </div>
              <div className="pt-6 px-5 space-y-3 text-center">
                <p className="text-center justify-center text-sm font-medium">
                  Thoughts Time
                </p>
                <p className="text-xs text-[#787486] text-center justify-center">
                  We don’t have any notice for you, till then you can share your
                  thoughts with your peers.
                </p>
                <button
                  type="button"
                  className="rounded bg-white px-6 py-3 mt-2 text-sm font-medium focus-visible:outline-none focus:outline-none"
                >
                  Write a message
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
