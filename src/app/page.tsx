import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-post";
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
        <div>
          <div>
            <h1>Top categories</h1>
            {/* <TopCategories /> */}
          </div>
          <div>
            <h1>Top Posts</h1>
            {/* <PopularPosts /> */}
          </div>
        </div>
      </main>
    </Container>
  );
}
