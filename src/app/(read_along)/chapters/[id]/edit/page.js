import db from '@/src/lib/db';
export default async function List({ params }) {
   const chapter = await db.chapter.findFirst({ where: { id: params.id } });
   return (
      <div className="overflow-x-auto">
         <form>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Chapter name</span>
               </div>
               <input
                  type="text"
                  placeholder="Name"
                  defaultValue={chapter.title}
                  className="input input-ghost w-full"
               />
            </label>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Part</span>
                  <span className="label-text-alt">From which part is this chapter</span>
               </div>
               <input type="text" placeholder="Name" defaultValue={chapter.book} className="input input-ghost w-full" />
            </label>

            <div className="form-control w-full flex-row flex-wrap items-center justify-center gap-2">
               <div className="label">
                  <span className="label-text">Character</span>
               </div>
               <div className="basis-full"></div>
               <input type="radio" name="radio-7" className="radio-info radio" defaultChecked />
               <span className="label-text-alt">Red pill</span>
               <input type="radio" name="radio-7" className="radio-info radio" />
               <span className="label-text-alt">Red pill</span>
            </div>

            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Text</span>
               </div>
               <div className=" border border-base-300 p-2" dangerouslySetInnerHTML={{ __html: chapter.content }}></div>
            </label>
            <div className="flex justify-between pt-4">
               <button className="btn btn-wide">Cancel</button>
               <button className="btn btn-info btn-wide">Proceed</button>
            </div>
         </form>
      </div>
   );
}
