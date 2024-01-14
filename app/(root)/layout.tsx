import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen ">
          <aside className="flex flex-col w-72">
            <div className="flex flex-col gap-y-5 flex-grow px-6 bg-gray-900">
              <div className="flex flex-shrink-0 items-center h-16"></div>
              <NavBar />
            </div>
          </aside>
          <main className=" w-full py-10 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
