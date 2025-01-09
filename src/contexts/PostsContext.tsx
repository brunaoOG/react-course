import { createContext, ReactNode, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  user: string;
  date: Date;
};

type PostsType = {
  posts: Post[];
  setPosts: (p: Post[]) => void;
};

export const PostsContext = createContext<PostsType | null>(null);

type Props = {
  children: ReactNode;
};

export const PostsArea = ({ children }: Props) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 0,
      title: "Meus Bago ta Peludo",
      body: "Poisé galera, maquininha quebrou e a lamina corta a pele...",
      user: "machado_98",
      date: new Date(),
    },
  ]);


  
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
