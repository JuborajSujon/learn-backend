import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";
const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);

  return (
    <div>
      {data?.data?.map((item: any, index: number) => {
        return (
          <div key={index}>
            <div>{item.course.title}</div>
            <div>{item.offeredCourse.section}</div>
            <div>
              {item.offeredCourse.days.map((item: any, index: number) => (
                <span key={index}> {item}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MySchedule;
