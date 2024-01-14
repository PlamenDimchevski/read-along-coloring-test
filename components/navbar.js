"use client";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import NavItem from "./navite";

const paths = [
  { name: "Add text", href: "/form" },
  { name: "Read avaliable", href: "/" },
  { name: "Help", href: "/hello" },
  { name: "About", href: "/hello" },
];

export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav className="flex flex-col flex-1">
      <ul
        role="list"
        className="flex flex-col flex-1 gap-y-7 list-none m-0 p-0 text-sm font-semibold leading-6 text-gray-400"
      >
        {paths.map((item) => (
          <li key={item.name}>
            <NavItem href={item.href} isActive={pathName === item.href}>
              <CalendarDaysIcon className=" w-6 h-6 flex-shrink-0" />
              {item.name}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
