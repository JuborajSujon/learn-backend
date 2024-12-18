/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

/**
 * Error type
 * 1.Generic Error form JS - new Error ('error message')
 * 2. Duplicate
 * 3. CastError
 * 4. ValidationError
 * 5. zod / joy error
 * 6. JsonWebTokenError
 *
 */
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  })
}
