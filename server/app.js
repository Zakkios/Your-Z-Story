import express from 'express';
import cors from 'cors';
import choiceRoutes from './routes/choiceRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', choiceRoutes);

app.use(errorHandler);

export default app;