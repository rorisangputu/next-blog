import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Header from "@/components/Header";
import Container from "@/components/Container";
import BreadCrumb from "@/components/BreadCrumb";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";
import ReportViews from "@/components/ReportViews";

// ✅ Static params for dynamic routes
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
    slug: post.slug,
  }));
}

// ✅ Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;

  const post = getBlogPosts().find(
    (p) =>
      p.slug === slug &&
      p.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metadata.title,
    description: post.metadata.summary || "Blog post",
  };
}

// ✅ Page component
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const post = getBlogPosts().find(
    (p) =>
      p.slug === slug &&
      p.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!post) notFound();

  return (
    <>
    <ReportViews category={post.metadata.category} slug={post.slug} title={post.metadata.title}/>
      <Header>
        <Container>
          <BreadCrumb category={post.metadata.category} slug={post.slug} />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}
