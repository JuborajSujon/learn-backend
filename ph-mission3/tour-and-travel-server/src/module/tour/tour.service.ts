import { ITour } from './tour.interface'
import Tour from './tour.model'

const createTour = async (payload: ITour) => {
  //   const result = await Tour.create(payload)
  const data = new Tour(payload)

  //   data.color = "red"

  const result = await data.save()
  return result
}

const getTours = async (query: Record<string, unknown>) => {
  const queryObj = { ...query }
  const excludingImportant = [
    'searchTerm',
    'page',
    'limit',
    'sortOrder',
    'sortBy',
    'fields',
  ]

  excludingImportant.forEach((el) => delete queryObj[el])

  const serchTerm = query.searchTerm || ''

  const searchableFields = ['name', 'locations', 'startLocation']
  // const result = await Tour.find({
  //   $or: [
  //     { name: { $regex: serchTerm, $options: 'i' } },
  //     { locations: { $regex: serchTerm, $options: 'i' } },
  //     { startLocation: { $regex: serchTerm, $options: 'i' } },
  //   ],
  // })

  // const result = await Tour.find({
  //   $or: searchableFields.map((field) => ({
  //     [field]: { $regex: serchTerm, $options: 'i' },
  //   })),
  // })
  const searchQuery = Tour.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: serchTerm, $options: 'i' },
    })),
  })
  // const result = await searchQuery.find(queryObj)

  const filterQurery = searchQuery.find(queryObj)

  const page: number = Number(query.page) || 1
  const limit: number = Number(query.limit) || 10
  const skiped = (page - 1) * limit

  const paginatedQuery = filterQurery.skip(skiped).limit(limit)

  let sortStr: string = 'price'
  if (query?.sortBy && query?.sortOrder) {
    const sortBy = query?.sortBy
    const sortOrder = query?.sortOrder

    sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
  }

  const sortQuery = paginatedQuery.sort(sortStr)

  let fields = '-__v'

  if (query?.fields) {
    fields = (query?.fields as string).split(',').join(' ')
  }
  const result = await sortQuery.select(fields)
  return result
}

const getSingleTour = async (id: string) => {
  const result = Tour.findById(id)
  return result
}

const updateTour = async (id: string, payload: Partial<ITour>) => {
  const result = Tour.findByIdAndUpdate(id, payload)
  return result
}

const deleteTour = async (id: string) => {
  const result = Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id)

  const nextSchedule = tour?.getNextNearestStartDateAndEndData()

  return {
    tour,
    nextSchedule,
  }
}

export const tourService = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
