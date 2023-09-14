import { Request, Response } from 'express';
import { orderService } from '../services';
import mapStatusToHTTP from '../utils/mapStatusToHTTP';

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await orderService.getOrders();
  res.status(mapStatusToHTTP(status)).json(data);
};

export default {
  getOrders,
};