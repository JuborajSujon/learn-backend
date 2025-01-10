import AllQuiz from "./home/AllQuiz";
import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { selectQuiz } from "./redux/features/quiz/quizSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector(selectQuiz);
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-7xl font-bold text-center">Quiz App</h3>
      <AllQuiz />
      <div className="flex flex-col items-center justify-center mt-5">
        {!quizComplete ? <Question /> : <QuizSummary />}
      </div>
    </div>
  );
}

export default App;
