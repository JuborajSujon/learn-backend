import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
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

export const StudentController = { createStudent };
