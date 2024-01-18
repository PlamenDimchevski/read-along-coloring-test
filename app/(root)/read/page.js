import { redirect } from "next/navigation";
import config from "@/config";

export default function Home({ searchParams }) {
  // if (!!searchParams.code) {
  //   redirect("/login");
  // }
  // rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
  return (
    <>
      <div className="flex sm:items-center">
        <div className="flex-auto">
          <h1 className="text-base font-semibold leading-6">Pages</h1>
          <p className=" mt-2 leading-5 text-sm">available pages</p>
        </div>
        <div className=" mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button className=" block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm leading-5 font-semibold text-white">
            Add new
          </button>
        </div>
      </div>
      <div className="flow-root mt-8">
        <div className=" mx-4 sm:mx-6 lg:-mx-8 -my-2 overflow-x-auto">
          <div className=" inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="border-collapse min-w-full indent-0 border-inherit">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className=" px-3 pl-4 sm:pl-0 text-left text-sm leading-5 font-semibold"
                  >
                    Chapter name
                  </th>
                  <th
                    scope="col"
                    className=" px-3 pl-4 sm:pl-0 text-left text-sm leading-5 font-semibold"
                  >
                    Part
                  </th>
                  <th
                    scope="col"
                    className=" px-3 pl-4 sm:pl-0 text-left text-sm leading-5 font-semibold"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="border-gray-700 border-y-0">
                <tr>
                  <td className="">This name</td>
                  <td>Part 1</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
