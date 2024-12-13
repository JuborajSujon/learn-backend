import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import status from 'http-status';
import { SemesterRegistration } from './semesterRegistration.model';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  const isAcademicSemesterExist =
    await AcademicSemester.findById(academicSemester);

  // check if semester is exist or not?
  if (!isAcademicSemesterExist) {
    throw new AppError(status.NOT_FOUND, 'This Academic Semester Not Found');
  }

  //  check if semester registration already register or not
  const isSemesterRegistrationExist = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExist) {
    throw new AppError(status.CONFLICT, 'Semester Registration Already Exist');
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};

const getAllSemesterRegistrationsFromDB = async () => {};

const getSingleSemesterRegistrationFromDB = async () => {};

const updateSemesterRegistrationIntoDB = async () => {};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
