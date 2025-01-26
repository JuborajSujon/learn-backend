import { useGetAllFacultiesQuery } from "../../redux/features/admin/userManagement.api";

export default function MyCourses() {
  const { data } = useGetAllFacultiesQuery(undefined);
  console.log(data);
  return <div>MyCourses</div>;
}
