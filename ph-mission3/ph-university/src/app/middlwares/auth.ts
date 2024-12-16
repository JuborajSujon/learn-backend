import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/CatchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not logged in !');
    }
    next();
  });
};

export default auth;
