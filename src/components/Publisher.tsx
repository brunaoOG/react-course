import { useContext, useState } from "react";
import { PostsContext } from "../contexts/PostsContext";

export const Publisher = () => {
  const [tValue, setTitleValue] = useState("");
  const [bValue, setBodyValue] = useState("");
  const [uValue, setUserValue] = useState("");

  const ctxObject = useContext(PostsContext);

  const sendPostHandler = () => {
    ctxObject?.setPosts([
      ...ctxObject.posts,
      {
        id: ctxObject?.posts.length,
        title: tValue,
        body: bValue,
        user: uValue,
        date: new Date(),
      },
    ]);
    setTitleValue("");
    setBodyValue("");
    setUserValue("");
  };

  return (
    <div className="flex flex-col gap-1 bg-black/40 p-2 rounded-lg w-fit">
      <input
        type="text"
        placeholder="Título"
        className="text-black rounded-md px-1"
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        value={tValue}
      />
      <textarea
        placeholder="Corpo"
        className="text-black rounded-md px-1 pb-6 max-h-20"
        onChange={(e) => {
          setBodyValue(e.target.value);
        }}
        value={bValue}
      />
      <div className="flex justify-center gap-1">
        <p className="text-[10px] mr-0">Postando como: </p>
        <input
          type="text"
          placeholder="Usuário"
          className="text-black text-[10px] rounded-sm px-1"
          onChange={(e) => {
            setUserValue(e.target.value);
          }}
          value={uValue}
        />
      </div>
      <button
        className="self-end text-sm px-2 bg-blue-500 rounded-md"
        onClick={sendPostHandler}
      >
        Publicar
      </button>
    </div>
  );
};
