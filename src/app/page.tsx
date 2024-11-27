"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState<number>(0);

  const handlerClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="m-4 mt-32 flex">
      <p className="py-5 px-7 bg-black/30 rounded-s-lg">{count}</p>
      <button
        className="py-5 px-7 bg-blue-500 rounded-e-lg cursor-pointer"
        onClick={handlerClick}
      >
        +1
      </button>
    </div>
  );
};

export default Page;
