import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function CharacterImage({ imageUrl, name }: { imageUrl: string | null; name: string }) {
   if (!imageUrl) {
      return <UserCircleIcon />;
   }
   return <img src={imageUrl} alt={`${name} icon`} />;
}

function Description({ description }: { description: string }) {
   if (!description) {
      return null;
   }

   return <div className="text-sm opacity-50">{description}</div>;
}

export default function TableRow({
   id,
   name,
   description,
   imageUrl,
   color,
}: {
   id: string;
   name: string;
   description: string;
   imageUrl: string | null;
   color: string;
}) {
   return (
      <tr>
         <td>
            <div className="flex items-center gap-3">
               <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                     <CharacterImage imageUrl={imageUrl} name={name} />
                  </div>
               </div>
               <div>
                  <div className="font-bold">{name}</div>
                  <Description description={description} />
               </div>
            </div>
         </td>
         <td>
            <div className="badge badge-info gap-2" style={{ backgroundColor: color }}></div>
         </td>
         <th>
            <Link href={{ query: { edit: id } }} className="btn btn-ghost btn-xs">
               edit
            </Link>
            <Link href={{ query: { delete: id } }} className="btn btn-ghost btn-xs">
               delete
            </Link>
         </th>
      </tr>
   );
}
