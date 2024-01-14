import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className="flex flex-col flex-1">
      <ul
        role="list"
        className="flex flex-col flex-1 gap-y-7 list-none m-0 p-0 text-sm font-semibold leading-6 text-gray-400"
      >
        <li>
          <a
            href="#"
            className="flex gap-x-3 rounded-sm p-2 hover:text-white hover:bg-gray-800"
          >
            <CalendarDaysIcon className=" w-6 h-6 flex-shrink-0" />
            Add text
            <span className=" ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-center text-xs font-medium leading-5 ring-inset ring-shadow">
              5
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-x-3 rounded-sm p-2 hover:text-white hover:bg-gray-800"
          >
            Read text
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-x-3 rounded-sm p-2 hover:text-white hover:bg-gray-800"
          >
            Help
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-x-3 rounded-sm p-2 hover:text-white hover:bg-gray-800"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
