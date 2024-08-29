import { Component, effect, inject, input, output, signal } from '@angular/core';
import { ProductsService } from '../../../../core/services/products/products.service';
import ProductStateImplService from '../../../../core/services/products/product-state-impl.service';
import { ErrorMessageComponent } from '../../../../shared/ui/messages/error-message/error-message.component';
import { LoaderSpinnerComponent } from '../../../../shared/ui/loaders/loader-spinner/loader-spinner.component';
import { RouterLink } from '@angular/router';
import Product from '../../../../shared/models/product.interface';
import AuthService from '../../../../core/services/auth/auth.service';
import ErrorNoAuthComponent from '../../../../shared/ui/messages/error-no-auth/error-no-auth.component';
import StorageService from '../../../../core/services/storage/storage.service';
import ProductToItemCart from '../../../../core/mapping/product-to-item-cart.maping';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ErrorNoAuthComponent, ErrorMessageComponent, LoaderSpinnerComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsService, ProductStateImplService, StorageService]
})
export class ProductDetailComponent {
  productsStateImpl = inject(ProductStateImplService)
  storageService = inject(StorageService)

  private authService = inject(AuthService)

  id = input.required<string>()

  constructor() {
    effect(() => {
      this.productsStateImpl.stateView.getProductById(this.id())
    })
  }

  isAuthenticated = signal<Boolean>(true)

  getDismissChild(dismiss: Boolean) {
    this.isAuthenticated.set(dismiss)
  }
  addToCart(product: Product) {
    const isLoggedIn = this.authService.isAuthenticated()
    this.isAuthenticated.set(isLoggedIn)

    if (this.isAuthenticated()) {
      this.storageService.storeCartItems(ProductToItemCart.mapProductToCart(product))
    }
  }


}
