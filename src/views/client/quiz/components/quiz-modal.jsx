// @ts-ignore
import QuizSubmitModal from "components/quiz/QuizSubmitModal";
// @ts-ignore
import Loading from "components/quiz/Loading";
// @ts-ignore
import QuizForm from "components/quiz/QuizForm";
// @ts-ignore
import { useGlobalContext } from "contexts/context";
import React from "react";

export default function QuizModal() {
  const { waiting, loading, index, questions, nextQuestion, checkAnswer } =
    useGlobalContext();

  if (waiting) {
    return <QuizForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  const answers = [...incorrect_answers];
  if (incorrect_answers.length > 1) {
    let num = Math.floor(Math.random() * 4);
    if (num === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[num]);
      answers[num] = correct_answer;
    }
  } else {
    let num = Math.floor(Math.random() * 2);
    answers.push(answers[num]);
    answers[num] = correct_answer;
  }
  return (
    <div className="flex min-w-[30%] items-center justify-center">
      <QuizSubmitModal />
      <div className="min-h-[300px] w-full max-w-[800px] rounded-lg bg-white p-3 py-5 shadow md:p-8">
        <p className="pb-2 text-right text-green-600">
          Number:{" "}
          <span>
            {index + 1}/{questions.length}
          </span>
        </p>
        <div className="mt-3">
          <p
            className="text-center text-2xl font-medium leading-loose lg:text-3xl"
            dangerouslySetInnerHTML={{ __html: question }}
          />
          <div className="my-5 grid grid-cols-1 place-content-center space-y-2">
            {answers.map((answer, index) => {
              return (
                <button
                  onClick={() => checkAnswer(answer === correct_answer)}
                  key={index}
                  className="mx-auto w-4/5 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: answer,
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <button
            onClick={nextQuestion}
            className="text-medium flex rounded-lg bg-yellow-600 py-2 px-7 text-white hover:bg-green-700"
          >
            Next question
          </button>
        </div>
      </div>
    </div>
  );
}
