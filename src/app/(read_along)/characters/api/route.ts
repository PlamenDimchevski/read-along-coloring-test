import db from '@/src/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
   const { name, description, color, imageUrl } = await request.json();
   const result = await db.character.create({
      data: {
         name,
         description,
         color,
         imageUrl,
      },
   });
   return NextResponse.json({ error: false, message: 'Success' });
}

export async function DELETE(request: Request) {
   const { id } = await request.json();
   const result = await db.character.delete({
      where: {
         id,
      },
   });
   return NextResponse.json({ error: false, message: 'Success' });
}

export async function PATCH(request: Request) {
   const { id, name, description, color, imageUrl } = await request.json();
   const result = await db.character.update({
      where: { id },
      data: {
         name,
         description,
         color,
      },
   });
   return NextResponse.json({ error: false, message: 'Success' });
}
