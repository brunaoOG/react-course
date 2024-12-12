import { useState } from "react";
import { Questions } from "../types/Questions";

type Props = {
  questions: Questions[];
  answers: number[];
};

export const Result = ({ questions, answers }: Props) => {
  let points = 0;
  let correctAnswers = questions.map((item) => item.answer);
  let messages = correctAnswers.map((item, key) => {
    if (item == answers[key]) {
      points = points + 1;
      return "Acertou!";
    } else {
      return "Errou!";
    }
  });

  return (
    <div>
      <h1 className="text-3xl text-green-500 font-bold mb-5">
        Você Concluiu!{" "}
        <span className="text-base">
          {points} de {questions.length} pontos.
        </span>
      </h1>
      <ul className="flex flex-col gap-3">
        {questions.map((item, key) => {
          return (
            <li key={key} className="flex flex-col">
              <span className="font-bold ">
                {key + 1}. {item.title}
              </span>
              <span>
                {messages[key] == "Acertou!" && (
                  <span className="text-green-400 font-bold">
                    {messages[key]}
                  </span>
                )}
                {messages[key] == "Errou!" && (
                  <span className="text-red-400 font-bold">
                    {messages[key]}
                  </span>
                )}{" "}
                - {item.options[answers[key]]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
