import Product from "@shared/models/product.interface";

export default interface ProductCart {
  product: Product;
  totalPrice: number;
  quantity: number;
}
