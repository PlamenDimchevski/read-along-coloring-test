import Link from 'next/link';
import { Character } from '@prisma/client';
import { crudCharacter } from './actions';

enum ButtonTypes {
   hidden = 'hidden',
   primary = 'btn-primary',
   warning = 'btn-error',
}

interface DialogButton {
   title?: string;
   type: ButtonTypes;
}

const defaultAction = {
   type: ButtonTypes.hidden,
};

function Dialog({ action = defaultAction, children }: { action?: DialogButton; children?: React.ReactNode }) {
   return (
      <dialog id="mode_delete_character" className="modal modal-open">
         <div className="modal-box">
            <form action={crudCharacter}>
               {children}
               <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <Link href="/characters" className="btn">
                     Close
                  </Link>
                  <button className={`btn ${action.type}`}>{action.title}</button>
               </div>
            </form>
         </div>
      </dialog>
   );
}

export function DeleteForm({ id, character }: { id: string; character?: Character }) {
   if (id && !character) {
      return (
         <Dialog>
            <h3 className="text-lg font-bold">This element is already deleted!</h3>
         </Dialog>
      );
   }
   return (
      <Dialog action={{ type: ButtonTypes.warning, title: 'Yes' }}>
         <input type="hidden" name="characterId" value={id} />
         <input type="hidden" name="actionType" value="delete" />
         <h3 className="text-lg font-bold">Delete {character?.name}!</h3>
         <p className="py-4">Are you sure that you want to delete {character?.name}?</p>
      </Dialog>
   );
}

export function EditItem({ id, character }: { id?: string; character?: Character }) {
   return (
      <Dialog action={{ type: ButtonTypes.primary, title: 'Save' }}>
         <input type="hidden" name="actionType" value={id ? 'update' : 'add'} />
         <input type="hidden" name="characterId" value={id} />
         <h3 className="text-lg font-bold">Add character!</h3>
         <label className="form-control w-full max-w-xs">
            <div className="label">
               <span className="label-text">Character name</span>
            </div>
            <input
               type="text"
               placeholder="Name"
               name="name"
               defaultValue={character?.name}
               className="input input-bordered w-full max-w-xs"
            />
         </label>
         <label className="form-control w-full max-w-xs">
            <div className="label">
               <span className="label-text">Short description</span>
            </div>
            <input
               type="text"
               placeholder="description"
               name="description"
               className="input input-bordered w-full max-w-xs"
               defaultValue={character?.description || ''}
            />
            <div className="label">
               <span className="label-text-alt">Can be used for full name or epitets</span>
            </div>
         </label>
         <label className="form-control w-full max-w-xs">
            <div className="label">
               <span className="label-text">Color</span>
            </div>
            <input
               type="color"
               name="color"
               defaultValue={character?.color}
               className="input input-bordered w-full max-w-xs"
            />
         </label>
      </Dialog>
   );
}
