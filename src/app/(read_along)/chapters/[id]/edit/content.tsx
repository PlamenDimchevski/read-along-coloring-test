'use client';

import { useRef } from 'react';

type TODO = any | undefined;

export default function ContentEditing({ content }: { content: string }) {
   const area: TODO = useRef(null);
   function onEdit(e: TODO) {
      e.preventDefault();
      //   console.log(area.current);
      var selection = window?.getSelection().getRangeAt(0);
      var selectedText = selection.extractContents();
      var span = document.createElement('span');
      span.style.color = 'red';
      span.appendChild(selectedText);
      selection.insertNode(span);
   }

   function extendSelection(e: TODO) {
      let selection: TODO = window.getSelection();
      selection.modify('move', 'backward', 'Sentence');
      selection.modify('extend', 'forward', 'Sentence');
   }

   return (
      <>
         <button onClick={onEdit}>mark</button>
         <div
            onDoubleClick={extendSelection}
            contentEditable={true}
            ref={area}
            className=" border border-base-300 p-2"
            dangerouslySetInnerHTML={{ __html: content || '' }}
         ></div>
      </>
   );
}
