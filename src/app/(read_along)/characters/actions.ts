'use server';

import db from '@/src/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function crudCharacter(formData: FormData) {
   const id = formData.get('characterId') as string;
   const type = formData.get('actionType') as string;

   switch (type) {
      case 'delete':
         await db.character.delete({
            where: {
               id,
            },
         });
         break;
      case 'add':
         await db.character.create({
            data: {
               name: formData.get('name') as string,
               description: formData.get('description') as string,
               color: formData.get('color') as string,
            },
         });
         break;
      case 'update':
         await db.character.update({
            where: { id },
            data: {
               name: formData.get('name') as string,
               description: formData.get('description') as string,
               color: formData.get('color') as string,
            },
         });
         break;
   }
   revalidatePath('/characters');
   redirect('/characters');
}
