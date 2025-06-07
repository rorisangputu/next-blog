import { POSTS } from "@/lib/constants";
import { Icons } from "./icons";
import Link from "next/link";
import { createSubscriber } from "@/lib/actions";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">Rori Blog</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay up to date with the latest updates from my blog
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/rorisang-putu-460854212/"
                target="blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <Icons.linkedin
                  className="h-6 w-6 text-gray-500 hover:text-gray-700 
                    dark:text-gray-400 dark:hover:text-gray-200"
                />
              </a>
              <a
                href="https://github.com/rorisangputu"
                target="blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <Icons.gitHub
                  className="h-6 w-6 text-gray-500 hover:text-gray-700 
                    dark:text-gray-400 dark:hover:text-gray-200"
                />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold">Blog</h2>
            <ul className="space-y-2 text-sm">
              {POSTS.map((POST) => (
                <li key={POST.title}>
                  <Link
                    href={`/blog/${POST.href}`}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {POST.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:rorisangputu@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href={"/terms-of-use"}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <form action={createSubscriber}>
              <div className="flex flex-col space-x-2 gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border-gray-400 border p-1 flex-1 rounded-md bg-gray-50"
                />
                <button
                  type="submit"
                  className="bg-black text-white py-1 px-2 text-sm font-semibold rounded-md w-[100px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="mt-8 border-gray-200 border-t pt-4 text-center text-xs 
        text-gray-500 dark:text-gray-400"
        >
          <p>&copy; 2025 Rorisang Putu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
