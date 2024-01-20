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

            <div className="form-control w-full flex-row justify-center items-center gap-2 flex-wrap">
               <div className="label">
                  <span className="label-text">Character</span>
               </div>
               <div className="basis-full"></div>
               <input type="radio" name="radio-7" className="radio radio-info" checked />
               <span className="label-text-alt">Red pill</span>
               <input type="radio" name="radio-7" className="radio radio-info" />
               <span className="label-text-alt">Red pill</span>
            </div>

            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Text</span>
               </div>
               <div className=" border border-base-300 p-2">
                  <DemoText />
               </div>
            </label>
            <div className="flex justify-between pt-4">
               <button className="btn btn-wide">Cancel</button>
               <button className="btn btn-wide btn-info">Proceed</button>
            </div>
         </form>
      </div>
   );
}
