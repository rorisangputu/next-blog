import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-post";
import PopularPosts from "@/components/home/popular-posts";
import TopCategories from "@/components/home/top-categories";
import MainNav from "@/components/mainNav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <hr className="w-[40%] mx-auto mb-10 text-gray-300" />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4 capitalize">Top categories</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-5">
            <h1 className="font-bold mb-4">Top Posts</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
