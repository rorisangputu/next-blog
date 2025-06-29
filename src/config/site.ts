type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    portfolio: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Rorisang Putu Blog",
  description:
    "An Open Source Technical Blog platform with Next.js 14 with prisma and markdown support.",
  url: "https://next-blog-swart-mu.vercel.app/",
  ogImage: "https://next-blog-swart-mu.vercel.app/og",
  links: {
    twitter: "https://x.com/df_rori",
    github: "https://github.com/rorisangputu",
    portfolio: "https://rorisang-dev.vercel.app/",
  },
};
