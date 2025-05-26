import { popularposts } from "@/lib/place-data";
import { Icons } from "../icons";
export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularposts.map((post, i) => (
        <li className="flex items-center gap-2 cursor-pointer py-2" key={i}>
          <Icons.arrowRight className="h-6 w-6" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}
