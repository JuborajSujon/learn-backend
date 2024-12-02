import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // data validation using zod
      // if everything allright then next()
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
