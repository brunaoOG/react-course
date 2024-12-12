import { useState } from "react";
import { Questions } from "../types/Questions";

type Props = {
  question: Questions;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);
      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null);
      }, 200);
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-4">
        {count}. {question.title}
      </div>
      <ul className="flex flex-col gap-4">
        {question.options.map((item, key) => {
          {
          }
          return (
            <li
              key={key}
              onClick={() => {
                checkQuestion(key);
              }}
              className={`bg-blue-100 py-3 px-4 rounded-lg text-black/90 border
               border-blue-300 text-lg

               ${
                 selectedAnswer === null && "cursor-pointer hover:opacity-75"
               }        

               ${
                 selectedAnswer !== null &&
                 selectedAnswer === question.answer &&
                 selectedAnswer === key &&
                 "border-green-300 bg-green-100"
               }
               
               ${
                 selectedAnswer !== null &&
                 selectedAnswer !== question.answer &&
                 selectedAnswer === key &&
                 "border-red-300 bg-red-100"
               }


               `}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
