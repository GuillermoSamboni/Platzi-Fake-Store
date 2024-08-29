import { Component, inject } from '@angular/core';
import { ProductItemComponent } from '@pages/public/ui/product-item/product-item.component';
import LoaderSpinnerComponent from '@shared/ui/loaders/loader-spinner/loader-spinner.component';
import ErrorMessageComponent from '@shared/ui/messages/error-message/error-message.component';
import ProductsService from '@services/products/products.service';
import ProductsStateImplService from '@services/products/products-state-impl.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductItemComponent, LoaderSpinnerComponent, ErrorMessageComponent],
  templateUrl: './products-list.component.html',
  styles: ``,
  providers: [ProductsStateImplService, ProductsService]
})
export class ProductsListComponent {
  productStateImpl = inject(ProductsStateImplService)


}
