import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../user/user.contant';

const router = express.Router();

// create academic department route
router.post(
  '/create-academic-department',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

// get single academic department route
router.get(
  '/:departmentId',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

// update academic department route
router.patch(
  '/:departmentId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

// get all academic department route
router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  AcademicDepartmentControllers.getAllAcademicDepartments,
);

export const AcademicDepartmentRoutes = router;
