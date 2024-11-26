"use client";

import { FormEvent } from "react";

const Page = () => {
  const handleFormSubmit = (
    event:FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    alert("Evento rolando.")
  };
  return (
    <div className="m-4 p-5 flex flex-col gap-4 w-[400px] bg-black/30 rounded-lg">
      <h1 className="text-2xl">Formulário</h1>
      <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="rounded-md px-2"
          placeholder="Digite o seu nome..."
        />
        <div className="flex w-full gap-2">
          <input type="date" className="w-2/4 rounded-md px-2 text-gray-400" />
          <input
            type="email"
            className="w-2/4 rounded-md px-2"
            placeholder="Digite o seu email..."
          />
        </div>
        <input
          type="submit"
          value="Enviar →"
          className="bg-blue-500 rounded-md w-fit pl-3 pr-2 py-2 self-end text-sm"
        />
      </form>
    </div>
  );
};

export default Page;
