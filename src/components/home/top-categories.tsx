import { categories } from "@/lib/place-data";
import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
      {categories.map((category) => (
        <button
          className="bg-gray-200 text-gray-800 shadow-gray-300 shadow-sm 
            text-sm font-semibold p-3 rounded-lg hover:scale-110 transition-all"
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
