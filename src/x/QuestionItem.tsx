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

/*
page code


const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const title = "Quiz dos Rappers";

  const answerHandler = (answer: number) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartHandler = () => {
    setAnswers([]);
    setCurrentQuestion(0);
  };

  return (
    <div className="h-screen w-screen bg-[#191919] flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-lg shadow shadow-black/30 text-[#191919]">
        <div className="p-6 font-bold text-2xl shadow shadow-gray-500/50">
          {title}
        </div>
        <div id="optionsArea" className="p-6">
          {questions[currentQuestion] && (
            <QuestionItem
              count={currentQuestion + 1}
              question={questions[currentQuestion]}
              onAnswer={answerHandler}
            />
          )}
          {!questions[currentQuestion] && (
            <Result questions={questions} answers={answers} />
          )}
        </div>
        <div id="countArea">
          <div className="p-6 text-center border-t border-gray-500/50 ">
            {questions[currentQuestion] &&
              `${currentQuestion + 1} de ${questions.length} pergunta${
                questions.length === 1 ? "" : "s"
              }`}
            {!questions[currentQuestion] && (
              <button
                className="bg-[#191919] px-4 py-3 rounded-lg text-white font-bold hover:scale-105 transition-all hover:bg-green-600"
                onClick={restartHandler}
              >
                Reiniciar Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );


*/