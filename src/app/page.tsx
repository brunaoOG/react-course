"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const handlerBtnClick = () => {
    setCount(count + 2); // 0 + 2 -> count = 0 c(arg) = 2
    setCount((c) => c + 2); // 2 + 2 (c + 2)
    setCount((c) => c + 2); //4 + 2
  };

  return (
    <div className="m-10 ">
      <div className="flex">
        <p className="py-5 px-8 rounded-s-lg bg-black/60">{count}</p>
        <button
          onClick={handlerBtnClick}
          className="p-5 bg-blue-500 rounded-e-lg"
        >
          +6
        </button>
      </div>
    </div>
  );
};

export default Page;
