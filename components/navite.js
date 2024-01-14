import Link from "next/link";

export default function NavItem({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`flex gap-x-3 rounded-sm p-2  ${
        isActive
          ? "bg-gray-800 text-white"
          : "hover:text-white hover:bg-gray-800"
      }`}
    >
      {children}
      <span className=" ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-center text-xs font-medium leading-5 ring-inset ring-shadow">
        5
      </span>
    </Link>
  );
}
