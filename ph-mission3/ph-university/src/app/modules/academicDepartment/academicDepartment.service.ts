import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

// create academic department
const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  // check if academic department already exists
  // const isDepartmentExist = await AcademicDepartment.findOne({
  //   name: payload.name,
  // });
  // if (isDepartmentExist) {
  //   throw new AppError( status.CONFLICT,'Academic department already exist!');
  // }
  const result = await AcademicDepartment.create(payload);
  return result;
};

// get all academic departments
const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

// get single academic department
const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result =
    await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

// update academic department
const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
