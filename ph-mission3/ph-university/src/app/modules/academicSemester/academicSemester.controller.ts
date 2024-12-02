import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  // Will call service func to send this data
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = { createAcademicSemester };
