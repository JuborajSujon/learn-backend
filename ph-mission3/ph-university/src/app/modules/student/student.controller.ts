import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const getSingStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are deleted succesfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are updated succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingStudent,
  updateStudent,
  deleteStudent,
};
