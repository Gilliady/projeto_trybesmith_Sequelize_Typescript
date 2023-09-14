import express from 'express';
import { orderController } from '../controllers';

// const { productController } = controllers;
const orderRoute = express.Router();

orderRoute.get('/', orderController.getOrders);

export default orderRoute;