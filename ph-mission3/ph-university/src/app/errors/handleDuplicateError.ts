import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleDuplicateError = (error: any): TGenericErrorResponse => {
  const match = error.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: error?.keyValue,
      message: `${extractedMessage} is already taken`,
    },
  ];
  const statusCode = 409;

  return {
    statusCode,
    message: 'Duplicate field value entered',
    errorSources,
  };
};

export default handleDuplicateError;
