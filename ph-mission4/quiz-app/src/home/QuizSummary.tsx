import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { selectQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppSelector } from "@/redux/hooks";
import { Progress } from "@/components/ui/progress";

export default function QuizSummary() {
  const { question, userAnswers } = useAppSelector(selectQuiz);

  const correctAnswersCount = question.reduce((count, qna, index) => {
    if (qna.correctAnswer === userAnswers[index]) {
      return count + 1;
    }
    return count;
  }, 0);

  const correctPercentage = parseFloat(
    ((correctAnswersCount / question.length) * 100).toFixed(2)
  );

  let performance = "";

  if (correctPercentage >= 80) {
    performance = "Outstanding";
  } else if (correctPercentage >= 70) {
    performance = "Good";
  } else if (correctPercentage >= 60) {
    performance = "Average";
  } else if (correctPercentage >= 50) {
    performance = "Fair";
  } else if (correctPercentage >= 40) {
    performance = "Poor";
  }

  const incorrectAnswers = question.filter((qna, index) => {
    return qna.correctAnswer !== userAnswers[index];
  });

  return (
    <div className="flex flex-col items-center justify-center  gap-5">
      <Card className="w-[450px]">
        <CardHeader className="text-center font-bold text-lg">
          Quiz Summary
        </CardHeader>
        <CardContent>
          <h4>
            You got {correctAnswersCount} out of {question.length} questions
            correct
          </h4>
          <Progress className="mt-4" value={correctPercentage} />

          <div className="flex justify-between ">
            <p>{correctPercentage}%</p>
            <p>Performance : {performance}</p>
          </div>

          <p className="mt-4">
            <span className="font-bold mr-2">Incorret answers :</span>
            {incorrectAnswers.length}
          </p>
          <p className="mt-4">
            Great Job! Keep practcing to improve your performance
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
