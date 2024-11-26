import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .trim()
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: 'First name must be capitalized' },
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .max(20, { message: 'Last name is too long, not more than 20 characters' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must contain only alphabetic characters',
    })
    .transform((value) => value.trim()),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact no is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact no is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Guardian Name is required' }),
  occupation: z.string().min(1, { message: 'Guardian occupation is required' }),
  contactNo: z.string().min(1, { message: 'Guardian contact no is required' }),
  address: z.string().min(1, { message: 'Guardian address is required' }),
});

const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'ID is required' }),
  password: z
    .string()
    .max(20, { message: 'Password is too long, not more than 20 characters' })
    .min(1, { message: 'Password is required' }),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: "The gender field must be 'male', 'female', or 'other'.",
    }),
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' }),
  contactNo: z.string().min(1, { message: 'Contact no is required' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact no is required' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({
      message: "Invalid blood group. Use one of 'A+', 'A-', 'B+', etc.",
    }),
  }),
  presentAddress: z.string().min(1, { message: 'Present address is required' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({
        message: "The isActive field must be 'active' or 'blocked'.",
      }),
    })
    .default('active'),
  isDeleted: z.boolean().default(false),
});

// Export the Zod schema
export default studentValidationSchema;
