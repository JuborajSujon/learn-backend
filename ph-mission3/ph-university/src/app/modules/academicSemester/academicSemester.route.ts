import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../user/user.contant';

const router = express.Router();

// create academic semester route
router.post(
  '/create-academic-semester',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(AcademicSemesterValidations.createAcademicSemesterZodSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

// get single academic semester route
router.get(
  '/:semesterId',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  AcademicSemesterControllers.getSingleAcademicSemester,
);

// update academic semester route
router.patch(
  '/:semesterId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(AcademicSemesterValidations.updateAcademicSemesterZodSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);

// get all academic semesters route
router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  AcademicSemesterControllers.getAllAcademicSemesters,
);

export const AcademicSemesterRoutes = router;
