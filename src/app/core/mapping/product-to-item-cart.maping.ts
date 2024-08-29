import Product from "../../shared/models/product.interface";
import ProductCart from "../interfaces/product-cart.interface";

export default class ProductToItemCart {
  static mapProductToCart(product: Product): ProductCart {
    return {
      product: product,
      totalPrice: product.price,
      quantity: 1
    };
  }
}
