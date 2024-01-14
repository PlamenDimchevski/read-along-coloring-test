import { redirect } from "next/navigation";
import config from "@/config";

export default function Home({ searchParams }) {
  if (!!searchParams.code) {
    redirect("/login");
  }
  return <div>text</div>;
}
