export default function Dialog({
   children,
   searchParams,
}: {
   children: React.ReactNode;
   searchParams: { [key: string]: string };
}) {
   if (!searchParams.modal) {
      return null;
   }
   return (
      <dialog className="modal modal-open">
         <div className="modal-box">{children}</div>
      </dialog>
   );
}

/*
<dialog id="my_modal_2" className="modal">
            <div className="modal-box">
               <h3 className="text-lg font-bold">Add character!</h3>
               <label className="form-control w-full max-w-xs">
                  <div className="label">
                     <span className="label-text">Character name</span>
                  </div>
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
               </label>
               <label className="form-control w-full max-w-xs">
                  <div className="label">
                     <span className="label-text">Short description</span>
                  </div>
                  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                  <div className="label">
                     <span className="label-text-alt">Can be used for full name or epitets</span>
                  </div>
               </label>
               <label className="form-control w-full max-w-xs">
                  <div className="label">
                     <span className="label-text">Color</span>
                  </div>
                  <input type="color" placeholder="Name" className="input input-bordered w-full max-w-xs" />
               </label>
               <div className="modal-action">
                  <form method="dialog">
                     {if there is a button in form, it will close the modal }
                     <button className="btn btn-primary">Save</button>
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         */
