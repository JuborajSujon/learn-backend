import { useParams } from "react-router-dom";

export default function StudentDetails() {
  const { studentId } = useParams();

  return <div>Student Id is {studentId}</div>;
}
