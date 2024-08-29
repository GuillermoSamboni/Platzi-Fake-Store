import Product from "@shared/models/product.interface";

export interface StateProductList {
  products: Product[];
  status: 'loading' | 'success' | 'error',
}

export interface StateProductView {
  product: Product | null;
  status: 'loading' | 'success' | 'error',
}
