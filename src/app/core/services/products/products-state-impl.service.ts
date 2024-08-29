import { inject, Injectable } from "@angular/core";
import { catchError, map, of } from "rxjs";
import { signalSlice } from "ngxtension/signal-slice";
import ProductsService from "./products.service";
import { StateProductList } from "@core/interfaces/products/state-product.interface";

@Injectable()
export default class ProductsStateImplService {
  private service = inject(ProductsService)

  //? setup list products implementation state service
  private initStateProductList: StateProductList = {
    products: [],
    status: 'loading',
  };

  private loadProducts$ = this.service.getAllProducts().pipe(
    map((products) => ({ products, status: 'success' as const })),
    catchError(() => {
      return of({
        products: [],
        status: 'error' as const
      })
    })
  )

  stateList = signalSlice({
    initialState: this.initStateProductList,
    sources: [this.loadProducts$]
  })

}
