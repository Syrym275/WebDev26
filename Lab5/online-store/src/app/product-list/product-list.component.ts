import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../product.model';
import { Category } from '../category.model';
import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DecimalPipe, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
    
})
export class ProductListComponent {

  

  currentImageIndex: { [key: number]: number } = {};
  showGallery: { [key: number]: boolean } = {};

  @Input() products: Product[] = [];
  @Output() deleteProductEvent = new EventEmitter<number>();

deleteProduct(productId: number) {
  this.deleteProductEvent.emit(productId);
}

  
  //products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.categories = this.productService.getCategories();
  }

 
  shareWA(p: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + p.link)}`;
    window.open(url, '_blank');
  }

  shareTG(p: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }

  setImage(productId: number, index: number) {
    this.currentImageIndex[productId] = index;
  }

  nextImage(p: any) {
    const current = this.currentImageIndex[p.id] || 0;
    this.currentImageIndex[p.id] = (current + 1) % p.images.length;
  }

  prevImage(p: any) {
    const current = this.currentImageIndex[p.id] || 0;
    this.currentImageIndex[p.id] =
      (current - 1 + p.images.length) % p.images.length;
  }

  toggleGallery(productId: number) {
    this.showGallery[productId] = !this.showGallery[productId];
  }

  likeProduct(p: Product) {
  p.likes++; // increments likes counter for this product
}
}