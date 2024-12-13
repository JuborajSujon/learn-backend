import express from 'express';
import { SemesterRegistrationController } from './semisterRegistration.controller';
import validateRequest from '../../middlwares/validateRequest';
import { SemesterRegistrationValidation } from './semisterRegistration.validation';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch(
  '/:id',
  // validateRequest(updateFacultyValidationSchema),
  SemesterRegistrationController.updateSemesterRegistration,
);

// router.delete('/:id', SemesterRegistrationControllers.deleteFaculty);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

export const SemesterRegistrationRoutes = router;
