export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://next-blog-swart-mu.vercel.app/api";

type ResponseData = {
  category: string;
  title: string;
  slug: string;
}[];
export const fetcher = (
  ...args: Parameters<typeof fetch>
): Promise<ResponseData> => fetch(...args).then((res) => res.json());
