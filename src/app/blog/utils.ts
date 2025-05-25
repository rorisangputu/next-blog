import fs from "fs";
import path from "path";

//get all mdx files from dir
function getMdxFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

//Read data from files
function readMdxFile(filepath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filepath, "utf-8");
  return rawContent;
}
//present data and metadata
