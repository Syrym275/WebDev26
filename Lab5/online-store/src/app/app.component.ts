import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductListComponent } from './product-list/product-list.component'; 

import { Product } from './product.model';
import { Category } from './category.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  onDeleteProduct(productId: number) {
  this.products = this.products.filter(p => p.id !== productId);
}
}