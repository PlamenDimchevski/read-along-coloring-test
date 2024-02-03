'use client';
import { experimental_useFormState as useFormState } from 'react-dom';
import { parsContent } from './actions';

export default function List() {
   const [state, formAction] = useFormState(parsContent, { html: '' });
   return (
      <div className="overflow-x-auto">
         <form action={formAction}>
            <label className="form-control w-full">
               <div className="label">
                  <span className="label-text">Paste content</span>
                  <span className="label-text-alt">Paste the content from PrePub here</span>
               </div>
               <textarea className="textarea textarea-bordered min-h-[32rem]" name="content"></textarea>
            </label>
            <div className="flex justify-between pt-4">
               <button className="btn btn-wide">Cancel</button>
               <button className="btn btn-info btn-wide">Proceed</button>
            </div>
         </form>
         <article className="prose" dangerouslySetInnerHTML={{ __html: state.html }}></article>
      </div>
   );
}
