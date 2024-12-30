import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import SessionData from "../components/SessionData";

export default async function Posts() {
  const posts = await prisma.post.findMany();
  const session = await auth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href={"/"}>Go back</Link>
        <h1 className="text-5xl font-bold">Admin page</h1>
        <p>You are here because you are well signed in ! :à</p>
        <SessionData session={session} />
      </main>
    </div>
  );
}
