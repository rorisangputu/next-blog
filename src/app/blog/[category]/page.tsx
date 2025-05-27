import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";

export default function Page({ params }: { params: { category: string } }) {
  const category = params.category;
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === category
  );

  if (!posts.length) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider uppercase">
            {posts[0]?.metadata.category}
          </h1>
        </Container>
      </Header>
      <Container>
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
              <Link
                key={i}
                href={`/blog/${post.metadata.category}/${post.slug}`}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  publishedAt={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
