import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

// create academic semester controller
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

// get all academic semesters
const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

// get single academic semester
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

// update academic semester
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
