// 'use client';
import Link from 'next/link';
import db from '@/src/lib/db';
import TableRow from './row';
import { SearchParams } from '@/src/types/types';
import { Character } from '@prisma/client';
import { DeleteForm, EditItem } from './forms';

function getNameFromList(id: string | undefined, list: Character[]) {
   return list.find(item => item.id === id);
}

export default async function Example({ searchParams }: { searchParams: SearchParams }) {
   const characters = await db.character.findMany({ orderBy: { createdAt: 'desc' } });
   const character = getNameFromList(searchParams.delete || searchParams.edit, characters);

   return (
      <div className="overflow-x-auto">
         {searchParams.hasOwnProperty('delete') ? (
            <DeleteForm id={searchParams.delete as string} character={character} />
         ) : null}
         {searchParams.hasOwnProperty('edit') || searchParams.hasOwnProperty('add') ? (
            <EditItem id={searchParams.edit} character={character} />
         ) : null}
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>
                     <Link href={{ query: { add: 'new_character' } }} className="btn  btn-xs">
                        add
                     </Link>
                  </th>
               </tr>
            </thead>
            <tbody>
               {characters.map(item => (
                  <TableRow
                     key={item.id}
                     id={item.id}
                     name={item.name}
                     description={item.description || ''}
                     imageUrl={item.imageUrl}
                     color={item.color}
                  />
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
