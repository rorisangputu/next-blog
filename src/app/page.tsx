import LatestPosts from "@/components/home/latest-post";
import MainNav from "@/components/mainNav";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </>
  );
}
