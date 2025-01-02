import EnrolledCourse from './enrolledCourse.model';

const createEnrolledCourseIntoDB = async () => {
  const result = await EnrolledCourse.create({});
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
