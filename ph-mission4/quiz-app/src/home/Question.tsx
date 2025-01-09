import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { selectQuiz, setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControl from "./QuizControl";

export default function Question() {
  const { question, currentQuestionIndex, userAnswers } =
    useAppSelector(selectQuiz);
  const dispatch = useAppDispatch();

  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  const handleAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  return (
    <div>
      <Card className="w-[450px]">
        <CardHeader>
          <CardDescription>
            {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              onClick={() => handleAnswerChange(option)}
              size={"lg"}
              key={index}
              className="w-full mt-3"
              variant={option === currentAnswer ? "default" : "outline"}>
              {option}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <QuizControl />
        </CardFooter>
      </Card>
    </div>
  );
}
