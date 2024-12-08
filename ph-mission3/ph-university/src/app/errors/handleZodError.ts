import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error.interface';

export const handleZodError = (error: ZodError) => {
  const errorSources: TErrorSources = error.issues.map((issue: ZodIssue) => ({
    path: issue?.path[issue.path.length - 1],
    message: issue.message,
  }));

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
