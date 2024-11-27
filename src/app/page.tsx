"use client";

import { useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");

  const [nickname, setNickname] = useState("");

  const sendNickname = () => {
    setNickname(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col m-4 mt-32 gap-3 p-10 w-fit">
      <p>Digite aqui:</p>
      <input
        type="text"
        className="p-3 w-[340px] rounded-lg text-black"
        placeholder="Nome de usuário"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />
      <button
        className="self-end text-sm bg-blue-500 rounded py-2 px-3 hover:ring-2 transition-all"
        onClick={sendNickname}
      >
        {"Confirmar novo nickname ->"}
      </button>
      {nickname ? (
        <div className="m-auto">Seja bem vindo novamente, {nickname}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
