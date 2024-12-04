import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlwares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller func
router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

export const StudentRoutes = router;
