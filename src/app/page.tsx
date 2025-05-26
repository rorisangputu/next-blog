import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-post";
import MainNav from "@/components/mainNav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <hr className="w-[30%] mx-auto mb-10 text-gray-300" />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
