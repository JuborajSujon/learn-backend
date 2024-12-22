import { NextFunction, Request, Response } from 'express'
import { tourService } from './tour.service'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body
    const result = await tourService.createTour(body)

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tourService.getTours()

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tours get successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleTour = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await tourService.getSingleTour(id)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tours get successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await tourService.updateTour(id, body)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tours updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await tourService.deleteTour(id)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tours deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const getNextSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await tourService.getNextSchedule(id)

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Tours deleted successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
