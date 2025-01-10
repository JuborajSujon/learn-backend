import { Card } from "@/components/ui/card";
import { useGetQuizQuery } from "@/redux/api/quizApi";
import { setQuiz, TQuiz, TQuizData } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function AllQuiz() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetQuizQuery(undefined);

  if (isLoading)
    return (
      <div className="flex  justify-center items-center text-3xl">
        Loading...
      </div>
    );

  const handleSetQuiz = (qna: TQuizData[]) => {
    dispatch(setQuiz(qna));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((quiz: TQuiz, index: number) => (
          <Card
            onClick={() => handleSetQuiz(quiz.questions)}
            key={index}
            className="p-6 hover:shadow-md cursor-pointer">
            <h4>
              <span className="font-bold">Name:</span> {quiz?.title}
            </h4>
            <p className="">
              <span className="font-bold">Description:</span>{" "}
              {quiz?.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
