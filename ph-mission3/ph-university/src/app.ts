import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Appication routes
app.use('/api/v1', router);

app.get('/', (_req: Request, res: Response) => {
  res.send('Home Router');
});

app.use(globalErrorHandler);

// Not found route
app.use(notFound);

export default app;
