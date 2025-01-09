import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";

export const Footer = () => {
  const postsLength = useContext(PostsContext)?.posts.length;

  return <div>Publicações feitas hoje: {postsLength}</div>;
};
