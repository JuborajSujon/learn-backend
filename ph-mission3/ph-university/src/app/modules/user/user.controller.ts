import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';

const createStudent = catchAsync(async (req, res) => {
  // creating a schema to validate by zod
  const { password, student: studentData } = req.body;

  // Will call service func to send this data
  const result = await UserServices.createStudentIntoDB(password, studentData);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserControllers = { createStudent };
