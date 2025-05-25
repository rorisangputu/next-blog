import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const MainNav = () => (
  <div className="py-10 flex flex-col gap-4 items-center md:gap-0  md:flex-row md:justify-between z-50">
    <Link href={"/"} className="flex items-center gap-2">
      <Icons.logo className="h-6 w-6" />
      <h1 className="font-bold text-2xl">Rori Blog</h1>
    </Link>
    <div className="flex flex-row gap-10 items-center">
      <ul className="flex flex-row gap-10">
        {links.map((link) => (
          <Link href={link.link} key={link.link}>
            <li className="font-medium hover:text-blue-400">{link.title}</li>
          </Link>
        ))}
      </ul>
      <div>
        <Link href={"/rss"}>
          <Icons.rss className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </div>
);

export default MainNav;

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Posts",
    link: "/posts",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
