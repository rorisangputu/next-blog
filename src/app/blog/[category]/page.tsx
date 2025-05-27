import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";

export default function Page({ params }: { params: { category: string } }) {
  const category = params.category;
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === category
  );

  if (posts.length === 0) {
    notFound();
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, i) => (
            <Link key={i} href={`/blog/${post.metadata.category}/${post.slug}`}>
              {post.metadata.title}
            </Link>
          ))}
      </div>
    </>
  );
}
