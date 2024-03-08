'use client';

import { useRef } from 'react';

export default function ContentEditing({ content }) {
   const area = useRef(null);
   function onEdit(e) {
      e.preventDefault();
      //   console.log(area.current);
      var selection = window?.getSelection().getRangeAt(0);
      var selectedText = selection.extractContents();
      var span = document.createElement('span');
      span.style.color = 'red';
      span.appendChild(selectedText);
      selection.insertNode(span);
   }

   function extendSelection(e) {
      let selection = window.getSelection();
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
