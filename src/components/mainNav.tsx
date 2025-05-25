import React from "react";

const MainNav = () => (
  <div className="py-10 flex flex-row justify-between">
    <div>
      <h1 className="font-bold">Rori Blog</h1>
    </div>
    <div>
      <ul className="flex flex-row gap-2">
        {links.map((link) => (
          <li className="font-medium hover:text-blue-400" key={link.link}>
            {link.title}
          </li>
        ))}
      </ul>
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
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
