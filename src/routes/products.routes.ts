import express from 'express';
import controllers from '../controllers';

const { productController } = controllers;
const productsRoute = express.Router();

productsRoute.post('/', productController.createProduct);
productsRoute.get('/', productController.getProducts);

export default productsRoute;