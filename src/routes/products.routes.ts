import express from 'express';
import { productController } from '../controllers';

// const { productController } = controllers;
const productsRoute = express.Router();

productsRoute.post('/', productController.createProduct);
productsRoute.get('/', productController.getProducts);

export default productsRoute;