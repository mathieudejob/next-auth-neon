"use client"; // Client-side rendering is necessary for interactivity
import Link from "next/link";
import { useSession } from "next-auth/react";
import SessionData from "./SessionData";

interface Post {
  title: string;
  content: string;
}

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { data: session, status } = useSession();
  console.log(session);

  if (session === undefined) return null;

  return (
    <div className="post-card">
      <Link href="/posts">Go back</Link>

      <h1 className="text-5xl font-bold mt-4">{post?.title}</h1>
      <p className="mt-4 text-lg">{post?.content}</p>

      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <SessionData session={session} />
      )}
    </div>
  );
};
