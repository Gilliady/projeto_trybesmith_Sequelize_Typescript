import { Request, Response } from 'express';
import { productService } from '../services';
import mapStatusToHTTP from '../utils/mapStatusToHTTP';

export const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { status, data } = await productService.createProduct(body);
  res.status(mapStatusToHTTP(status)).json(data);
};

export const getProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productService.getProducts();
  res.status(mapStatusToHTTP(status)).json(data);
};
