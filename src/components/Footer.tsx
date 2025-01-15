import { useContext } from "react";
import { PostContext } from "../contexts/PostsContext";

export const Footer = () => {
  const postCtx = useContext(PostContext);
  return <footer className=" text-sm self-center">Publicações feitas hoje: {postCtx?.posts.length}</footer>;
};
