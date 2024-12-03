import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicFacultyValidation } from './academicFacalty.validation';
import { AcademicFacultyControllers } from './academicFacalty.controller';

const router = express.Router();

// create academic faculty route
router.post(
  '/create-academic-faculty',
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
