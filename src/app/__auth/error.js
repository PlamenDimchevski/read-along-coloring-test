import { getCsrfToken } from 'next-auth/react';
/** Renders an error page. */
export default function ErrorPage(props) {
   const { url, error = 'default', theme } = props;
   const signinPageUrl = `${url}/signin`;

   const errors = {
      default: {
         status: 200,
         heading: 'Error',
         message: (
            <p>
               <a className="site" href={url?.origin}>
                  {url?.host}
               </a>
            </p>
         ),
      },
      configuration: {
         status: 500,
         heading: 'Server error',
         message: (
            <div>
               <p>There is a problem with the server configuration.</p>
               <p>Check the server logs for more information.</p>
            </div>
         ),
      },
      accessdenied: {
         status: 403,
         heading: 'Access Denied',
         message: (
            <div>
               <p>You do not have permission to sign in.</p>
               <p>
                  <a className="button" href={signinPageUrl}>
                     Sign in
                  </a>
               </p>
            </div>
         ),
      },
      verification: {
         status: 403,
         heading: 'Unable to sign in',
         message: (
            <div>
               <p>The sign in link is no longer valid.</p>
               <p>It may have been used already or it may have expired.</p>
            </div>
         ),
         signin: (
            <a className="button" href={signinPageUrl}>
               Sign in
            </a>
         ),
      },
   };

   const { status, heading, message, signin } = errors[error.toLowerCase()] ?? errors.default;

   // return (
   //    <div className="error">
   //       {theme?.brandColor && (
   //          <style
   //             dangerouslySetInnerHTML={{
   //                __html: `
   //      :root {
   //        --brand-color: ${theme?.brandColor}
   //      }
   //    `,
   //             }}
   //          />
   //       )}
   //       <div className="card">
   //          {theme?.logo && <img src={theme.logo} alt="Logo" className="logo" />}
   //          <h1>{heading}</h1>
   //          <div className="message">{message}</div>
   //          {signin}
   //       </div>
   //    </div>
   // );

   return (
      <div className=" prose prose-sm absolute m-0 grid h-full w-full max-w-none place-content-center bg-gray-100 p-0 md:prose-base">
         <div className=" text-center">
            <div className=" mx-0 my-8 w-96 rounded-3xl bg-white px-8 py-5 ">
               <h1>Access Denied</h1>
               <div className=" mb-6">
                  <div>
                     <p>You do not have permission to sign in.</p>
                     <p>
                        <a className="btn" href={signinPageUrl}>
                           Sign in
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export async function getServerSideProps(context) {
   const csrfToken = await getCsrfToken(context);
   return {
      props: { csrfToken },
   };
}
