import { Injectable } from "@angular/core";
import ProductCart from "../../interfaces/product-cart.interface";

@Injectable()
export default class StorageService {

  // Store cart items in local storage
  storeCartItems(cartItem: ProductCart) {
    const items = this.getCartItems()

    // If the cart item already exists in the cart, increment its quantity
    if (items.find((item: ProductCart) => item.product.id === cartItem.product.id)) {
      console.log("exist");
      items.find((item: ProductCart) => item.product.id === cartItem.product.id).quantity++;
    } else {
      items.push(cartItem);
    }
    localStorage.setItem("cartItems", JSON.stringify(items));
  }

  // Retrieve cart items from local storage
  getCartItems() {
    const cartItemsString = localStorage.getItem("cartItems");
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  // Remove cart items from local storage
  removeCartItems() {
    localStorage.removeItem("cartItems");
  }
}
