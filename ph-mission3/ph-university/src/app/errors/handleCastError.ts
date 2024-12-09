import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleCastError = (
  error: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: error?.path,
      message: error?.message,
    },
  ];
  const statusCode = 400;

  return {
    statusCode,
    message: 'CastError - Invalid Id',
    errorSources,
  };
};

export default handleCastError;
