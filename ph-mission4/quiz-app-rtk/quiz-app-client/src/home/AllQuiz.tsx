import { useGetQuizQuery } from "@/redux/api/quizApi";

export default function AllQuiz() {
  const { data, isLoading } = useGetQuizQuery(undefined);

  console.log(data, isLoading);
  return <div>AllQuiz</div>;
}
