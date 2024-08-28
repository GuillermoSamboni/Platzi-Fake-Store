import { Observable } from "rxjs";
import { BaseHttpClient } from "../../data-access/base-http";
import Product from "../../../shared/models/product.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseHttpClient {

  // fetching get all products and return response
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }

  // fetching get product by id and return response
  getProductById(idProduct: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${idProduct}`)
  }
}
