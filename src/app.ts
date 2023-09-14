import express from 'express';
import { orderRoute, productsRoute, userRoute } from './routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/orders', orderRoute);
app.use(userRoute);
export default app;
