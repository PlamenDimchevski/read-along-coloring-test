import DemoText from './demo_text';
import TimeLine from './timeline';
export default function List({ params }) {
   return (
      <section className="flex">
         <aside className="min-w-max">
            <TimeLine />
         </aside>
         <article className="prose">
            <h1>Lunch Meeting</h1>
            <DemoText />
         </article>
      </section>
   );
}
