import { popularposts } from "@/lib/place-data";
import { Icons } from "../icons";
import Link from "next/link";
export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularposts.map((post, i) => (
        <Link href={`/blog/`} key={i}>
          <li className="flex items-center gap-2 cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
