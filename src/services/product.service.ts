import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductReturn } from '../types/ServiceReturns';

async function createProduct(product: ProductInputtableTypes): ProductReturn {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 'CREATED', data: createdProduct };
}

export default {
  createProduct,
};