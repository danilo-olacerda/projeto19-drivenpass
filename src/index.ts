import express from 'express';
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router';
import { errorHandlerMiddleware } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});