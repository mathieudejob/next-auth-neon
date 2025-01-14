import Link from "next/link";
import { SignIn, SignOut } from "./components/AuthComponents";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold">Home Page</h1>
        <Link href={"/posts"}>Posts Page</Link>
        {session ? (
          <div>
            <p>Welcome, {session.user?.name || "User"} !</p>
            <SignOut />
          </div>
        ) : (
          <SignIn />
        )}

        {session?.user ? (
          <Link href="/admin">
            <button className="w-40 h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Go to admin
            </button>
          </Link>
        ) : (
          <div className="relative group w-40 h-12 bg-gray-300 text-gray-500 rounded-lg flex items-center justify-center cursor-not-allowed">
            <span>Go to admin</span>
            <div className="absolute top-full left-0 w-full text-center text-sm text-red-500 opacity-0 group-hover:opacity-100 mt-1 transition-opacity">
              You must be signed in to use this feature
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
