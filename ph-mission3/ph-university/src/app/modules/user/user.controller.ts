import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
// import AppError from '../../errors/AppError';

const createStudent = catchAsync(async (req, res) => {
  // creating a schema to validate by zod
  const { password, student: studentData } = req.body;

  // Will call service func to send this data
  const result = await UserServices.createStudentIntoDB(
    req.file,
    password,
    studentData,
  );

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserServices.createFacultyIntoDB(
    req.file,
    password,
    facultyData,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(
    req.file,
    password,
    adminData,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  // const token = req.headers.authorization as string;

  // if (!token) {
  //   throw new AppError(status.NOT_FOUND, 'Token is not found');
  // }

  const result = await UserServices.getMeFromDB(req);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is blocked succesfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  changeStatus,
  getMe,
};
