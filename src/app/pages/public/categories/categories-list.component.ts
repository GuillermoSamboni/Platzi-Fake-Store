import { Component, inject } from '@angular/core';
import LoaderSpinnerComponent from '@shared/ui/loaders/loader-spinner/loader-spinner.component';
import ErrorMessageComponent from '@shared/ui/messages/error-message/error-message.component';
import CategoriesService from '@services/categories/categories.service';
import CategoriesStateImplService from '@services/categories/categories-state-impl.service';
import CategoryItemComponent from '../ui/category-item/category-item.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CategoryItemComponent, LoaderSpinnerComponent, ErrorMessageComponent],
  templateUrl: './categories-list.component.html',
  styles: ``,
  providers: [CategoriesStateImplService, CategoriesService]
})
export class CategoriesListComponent {
  categoriesStateImpl = inject(CategoriesStateImplService)

}
