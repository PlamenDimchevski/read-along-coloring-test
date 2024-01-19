'use client';

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

export default function Example() {
   const modal = useRef();
   const modalAdd = useRef();
   function deleteElement() {
      modal.current.showModal();
   }
   function addElement() {
      modalAdd.current.showModal();
   }
   return (
      <div className="overflow-x-auto">
         <dialog ref={modalAdd} id="my_modal_2" className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">Add character!</h3>
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
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn btn-primary">Save</button>
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         <dialog ref={modal} id="my_modal_1" className="modal">
            <div className="modal-box">
               <h3 className="font-bold text-lg">Hello!</h3>
               <p className="py-4">Press ESC key or click the button below to close</p>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>
                     <button onClick={addElement} className="btn  btn-xs">
                        add
                     </button>
                  </th>
               </tr>
            </thead>
            <tbody>
               {/* row 1 */}
               <tr>
                  <td>
                     <div className="flex items-center gap-3">
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <UserCircleIcon />
                           </div>
                        </div>
                        <div>
                           <div className="font-bold">Roozemain</div>
                           <div className="text-sm opacity-50">Rozemyne Tochter Linkberg Adotie Ehrenfest</div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className="badge badge-info gap-2" style={{ backgroundColor: 'midnightblue' }}></div>
                  </td>
                  <th>
                     <button className="btn btn-ghost btn-xs">edit</button>
                     <button onClick={deleteElement} className="btn btn-ghost btn-xs">
                        delete
                     </button>
                  </th>
               </tr>
               {/* row 2 */}
               <tr>
                  <td>
                     <div className="flex items-center gap-3">
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <UserCircleIcon />
                           </div>
                        </div>
                        <div>
                           <div className="font-bold">Ferdinand</div>
                           <div className="text-sm opacity-50">Quinta</div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className="badge badge-info gap-2" style={{ backgroundColor: 'blue' }}></div>
                  </td>
                  <th>
                     <button className="btn btn-ghost btn-xs">edit</button>
                     <button onClick={deleteElement} className="btn btn-ghost btn-xs">
                        delete
                     </button>
                  </th>
               </tr>
               {/* row 3 */}
               <tr>
                  <td>
                     <div className="flex items-center gap-3">
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <UserCircleIcon />
                           </div>
                        </div>
                        <div>
                           <div className="font-bold">Clarissa</div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className="badge badge-info gap-2" style={{ backgroundColor: 'brown' }}></div>
                  </td>
                  <th>
                     <button className="btn btn-ghost btn-xs">edit</button>
                     <button onClick={deleteElement} className="btn btn-ghost btn-xs">
                        delete
                     </button>
                  </th>
               </tr>
               {/* row 4 */}
               <tr>
                  <td>
                     <div className="flex items-center gap-3">
                        <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                              <UserCircleIcon />
                           </div>
                        </div>
                        <div>
                           <div className="font-bold">Hartmut</div>
                        </div>
                     </div>
                  </td>
                  <td>
                     <div className="badge badge-info gap-2" style={{ backgroundColor: 'red' }}></div>
                  </td>
                  <th>
                     <button className="btn btn-ghost btn-xs">edit</button>
                     <button onClick={deleteElement} className="btn btn-ghost btn-xs">
                        delete
                     </button>
                  </th>
               </tr>
            </tbody>
            {/* foot */}
            <tfoot>
               <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th></th>
               </tr>
            </tfoot>
         </table>
      </div>
   );
}
