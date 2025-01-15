import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostsContext";

export const PostList = () => {
  const postCtx = useContext(PostContext);

  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [activeEditPostId, setEditPostId] = useState<null | number>(null);
  const [activeOptionsPostId, setOptionsPostId] = useState<null | number>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlers = {
    ToggleOptions: () => {
      setShowOptions(!showOptions);
    },
    Remove: (id: number) => {
      postCtx?.dispatch({ type: "remove", payload: { id } });
      handlers.ToggleOptions();
      setIsEditing(false);
      setEditPostId(null);
    },
    Update: (title: string, body: string, id: number) => {
      setTitle("");
      setBody("");
      postCtx?.dispatch({ type: "edit", payload: { id, title, body } });
      setEditPostId(null);
      setOptionsPostId(null);
    },
  };

  return (
    <div className="flex flex-col gap-3">
      {postCtx?.posts.map((item) => {
        return (
          <div
            key={item.id}
            className=" relative pb-10 p-4 rounded-lg bg-black/30 min-w-[300px] max-w-[320px] border-[#503581] border-2"
          >
            {item.id !== activeEditPostId && (
              <>
                <h1 className="text-xl font-bold  p-1 text-white ">
                  {item.title}
                </h1>
                <h2 className="text-sm text-white/80 p-1">{item.body}</h2>
              </>
            )}

            {isEditing && item.id === activeEditPostId && (
              <>
                <input
                  type="text"
                  placeholder="Insira o novo título aqui"
                  className="text-xl mb-3 p-1 rounded-md text-black w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex items-center gap-3">
                  <textarea
                    placeholder="Insira o novo conteúdo aqui"
                    className="text-sm  p-1 rounded-md text-black flex-1"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <button
                    className="h-full text-sm  py-2 px-1 rounded bg-[#503581]"
                    onClick={() => handlers.Update(title, body, item.id)}
                  >
                    Confirmar
                  </button>
                </div>
              </>
            )}

            <button
              className="pt-[6px] absolute right-3 bottom-3 z-10"
              onClick={() => {
                handlers.ToggleOptions();
                setOptionsPostId(item.id);
              }}
            >
              ⚙️
            </button>
            {showOptions && item.id == activeOptionsPostId && (
              <div className="flex flex-col w-fit bg-black/75 rounded-md absolute right-[-100px]">
                <button
                  className="text-sm  w-fit p-2 "
                  onClick={() => {
                    handlers.Remove(item.id);
                  }}
                >
                  Remover Post
                </button>
                <button
                  // aqui, o isediting fica true e os inputs aparecem, o id1 vira o
                  className="text-sm  w-fit p-2 "
                  onClick={() => {
                    setIsEditing(true);
                    setEditPostId(item.id);
                    handlers.ToggleOptions();
                  }}
                >
                  Editar Post
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
