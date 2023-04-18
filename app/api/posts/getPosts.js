import { headers } from "@/next.config";

export default async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();
  return posts;
}
