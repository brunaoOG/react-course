import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostsContext";

export const Header = () => {
  const postCtx = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddButton = () => {
    if (!title && !body) {
      return;
    }
    postCtx?.dispatch({
      type: "add",
      payload: { title, body },
    });
    setTitle("");
    setBody("");
  };

  return (
    <header>
      <h1 className="mb-5 bg-white/5 pr-3 text-[#503581] font-bold text-xl w-fit p-2 rounded-lg">
        🐦‍⬛Twitter
      </h1>
      <div className="p-4 bg-black/60 rounded-lg flex flex-col gap-2 w-fit min-w-[300px] max-w-[330px]">
        <h3 className="font-bold text-lg">Publique já!</h3>
        <input
          type="text"
          placeholder="Insira o título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md px-1 text-black"
        />
        <textarea
          placeholder="Insira o Conteúdo do post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="rounded-md px-1 text-black"
        ></textarea>
        <button
          onClick={handleAddButton}
          className="bg-[#503581] rounded-md py-1"
        >
          Postar
        </button>
      </div>
    </header>
  );
};
