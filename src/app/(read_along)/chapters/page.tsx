import db from '@/src/lib/db';
import Link from 'next/link';

export default async function List() {
   const chapter = await db.chapter.findMany({ orderBy: { createdAt: 'desc' } });
   return (
      <div className="overflow-x-auto">
         <div className="join flex w-full">
            <input className="input join-item input-bordered flex-grow" placeholder="Search for chapter" />
            <button className="btn join-item">Search</button>
            <Link href="/chapters/add" className="btn join-item">
               Add new
            </Link>
         </div>
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>Chapter</th>
                  <th>PrePub</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {/* row 1 */}
               {chapter.map(item => (
                  <tr>
                     <td>
                        <div className="flex items-center gap-3">
                           <div>
                              <div className="font-bold">{item.title}</div>
                              <div className="text-sm opacity-50">{item.part}</div>
                           </div>
                        </div>
                     </td>
                     <td>
                        <label className="swap swap-flip">
                           <input type="checkbox" style={{ opacity: 0 }} />
                           <div className="swap-on">Yes</div>
                           <div className="swap-off">No</div>
                        </label>
                     </td>
                     <th>
                        <Link href={`/chapters/${item.id}/edit`} className="btn btn-ghost btn-xs">
                           edit
                        </Link>
                        <Link href={`/chapters/${item.id}`} className="btn btn-ghost btn-xs">
                           read
                        </Link>
                        <button className="btn btn-ghost btn-xs">delete</button>
                     </th>
                  </tr>
               ))}
            </tbody>
            {/* foot */}
            <tfoot>
               <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th></th>
               </tr>
            </tfoot>
         </table>
      </div>
   );
}
