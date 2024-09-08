import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(`Error: ${error}`));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the MERN + TypeScript backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
