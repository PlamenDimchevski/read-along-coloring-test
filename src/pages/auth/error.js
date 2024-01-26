import '@/src/app/globals.css';
import { Inter } from 'next/font/google';
import { getProviders } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

const errors = {
   default: {
      message: (
         <>
            <h2 className="card-title">Error!</h2>
         </>
      ),
      returnToHome: true,
      retrySignIn: false,
   },
   configuration: {
      message: (
         <>
            <h2 className="card-title">Server error!</h2>
            <p>There is a problem with the server configuration.</p>
            <p>Check the server logs for more information.</p>
         </>
      ),
      returnToHome: true,
      retrySignIn: false,
   },
   accessdenied: {
      message: (
         <>
            <h2 className="card-title">Access Denied!</h2>
            <p>You do not have permission to sign in.</p>
         </>
      ),
      returnToHome: true,
      retrySignIn: true,
   },
   verification: {
      message: (
         <>
            <h2 className="card-title">Unable to sign in!</h2>
            <p>The sign in link is no longer valid.</p>
            <p>It may have been used already or it may have expired.</p>
         </>
      ),
      returnToHome: true,
      retrySignIn: true,
   },
};

const SignIn = () => {
   const { error } = useRouter().query;
   const { message, returnToHome, retrySignIn } = errors[error.toLowerCase()] ?? errors.default;
   return (
      <div className={inter.className}>
         <div className=" prose prose-sm absolute m-0 grid h-full w-full max-w-none place-content-center p-0 md:prose-base">
            <div className="card w-96 bg-neutral text-neutral-content">
               <div className="card-body items-center text-center">
                  {message}
                  <div className="card-actions flex-1 justify-end">
                     {retrySignIn && (
                        <button className="btn btn-primary" onClick={() => signIn()}>
                           Sign in
                        </button>
                     )}
                     {returnToHome && (
                        <Link href="/" className="btn btn-ghost">
                           Home
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export async function getServerSideProps() {
   return { props: { providers: await getProviders() } };
}
export default SignIn;
