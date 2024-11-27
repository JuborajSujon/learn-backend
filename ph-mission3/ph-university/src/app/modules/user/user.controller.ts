import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // creating a schema to validate by zod
    const { password, student: studentData } = req.body;

    // data validation using zod
    // const zodparseData = studentValidationSchema.parse(studentData);

    // Will call service func to send this data
    const result = await UserServices.createStudentIntoDB(
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
  } catch (err) {
    next(err);
  }
};

export const UserControllers = { createStudent };
