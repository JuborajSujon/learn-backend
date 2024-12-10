import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/CatchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  // Will call service func to send this data
  const result = await StudentServices.getAllStudentsFromDB(req.query);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const getSingStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudentFromDB(id);

  // send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student are deleted succesfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(id, student);

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
