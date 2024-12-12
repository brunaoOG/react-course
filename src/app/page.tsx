"use client";

import { useEffect, useState } from "react";
import { questions } from "../data/questionsList";
import { QuestionItem } from "../components/QuestionItem";
import { Result } from "../components/Result";

const Page = () => {
  const [firstName, setFirstName] = useState("Bruno");
  const [lastName, setLastName] = useState("Silva");
  const fullName = `${firstName} ${lastName}`;
  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   setFullName(firstName + " " + lastName);
  // }, [firstName, lastName]);

  return (
    <div className="">
      <h1 className="shadow shadow-gray-500 py-10 pl-3 text-3xl italic font-bold">
        "O meu nome é {fullName}.
      </h1>

      <div className="flex py-10 ml-3 gap-5">
        <div className="flex flex-col gap-5 p-5 rounded border border-gray-500">
          <button
            className="py-2 px-3 bg-gray-500 rounded-lg text-lg font-bold"
            onClick={() => setFirstName("João")}
          >
            Mudar para João
          </button>
          <button
            className="py-2 px-3 bg-gray-500 rounded-lg text-lg font-bold"
            onClick={() => setLastName("Barbosa")}
          >
            Mudar para Barbosa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
