import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import Product from '@shared/models/product.interface';

@Component({
  selector: 'comp-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styles: ``
})
export class ProductItemComponent {
  product = input.required<Product>()
}
