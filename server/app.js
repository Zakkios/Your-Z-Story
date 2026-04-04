import { Hono } from 'hono';
import { cors } from 'hono/cors';
import choiceRoutes from './routes/choiceRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = new Hono();

app.use('*', cors());

app.route('/', choiceRoutes);

app.onError(errorHandler);

export default app;
