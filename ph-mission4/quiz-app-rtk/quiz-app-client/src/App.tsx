import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { selectQuiz } from "./redux/features/quiz/quizSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector(selectQuiz);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h3 className="text-7xl font-bold text-center">Quiz App</h3>

      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App;
