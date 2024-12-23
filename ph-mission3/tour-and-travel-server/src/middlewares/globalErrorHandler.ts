/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

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

type TErrorResponse = {
  success: boolean
  message: string
  error: any
}
export const globalErrorHandler = (
  err: TErrorResponse,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: err.message,
      error: err,
    })
  } else if (err instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}
