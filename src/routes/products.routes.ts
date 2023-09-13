import express from 'express';
import controllers from '../controllers';

const { productController } = controllers;
const productsRoute = express.Router();

productsRoute.post('/', productController.createProduct);

export default productsRoute;