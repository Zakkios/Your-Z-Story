import express from 'express';
import cors from 'cors';
import choiceRoutes from './routes/choiceRoutes.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', choiceRoutes);

export default app;