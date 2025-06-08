import Container from "@/components/Container";
import { getPrivacyPolicy } from "../blog/utils";
import MainNav from "@/components/mainNav";
import { CustomMDX } from "@/components/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privary Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  const post = getPrivacyPolicy().find(
    (post) => post.slug === "privacy-policy"
  );

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}
