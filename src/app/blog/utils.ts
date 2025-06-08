import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface BlogPostMetadata {
  title: string;
  category: string;
  publishedAt: string;
  summary: string;
}

interface BlogPost {
  metadata: BlogPostMetadata;
  slug: string;
  content: string;
}

//get all mdx files from dir
function getMdxFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

//Read data from files
function readMdxFile(filepath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filepath, "utf-8");
  return matter(rawContent);
}

//present data and metadata
function getMdxData(dir: string) {
  const mdxFiles = getMdxFiles(dir);

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMdxFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: metadata as BlogPostMetadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): BlogPost[] {
  try {
    return getMdxData(
      path.join(process.cwd(), "src", "app", "blog", "contents")
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export function getTermsOfServices(): BlogPost[] {
  try {
    return getMdxData(
      path.join(process.cwd(), "src", "app", "terms-of-services")
    );
  } catch (error) {
    console.error("Error fetching content:", error);
    return [];
  }
}

export function formatDate(date: string, includeRelative = true) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDay();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
