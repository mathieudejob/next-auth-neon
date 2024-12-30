import { prisma } from "@/lib/prisma";
import { PostCard } from "@/app/components/PostCard";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";

interface PostPageParams {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageParams) {
  const session = await auth();
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <SessionProvider basePath={"/auth"} session={session}> */}
        {/* <SessionProvider basePath={"/auth"}> */}
        <SessionProvider>
          <PostCard post={post} />
        </SessionProvider>
      </main>
    </div>
  );
}
