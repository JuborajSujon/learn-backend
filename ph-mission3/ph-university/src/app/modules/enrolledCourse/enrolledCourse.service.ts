import { TEnrolledCourse } from './enrolledCourse.interface';
import EnrolledCourse from './enrolledCourse.model';

const createEnrolledCourseIntoDB = async (
  userId: string,
  payload: TEnrolledCourse,
) => {
  /**
   * Step1: check if the offered courses is exists
   * Step2: check if the student is already enrolled
   * Step3: create enrolled course
   *
   */
  const result = await EnrolledCourse.create({});
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
};
