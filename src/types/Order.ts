export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productIds?: { id: number }[];
};

export type OrderWithProducts = Order & {
};