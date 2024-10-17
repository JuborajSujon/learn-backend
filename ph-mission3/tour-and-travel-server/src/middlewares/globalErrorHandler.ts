/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'
import { handleGenericError } from '../helpers/handleGenericError'
import { handleDuplicateError } from '../helpers/handleDuplicateError'
import { handleCastError } from '../helpers/handleCastError'

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
    handleCastError(err, res)
  } else if (err instanceof mongoose.Error.ValidationError) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      error: err,
    })
  } else if (err.code && err.code === 11000) {
    handleDuplicateError(err, res)
  } else if (err instanceof Error) {
    handleGenericError(err, res)
  }
}
