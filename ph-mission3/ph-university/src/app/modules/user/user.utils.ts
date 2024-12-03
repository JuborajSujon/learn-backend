import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

// Find last student id and generate new id
export const findLastStudentId = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

// Generate random id --> year semesterCode 4 digits
export const generatedStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();

  const lastStuentId = await findLastStudentId();

  if (lastStuentId) {
    const lastStudnetSemesterYear = lastStuentId.substring(0, 4);

    const lastStudnetSemesterCode = lastStuentId.substring(4, 6);

    const currentSemesterYear = payload.year;
    const currentSemesterCode = payload.code;

    if (
      lastStuentId &&
      lastStudnetSemesterCode === currentSemesterCode &&
      lastStudnetSemesterYear === currentSemesterYear
    ) {
      currentId = lastStuentId.substring(6);
    }
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
