// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Appication routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Home Router');
});

export default app;
