import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
    let { data, content } = readMdxFile(path.join(dir, file));
  });
}
