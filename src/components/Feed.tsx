import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";

export const Feed = () => {
  const ctxObject = useContext(PostsContext);
  return ctxObject?.posts.map((item, index) => {
    const dateInfo = `0${item.date.getDate()}/0${
      item.date.getMonth() + 1
    } ás ${item.date.getHours()}:${item.date.getMinutes()}`;
    
    return (
      <div
        key={index}
        className="bg-black/40 px-4 py-5 rounded-md w-fit min-w-[300px] max-w-[320px]"
      >
        <h2 className="text-xl font-bold italic">{item.title}</h2>
        <h3 className="text-[10px] text-gray-200">{item.body}</h3>
        <p className="text-gray-400 text-[8px] mt-1">
          {item.user} <span className="text-white">|</span> {dateInfo}
        </p>
      </div>
    );
  });
};
