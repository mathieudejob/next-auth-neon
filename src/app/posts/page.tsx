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
        <div className="w-full flex justify-between items-center">
          <Link href={"/"}>Go back</Link>
        </div>
        <h1 className="text-5xl font-bold">All Posts ({posts.length})</h1>

        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <SessionData session={session} />
      </main>
    </div>
  );
}
