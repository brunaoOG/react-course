import { useContext, useState } from "react";
import { CountContext } from "../contexts/CountContext";

export const OnlineUsers = () => {
  const [isNoUsers, setUsersBool] = useState(false);
  const ctxObject = useContext(CountContext);

  const handleGeralBan = () => {
    ctxObject?.setCount(0);
    setUsersBool(true);
  };

  return (
    <>
      <h2>
        Online:{" "}
        {!isNoUsers && (
          <span className="text-blue-500">{ctxObject?.count}</span>
        )}{" "}
        {isNoUsers && <span className="text-red-500">{ctxObject?.count}</span>}{" "}
        pessoas
      </h2>
      <button
        onClick={handleGeralBan}
        className="py-1 px-2 rounded-md bg-red-500 text-white font-bold"
      >
        Banir todos os usuários{" "}
      </button>
    </>
  );
};
