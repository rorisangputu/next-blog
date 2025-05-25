import { getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  //console.log(latestPosts);
  return (
    <>
      <h1>Recently Published</h1>
      {latestPosts.map((post) => (
        <article key={post.slug} className="text-wrap max-w-md my-10">
          <Link href={`/`}>
            <h3 className="font-bold py-2 leading-5 hover:text-blue-400">
              {post.metadata.title}
            </h3>
          </Link>
          <p className="leading-8 my-5">{post.metadata.summary}</p>
        </article>
      ))}
    </>
  );
}
