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
          </div>
        </div>
      </div>
    </footer>
  );
}
