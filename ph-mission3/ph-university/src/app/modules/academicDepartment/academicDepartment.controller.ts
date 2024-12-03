import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
import { AcademicDepartmentServices } from './academicDepartment.service';

// create academic department controller
const createAcademicDepartment = catchAsync(async (req, res) => {
  // Will call service func to send this data
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Department created successfully',
    data: result,
  });
});

// get all academic departments controller
const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic departments are retrieved successfully',
    data: result,
  });
});

// get single academic department
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic department is retrieved succesfully',
    data: result,
  });
});

// update academic department
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body,
    );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic department is retrieved succesfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
