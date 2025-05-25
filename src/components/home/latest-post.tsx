import { getBlogPosts } from "@/app/blog/utils";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  //console.log(latestPosts);
  return (
    <>
      <h1>Recently Published</h1>
      {latestPosts.map((post) => (
        <article key={post.slug}>{post.metadata.title}</article>
      ))}
    </>
  );
}
