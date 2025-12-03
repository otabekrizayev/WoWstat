import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>World of Warcraft Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title} — {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
