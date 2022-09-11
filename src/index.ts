import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/router';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});