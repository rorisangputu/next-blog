import { db } from "@/db";

export async function POST(request:Request) {
    const { slug, category, title } = await request.json();
    
    try {
        const existingPost = await db.blog.findUnique({
            where: {slug: slug},

        });

        if(existingPost){
            await db.blog.update({
                where: {slug: slug},
                data: {
                    view_count: { increment: 1 }
                }
            })
        }else {
            await db.blog.create({
                data: {
                    slug: slug,
                    title: title,
                    category: category,
                    updatedAt: new Date()
                }
            });
        }
    } catch (error) {
        console.error("Error updating view: ", error );
        return new Response("Failed to post to DB", { status: 500})
    }

    return new Response("Successfully posted to DB", {status: 200 })
}