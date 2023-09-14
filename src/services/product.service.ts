import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductReturn } from '../types/ServiceReturns';

export const createProduct = async (product: ProductInputtableTypes): ProductReturn => {
  const { dataValues: { orderId, ...createdProduct } } = await ProductModel.create(product);
  return { status: 'CREATED', data: createdProduct };
};

export const getProducts = async (): ProductReturn => {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
};
