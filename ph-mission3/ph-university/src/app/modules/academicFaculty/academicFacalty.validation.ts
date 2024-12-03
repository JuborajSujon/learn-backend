import { z } from 'zod';

const createAcademicFacultyZodSchema = z.object({
  name: z.string({ required_error: 'Academic faculty name is required' }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyZodSchema,
};
