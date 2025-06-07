"use client";
import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "../icons";
import Link from "next/link";
import useSWR from "swr";

type PostData = {
  category: string;
  slug: string;
  title: string;
};

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) {
    return (
      <div>
        <h1>Failed to load</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <ul className="overflow-auto">
      {data?.map((post: PostData) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
