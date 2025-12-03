import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "content/posts");

export function getPost(slug) {
  const file = fs.readFileSync(path.join(postsDir, slug + ".md"), "utf8");
  const { data, content } = matter(file);
  return { data, content };
}

export function getAllPosts() {
  return fs
    .readdirSync(postsDir)
    .map((file) => {
      const slug = file.replace(".md", "");
      const { data } = getPost(slug);
      return { slug, ...data };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
