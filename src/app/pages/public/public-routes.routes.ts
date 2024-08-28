import { Routes } from "@angular/router";
import { PublicLayoutComponent } from "../../layouts/public-layout/public-layout.component";
import { HomeComponent } from "./home/home.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { CategoriesListComponent } from "./categories/categories-list/categories-list.component";
import { CategoriesDetailComponent } from "./categories/categories-detail/categories-detail.component";

export const publicRoutes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'products-list', component: ProductsListComponent },
      { path: 'product-view/:id', component: ProductDetailComponent },
      { path: 'categories-list', component: CategoriesListComponent },
      { path: 'category-view/:id', component: CategoriesDetailComponent },
    ]
  },
];
