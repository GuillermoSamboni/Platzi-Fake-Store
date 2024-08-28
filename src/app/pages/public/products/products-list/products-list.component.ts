import { Component, inject, signal } from '@angular/core';
import { ProductItemComponent } from '../../ui/product-item/product-item.component';
import { ProductsStateImplService } from '../../../../core/services/products/products-state-impl.service';
import { ProductsService } from '../../../../core/services/products/products.service';
import { LoaderSpinnerComponent } from '../../../../shared/ui/loaders/loader-spinner/loader-spinner.component';
import { ErrorMessageComponent } from '../../../../shared/ui/messages/error-message/error-message.component';

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
