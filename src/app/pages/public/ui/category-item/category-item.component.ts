import { Component, input } from '@angular/core';
import Category from '../../../../shared/models/category.interface';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styles: ``
})
export class CategoryItemComponent {
  category = input.required<Category>()
}
