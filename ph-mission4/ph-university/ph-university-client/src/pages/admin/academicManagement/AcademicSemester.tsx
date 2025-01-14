import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const data = useGetAllSemestersQuery(undefined);
  console.log(data);
  return <div>This is AcademicSemester component</div>;
}
