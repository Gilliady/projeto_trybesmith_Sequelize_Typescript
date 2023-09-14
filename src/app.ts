import express from 'express';
import { orderRoute, productsRoute } from './routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/orders', orderRoute);

export default app;
