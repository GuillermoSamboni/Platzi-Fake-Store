import { inject, Injectable } from "@angular/core";
import { ProductsService } from "./products.service";
import { StateProductView } from "../../interfaces/state-product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { catchError, map, Observable, of, switchMap } from "rxjs";

@Injectable()
export default class ProductStateImplService {
  private service = inject(ProductsService)
  //! setup view implementation state service
  private initStateProduct: StateProductView = {
    product: null,
    status: 'loading',
  };

  stateView = signalSlice({
    initialState: this.initStateProduct,
    actionSources: {
      getProductById: (_state, action: Observable<string>) => action.pipe(
        switchMap((id) => this.service.getProductById(id).pipe(
          map((product) => ({ product, status: 'success' as const })),
          catchError(() => {
            return of({
              product: null,
              status: 'error' as const
            })
          })
        ))
      )
    }
  })
}
