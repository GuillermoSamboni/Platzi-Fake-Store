import { Injectable } from "@angular/core";
import { BaseHttpClient } from "@core/data-access/base-http";
import Category from "@shared/models/category.interface";

@Injectable()
export default class CategoriesService extends BaseHttpClient {

  // fetching get all categories and return response
  getAllCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }
}
