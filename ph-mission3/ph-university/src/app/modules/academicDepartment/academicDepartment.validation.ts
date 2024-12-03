import { z } from 'zod';

const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Academic department name is required',
      invalid_type_error: 'Academic department name must be a string',
    }),
    academicFaculty: z.string({
      required_error: 'Academic faculty is required',
      invalid_type_error: 'Academic faculty must be a string',
    }),
  }),
});

const updateAcademicDepartmentZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Academic department name is required',
        invalid_type_error: 'Academic department name must be a string',
      })
      .optional(),
    academicFaculty: z
      .string({
        required_error: 'Academic faculty is required',
        invalid_type_error: 'Academic faculty must be a string',
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidation = {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
};
