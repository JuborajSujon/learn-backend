import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema to validate by zod
    const { student: studentData } = req.body;

    //data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod
    const zodparseData = studentValidationSchema.parse(studentData);

    // Will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(zodparseData);

    // console.log({ error }, { value });

    // if (error) {
    //   return res.status(500).json({
    //     success: false,
    //     message: 'Validation error',
    //     error,
    //   });
    // }

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const getSingStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student are deleted succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingStudent,
  deleteStudent,
};
