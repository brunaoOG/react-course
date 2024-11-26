"use client";

import { DefaultButton } from "../components/DefaultButton";

const Page = () => {
  const thirdButtonHandler = () => alert("Evento do botão 3.");
  return (
    <div className="p-4 flex flex-col gap-6 w-96 container m-auto mt-8">
      <DefaultButton
        label="Clique-me! 1"
        func={() => alert("Evento do botão 1.")}
      />
      <DefaultButton
        label="Clique-me! 2"
        func={() => alert("Evento do botão 2.")}
      />
      <DefaultButton label="Clique-me! 3"
       func={thirdButtonHandler} />
    </div>
  );
};

export default Page;
