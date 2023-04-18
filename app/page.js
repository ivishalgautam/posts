import Navbar from "./components/Navbar";
import Post from "./components/Post";

async function getPosts() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const { posts } = await getPosts();
  return (
    <>
      <Navbar />
      <div className="container">
        {/* this is container for all the post for flex */}
        {posts?.map((post) => {
          return <Post {...post} />;
        })}
      </div>
    </>
  );
}
