import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlwares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller func
router.get('/', StudentControllers.getAllStudents);

router.get('/:id', StudentControllers.getSingStudent);

router.delete('/:id', StudentControllers.deleteStudent);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

export const StudentRoutes = router;
