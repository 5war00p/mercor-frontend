import {
  CalendarIcon,
  ChartPieIcon,
  UsersIcon,
  Squares2X2Icon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import type { FC } from "react";

const navigation = [
  { name: "Home", href: "#", icon: Squares2X2Icon, count: "5", current: false },
  {
    name: "Messages",
    href: "#",
    icon: ChatBubbleLeftEllipsisIcon,
    count: "12",
    current: false,
  },
  {
    name: "Tasks",
    href: "#",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  { name: "Members", href: "#", icon: UsersIcon, current: false },
  { name: "Settings", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  {
    id: 1,
    name: "Mobile App",
    href: "#",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#7AC555]",
    current: true,
  },
  {
    id: 2,
    name: "Website Redesign",
    href: "#",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#FFA500]",
    current: false,
  },
  {
    id: 3,
    name: "Design System",
    href: "#",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#E4CCFD]",
    current: false,
  },
  {
    id: 3,
    name: "Wireframes",
    href: "#",
    indicator: "inline-block w-2 h-2 rounded-full bg-[#76A5EA]",
    current: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar: FC = () => {
  return (
    <div className="w-[250.5px] h-screen flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <span className="flex gap-[9px]">
          <img className="h-8 w-auto" src="/projectM.svg" alt="Your Company" />
          <p className="m-auto text-xl font-semibold leading-6">Project M.</p>
        </span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#5030E5] bg-opacity-[0.08] text-gray-900"
                        : "text-[#787486] hover:text-gray-900 hover:bg-[#5030E5] hover:bg-opacity-[0.08]",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
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
            <div className="text-xs font-bold leading-[14.52px] text-[#787486]">
              MY PROJECTS
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-[#5030E5] bg-opacity-[0.08] text-gray-900"
                        : "text-[#787486] hover:text-gray-900 hover:bg-[#5030E5] hover:bg-opacity-[0.08]",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center"
                    )}
                  >
                    <span className={team.indicator}></span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-[rgba(80, 48, 229, 0.08)]"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
