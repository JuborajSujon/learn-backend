import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';

// create academic semester controller
const createAcademicFaculty = catchAsync(async (req, res) => {
  // Will call service func to send this data
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

// get all academic semesters
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB(
    req.query,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic faculties are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

// get single academic semester
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic faculty is retrieved succesfully',
    data: result,
  });
});

// update academic semester
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Academic faculty is retrieved succesfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
