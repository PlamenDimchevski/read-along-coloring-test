import { CheckCircleIcon } from '@heroicons/react/24/solid';
export default function TimeLine() {
   return (
      <ul className="timeline timeline-vertical timeline-compact ">
         <li>
            <div className="timeline-start timeline-box">Character 1</div>
            <div className="timeline-middle">
               <CheckCircleIcon className="h-5 w-5 text-primary" />
            </div>
            <hr className="bg-primary" />
         </li>
         <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Character 2</div>
            <div className="timeline-middle">
               <CheckCircleIcon className="h-5 w-5 text-primary" />
            </div>
            <hr className="bg-primary" />
         </li>
         <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Character 2</div>
            <div className="timeline-middle">
               <CheckCircleIcon className="h-5 w-5 text-primary" />
            </div>
            <hr />
         </li>
         <li>
            <hr />
            <div className="timeline-start timeline-box">Character 3</div>
            <div className="timeline-middle">
               <CheckCircleIcon className="h-5 w-5" />
            </div>
            <hr />
         </li>
         <li>
            <hr />
            <div className="timeline-start timeline-box">Character 4</div>
            <div className="timeline-middle">
               <CheckCircleIcon className="h-5 w-5" />
            </div>
         </li>
      </ul>
   );
}
