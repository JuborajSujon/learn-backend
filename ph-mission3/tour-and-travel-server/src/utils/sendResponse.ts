import { Response } from 'express'

interface IData<T> {
  statusCode: number
  status?: boolean
  message: string
  data: T | T[] | null
}

const sendResponse = <T>(res: Response, data: IData<T>) => {
  res.status(data.statusCode).json({
    status: data.status || true,
    message: data.message,
    data: data.data,
  })
}

export default sendResponse
