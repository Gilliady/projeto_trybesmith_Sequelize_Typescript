// import { OrderSequelizeModel } from '../database/models/order.model';
import { ProductSequelizeModel } from '../database/models/product.model';
import { Status } from '../utils/mapStatusToHTTP';
import { Product } from './Product';

export type ProductReturn = Promise<{
  status: keyof Status,
  data: Product | Product[] | ProductSequelizeModel | ProductSequelizeModel[],
}>;

/* interface Order extends OrderSequelizeModel {
  productIds: ProductSequelizeModel[];
} */

export type OrderReturn = Promise<{
  status: keyof Status,
  data: object | object[]
}>;

export type LoginReturn = {
  status: keyof Status;
  data: {
    token?: string;
    message?: string;
  };
};