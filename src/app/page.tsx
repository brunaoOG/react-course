"use client";

import { useState } from "react";

const Page = () => {
  const [secretArea, setSecret] = useState(false);
  const handlerClick = () => {
    setSecret(!secretArea);
  };

  return (
    <div className="m-4 mt-32 flex gap-5 p-10 w-fit">
      {!secretArea && (
        <button
          className="p-6 bg-red-500 rounded-lg cursor-pointer"
          onClick={handlerClick}  
        >
          Mostrar área secreta 🚫
        </button>
      )}
      {secretArea && (
        <button
          className="p-6 bg-green-500 rounded-lg cursor-pointer"
          onClick={handlerClick}
        >
          Ocultar área secreta ✅
        </button>
      )}
      {secretArea && (
        <div className="p-6 bg-black rounded-md">Área secreta 🤫</div>
      )}
    </div>
  );
};

export default Page;
