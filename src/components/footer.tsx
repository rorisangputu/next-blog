import { Icons } from "./icons";

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
                href="https://x.com/"
                target="blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <Icons.twitter
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
        </div>
      </div>
    </footer>
  );
}
