import { Request, Response } from 'express';
import catchAsync from '../../utils/CatchAsync';
import status from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.createSemesterRegistrationIntoDB(
        req.body,
      );
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Semester Registration created successfully',
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsync(
  async (req: Request, res: Response) => {
    // const result =
    // sendResponse(res, {
    //   statusCode: status.OK,
    //   success: true,
    //   message: 'Semester Registration created successfully',
    //   data: result,
    // });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    // const result =
    // sendResponse(res, {
    //   statusCode: status.OK,
    //   success: true,
    //   message: 'Semester Registration created successfully',
    //   data: result,
    // });
  },
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    // const result =
    // sendResponse(res, {
    //   statusCode: status.OK,
    //   success: true,
    //   message: 'Semester Registration created successfully',
    //   data: result,
    // });
  },
);

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  getAllSemesterRegistrations,
};
