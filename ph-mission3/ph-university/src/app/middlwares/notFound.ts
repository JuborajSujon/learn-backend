/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'API Not Found',
    error: '',
  });
};

export default notFound;
