import { useGlobalContext } from "contexts/context";
import Confetti from "react-confetti";

const QuizSubmitModal = () => {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();
  let score = ((correct / questions.length) * 100).toFixed(0);
  return (
    <>
      {isModalOpen && (
        <div className="absolute top-0 left-0 flex  w-full items-center bg-[rgba(0,0,0,.5)]">
          {score > 40 && <Confetti />}
          <div className=" mx-auto w-11/12 max-w-[600px] rounded-lg bg-white p-8 text-center">
            <h4 className="pb-3 text-center text-3xl font-bold">
              Your score is{" "}
              <span className={score > 40 ? "text-green-600" : "text-red-600"}>
                {score}%
              </span>
            </h4>
            <p className="py-2">
              You got {correct}/{questions.length}
            </p>
            {score > 40 && <p className="py-2 font-medium">Congrats!!!</p>}
            <button
              className="mt-2 rounded-xl bg-yellow-600 py-2 px-7 text-white hover:bg-yellow-500"
              onClick={closeModal}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizSubmitModal;
