import { Button } from "@/components/ui/button";
import {
  completedQuiz,
  nextQuestion,
  previousQuestion,
  selectQuiz,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function QuizControl() {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswers } =
    useAppSelector(selectQuiz);

  const isAnsweredSelected = userAnswers[currentQuestionIndex] !== null;
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleCompleteQuiz = () => {
    dispatch(completedQuiz());
  };

  const isComplete =
    isAnsweredSelected || currentQuestionIndex !== question.length - 1;
  return (
    <div className="w-full flex justify-between mt-4 space-x-4">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={() => handlePreviousQuestion()}>
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button
          disabled={!isAnsweredSelected}
          onClick={() => handleNextQuestion()}>
          Next
        </Button>
      )}

      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isComplete} onClick={() => handleCompleteQuiz()}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
}
