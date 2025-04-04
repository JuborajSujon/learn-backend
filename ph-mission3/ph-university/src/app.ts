import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { globalErrorHandler } from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  }),
);
app.use(cookieParser());

//Appication routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('Home Route');
};

app.get('/', test);

app.use(globalErrorHandler);

// Not found route
app.use(notFound);

export default app;
