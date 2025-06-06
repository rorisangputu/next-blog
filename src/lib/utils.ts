export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://next-blog-swart-mu.vercel.app/api";
