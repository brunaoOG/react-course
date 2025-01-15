"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { PostContext, PostProvider } from "../contexts/PostsContext";

const Page = () => {
  return (
    <div>
      <PostProvider>
        <div className="p-10 gap-3 flex flex-col w-fit">
          <Header />
          <PostList />
          <Footer />
        </div>
      </PostProvider>
    </div>
  );
};

export default Page;
