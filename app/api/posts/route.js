import getPosts from "./getPosts";
import { NextResponse } from "next/server";

export async function GET(request) {
  const posts = await getPosts();
  return NextResponse.json(posts);
}
