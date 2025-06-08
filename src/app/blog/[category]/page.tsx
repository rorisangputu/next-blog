import { notFound } from "next/navigation";
import { getBlogPosts } from "@/app/blog/utils"; // Use alias if it's set up
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";
import { Metadata, NextPage } from "next";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  // Ensure unique categories to avoid duplicate paths
  const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.metadata.category))
  );

  return uniqueCategories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All articles regarding ${category}`,
  };
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const Page: NextPage<CategoryPageProps> = async ({ params }) => {
  const { category } = await params;

  // Filter posts by category
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider uppercase">
            {category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post) => (
              <Link
                key={post.slug}
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
};

export default Page;
