import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductReturn } from '../types/ServiceReturns';

async function createProduct(product: ProductInputtableTypes): ProductReturn {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 'CREATED', data: createdProduct };
}

async function getProducts(): ProductReturn {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

export default {
  createProduct,
  getProducts,
};