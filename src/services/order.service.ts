import OrdersModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderReturn } from '../types/ServiceReturns';

export const getOrders = async (): OrderReturn => {
  const orders = await OrdersModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  const ordersJSON = orders
    .map((order) => order.toJSON())
    .map((order) => ({
      ...order,
      productIds: order
        .productIds?.map(({ id }) => id),
    }));

  return { status: 'SUCCESSFUL', data: ordersJSON };
};

export default {
  getOrders,
};