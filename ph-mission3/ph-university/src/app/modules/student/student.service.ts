import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import status from 'http-status';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  // {email: {$regex: query.searchTerm, $options: 'i' }}
  // {presentAddress: {$regex: query.searchTerm, $options: 'i' }}
  // {'name.firstName': {$regex: query.searchTerm, $options: 'i' }}
  const queryObj = { ...query };
  const searchableFields = ['email', 'presentAddress', 'name.firstName'];
  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: searchableFields.map((field) => ({
      [field]: {
        $regex: searchTerm,
        $options: 'i',
      },
    })),
  });

  // filtering
  const excludeFields = ['searchTerm', 'sort', 'limit'];
  excludeFields.forEach((field) => delete queryObj[field]);

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  let sort = '-createdAt';

  if (query.sort) {
    sort = query.sort as string;
  }

  const sortQuery = filterQuery.sort(sort);

  let limit = 1;

  if (query.limit) {
    limit = Number(query.limit);
  }

  const limitQuery = await sortQuery.limit(limit);

  return limitQuery;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });

  const result = await Student.findOne({ id })
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  // check if student exists
  const isStudentExist = await Student.findOne({ id });

  if (!isStudentExist) {
    throw new AppError(status.NOT_FOUND, 'Student not found');
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    // delete student - transaction - 1
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(status.NOT_FOUND, 'Student not found');
    }

    // delete user - transaction - 2
    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(status.NOT_FOUND, 'User not found');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
