"use client";

import { useState } from "react";
import { questions } from "../data/questionsList";
import { QuestionItem } from "../components/QuestionItem";
import { Result } from "../components/Result";

const Page = () => {
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
};

export default Page;
