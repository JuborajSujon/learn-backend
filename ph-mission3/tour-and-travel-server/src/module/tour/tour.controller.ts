import { tourService } from './tour.service'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'
import catchAsync from '../../utils/catchAsync'

const createTour = catchAsync(async (req, res) => {
  const body = req.body
  const result = await tourService.createTour(body)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Tour created successfully',
    data: result,
  })
})

const getTours = catchAsync(async (req, res) => {
  const result = await tourService.getTours(req.query)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tours get successfully',
    data: result,
  })
})

const getSingleTour = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await tourService.getSingleTour(id)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tours get successfully',
    data: result,
  })
})

const updateTour = catchAsync(async (req, res) => {
  const id = req.params.id
  const body = req.body
  const result = await tourService.updateTour(id, body)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tours updated successfully',
    data: result,
  })
})
const deleteTour = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await tourService.deleteTour(id)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tours deleted successfully',
    data: result,
  })
})
const getNextSchedule = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await tourService.getNextSchedule(id)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Tours get Shedule successfully',
    data: result,
  })
})

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
