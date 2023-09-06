import { useGlobalContext } from "contexts/context";

const QuizForm = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext();
  return (
    <div className="flex h-full min-w-[500px] items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] space-y-8 rounded-lg bg-white p-5 shadow md:p-8 "
      >
        <h2 className="text-3xl font-medium">Setup Quiz</h2>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600" htmlFor="amount">
            Number of Questions
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="rounded-md bg-gray-200 p-2 outline-0 focus:bg-gray-300"
            value={quiz.amount}
            onChange={handleChange}
            min={5}
            max={50}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600" htmlFor="category">
            Select Category
          </label>
          <select
            id="category"
            name="category"
            className="rounded-md bg-gray-200 p-2 outline-0 focus:bg-gray-300"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="politics">politics</option>
            <option value="history">history</option>
            <option value="science">science</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600" htmlFor="difficulty">
            Select Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="rounded-md bg-gray-200 p-2 outline-0 focus:bg-gray-300"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-600" htmlFor="type">
            Select Type
          </label>
          <select
            id="type"
            name="type"
            className="rounded-md bg-gray-200 p-2 outline-0 focus:bg-gray-300"
            value={quiz.type}
            onChange={handleChange}
          >
            <option value="multiple">multiple choice</option>
            <option value="boolean">true or false</option>
          </select>
        </div>
        {error && (
          <p className="text-red-600">
            Can't Generate Questions, Please Try Different Options
          </p>
        )}
        <button
          type="submit"
          className="rounde-md w-full bg-yellow-600 p-2 text-white hover:bg-yellow-500"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
