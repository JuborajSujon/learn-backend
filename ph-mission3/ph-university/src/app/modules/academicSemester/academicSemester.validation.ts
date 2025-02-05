import { z } from 'zod';
import {
  Months,
  AcademicSemesterCode,
  AcademicSemeterName,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemeterName] as [string, ...string[]], {
      required_error: 'Academic semester is required',
    }),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]], {
      required_error: 'Academic semester code is required',
    }),
    year: z.string({
      required_error: 'Academic semester year is required',
    }),
    startMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: 'Academic semester start month is required',
    }),
    endMonth: z.enum([...Months] as [string, ...string[]], {
      required_error: 'Academic semester end month is required',
    }),
  }),
});

const updateAcademicSemesterZodSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemeterName] as [string, ...string[]]).optional(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
