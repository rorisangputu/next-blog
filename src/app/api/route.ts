import { db } from "@/db";

export async function GET() {
  return new Response("Hello", { status: 200 });
}

export async function POST(request: Request) {
  const { slug, category, title } = await request.json();

  try {
    await db.blog.upsert({
      where: { slug }, // Unique identifier
      update: {
        view_count: {
          increment: 1,
        },
      },
      create: {
        slug,
        title,
        category,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error updating view: ", error);
    return new Response("Failed to post to DB", { status: 500 });
  }

  return new Response("Successfully posted to DB", { status: 200 });
}
