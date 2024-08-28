import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import ProductStateImplService from '../../../../core/services/products/product-state-impl.service';
import { ErrorMessageComponent } from '../../../../shared/ui/messages/error-message/error-message.component';
import { LoaderSpinnerComponent } from '../../../../shared/ui/loaders/loader-spinner/loader-spinner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ErrorMessageComponent, LoaderSpinnerComponent, ErrorMessageComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsService, ProductStateImplService]
})
export class ProductDetailComponent {
  productsStateImpl = inject(ProductStateImplService)
  id = input.required<string>()

  ngOnInit(): void {
    this.productsStateImpl.stateView.getProductById(this.id());
  }

}
