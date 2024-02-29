import { redirect } from "next/navigation"; //redirect함수

export default function Home() {
  redirect("/blog");
}
