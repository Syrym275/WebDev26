import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;           // Receives a single product
  @Output() delete = new EventEmitter<number>();

  currentImageIndex: number = 0;        // For gallery
  showGallery: boolean = false;

  // Likes
  likeProduct() {
    this.product.likes++;               // Increments likes
  }

  // Delete
  deleteProduct() {
    this.delete.emit(this.product.id);  // Emits event to parent
  }

  // Gallery
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  toggleGallery() {
    this.showGallery = !this.showGallery;
  }

  // Share
  shareWA() {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTG() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  setImage(index: number) {
    this.currentImageIndex = index;
  }

}