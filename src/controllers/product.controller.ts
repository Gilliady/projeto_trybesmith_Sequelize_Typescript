import { Request, Response } from 'express';
import services from '../services';
import mapStatusToHTTP from '../utils/mapStatusToHTTP';

const { productService } = services;
async function createProduct(req: Request, res: Response) {
  const { body } = req;
  const { status, data } = await productService.createProduct(body);
  res.status(mapStatusToHTTP(status)).json(data);
}

async function getProducts(_req: Request, res: Response) {
  const { status, data } = await productService.getProducts();
  res.status(mapStatusToHTTP(status)).json(data);
}

export default {
  createProduct,
  getProducts,
};