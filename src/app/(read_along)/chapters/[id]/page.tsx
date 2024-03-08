import TimeLine from './timeline';
import db from '@/src/lib/db';
export default async function List({ params }: { params: any }) {
   const chapter = await db.chapter.findFirst({ where: { id: params.id } });
   return (
      <section className="flex">
         <aside className="min-w-max">
            <TimeLine />
         </aside>
         <article className="prose">
            <h1>{chapter?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: chapter?.content || '' }} />
         </article>
      </section>
   );
}
