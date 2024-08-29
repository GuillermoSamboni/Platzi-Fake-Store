import { inject, Inject } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice";
import { catchError, map, of } from "rxjs";
import StateListGeneric from "@core/interfaces/states/state-list-generic.interface";
import Category from "@shared/models/category.interface";
import CategoriesService from "./categories.service";

@Inject({
  providedIn: 'root'
})
export default class CategoriesStateImplService {
  private service = inject(CategoriesService)

  // ? setup list categories implementation state service
  private initStateCategoryList: StateListGeneric<Category[]> = {
    items: [],
    status: 'loading',
  };

  private loadCategories$ = this.service.getAllCategories().pipe(
    map((categories) => ({ items: categories, status: 'success' as const })),
    catchError(() => {
      return of({
        items: [],
        status: 'error' as const,
      });
    })
  )

  stateList = signalSlice({
    initialState: this.initStateCategoryList,
    sources: [this.loadCategories$]
  })

}
