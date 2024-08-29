import ProductCart from "@core/interfaces/products/product-cart.interface";
import Product from "@shared/models/product.interface";

export default class ProductToItemCart {
  static mapProductToCart(product: Product): ProductCart {
    return {
      product: product,
      totalPrice: product.price,
      quantity: 1
    };
  }
}
