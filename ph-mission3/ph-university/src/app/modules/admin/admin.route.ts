import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { AdminControllers } from './admin.controller';
import { updateAdminValidationSchema } from './admin.validation';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../user/user.contant';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getAllAdmins,
);

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  AdminControllers.getSingleAdmin,
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin),
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete('/:id', auth(USER_ROLE.superAdmin), AdminControllers.deleteAdmin);

export const AdminRoutes = router;
