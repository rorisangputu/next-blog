import Link from "next/link";

export default function BreadCrumb({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  return (
    <>
      <div className="flex gap-4 text-gray-500 font-medium">
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <p>/</p>
        <Link href={`/blog/${category}`}>
          <p className="capitalize">{category}</p>
        </Link>
        <p>/</p>
        <p className="text-gray-900">{slug}</p>
      </div>
    </>
  );
}
