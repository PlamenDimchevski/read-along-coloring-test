import DemoText from './demo_text';
export default function List({ params }) {
   return (
      <div className="overflow-x-auto">
         <form>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Chapter name</span>
               </div>
               <input type="text" placeholder="Name" value="Lunch Meeting" className="input input-ghost w-full" />
            </label>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Part</span>
                  <span className="label-text-alt">From which part is this chapter</span>
               </div>
               <input
                  type="text"
                  placeholder="Name"
                  value="ascendance of a bookworm part 5 volume 9 part 5"
                  className="input input-ghost w-full"
               />
            </label>

            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Text</span>
               </div>
               <DemoText />
            </label>
            <div className="flex justify-between pt-4">
               <button className="btn btn-wide">Cancel</button>
               <button className="btn btn-wide btn-info">Proceed</button>
            </div>
         </form>
      </div>
   );
}
