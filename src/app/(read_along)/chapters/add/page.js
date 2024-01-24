export default function List() {
   return (
      <div className="overflow-x-auto">
         <form>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Chapter name</span>
               </div>
               <input type="text" placeholder="Name" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Part</span>
                  <span className="label-text-alt">From which part is this chapter</span>
               </div>
               <input type="text" placeholder="Name" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Text</span>
               </div>
               <textarea className="textarea textarea-bordered min-h-[32rem]"></textarea>
            </label>
            <div className="flex justify-between pt-4">
               <button className="btn btn-wide">Cancel</button>
               <button className="btn btn-info btn-wide">Proceed</button>
            </div>
         </form>
      </div>
   );
}
