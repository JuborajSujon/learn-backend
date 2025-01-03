import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicFacultyValidation } from './academicFacalty.validation';
import { AcademicFacultyControllers } from './academicFacalty.controller';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../user/user.contant';

const router = express.Router();

// create academic faculty route
router.post(
  '/create-academic-faculty',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);

// get all academic faculty route
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

// get single academic faculty route
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

// update academic faculty route
router.patch(
  '/:facultyId',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
