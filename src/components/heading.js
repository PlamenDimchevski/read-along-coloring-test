'use client';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
   { href: '/chapters', title: 'Chapters' },
   { href: '/characters', title: 'Characters' },
   { href: '/help', title: 'Help' },
   { href: '/api/auth/signout', title: 'LogOut' },
];

export default function Heading() {
   const pathName = usePathname();
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <Bars3CenterLeftIcon className="h-6 w-6" />
               </div>
               <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
               >
                  {links.map(item => (
                     <li key={item.href}>
                        <a className={pathName.startsWith(item.href) ? 'active' : ''} href={item.href}>
                           {item.title}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            <Link className="btn btn-ghost text-xl" href="/">
               AOB read along
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {links.map(item => (
                  <li key={item.href}>
                     <a className={pathName.startsWith(item.href) ? 'active' : ''} href={item.href}>
                        {item.title}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
         <div className="navbar-end"></div>
      </div>
   );
}
