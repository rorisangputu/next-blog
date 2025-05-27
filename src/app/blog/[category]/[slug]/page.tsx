import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Header from "@/components/Header";
import Container from "@/components/Container";
import BreadCrumb from "@/components/BreadCrumb";
import { CustomMDX } from "@/components/mdx";
import { NextPage } from "next";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category, // Add category
    slug: post.slug,
  }));
}

type Params = {
  params: { category: string; slug: string };
};

const Page: NextPage<Params> = async ({ params }) => {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
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
};

export default Page;
