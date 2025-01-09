"use client";

import { useState } from "react";
import { Main } from "../components/Header";
import { ContextArea, UserContext } from "../contexts/UserContext";
import { PostsArea } from "../contexts/PostsContext";

const Page = () => {
  return (
    <div className="p-5">
      <PostsArea>
        <Main />
      </PostsArea>
    </div>
  );
};

export default Page;
