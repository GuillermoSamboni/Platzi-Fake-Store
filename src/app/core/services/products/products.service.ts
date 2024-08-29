import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { BaseHttpClient } from "@core/data-access/base-http";
import Product from "@shared/models/product.interface";

@Injectable({
  providedIn: 'root'
})
export default class ProductsService extends BaseHttpClient {

  // fetching get all products and return response
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }

  // fetching get product by id and return response
  getProductById(idProduct: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${idProduct}`)
  }
}
