import { Component, inject } from '@angular/core';
import CategoriesStateImplService from '../../../../core/services/categories/categories-state-impl.service';
import CategoriesService from '../../../../core/services/categories/categories.service';
import { CategoryItemComponent } from '../../ui/category-item/category-item.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CategoryItemComponent],
  templateUrl: './categories-list.component.html',
  styles: ``,
  providers: [CategoriesStateImplService, CategoriesService]
})
export class CategoriesListComponent {
  categoriesStateImpl = inject(CategoriesStateImplService)

}
