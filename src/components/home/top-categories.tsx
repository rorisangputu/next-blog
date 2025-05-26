import { categories } from "@/lib/place-data";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {categories.map((category) => (
        <button
          className="bg-gray-200 text-gray-800 text-md font-semibold p-3 rounded-lg"
          key={category}
        >
          <Link href={`/blog/${category}`}>
            <p>{category}</p>
          </Link>
        </button>
      ))}
    </div>
  );
}
