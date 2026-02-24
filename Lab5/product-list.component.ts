import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';


import { Product } from '../product.model';
import { Category } from '../category.model';
import { ProductService } from '../product.service';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   rating: number;
//   image: string;
//   images: string[];
//   link: string;
// }

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  template: `
  <header>  
  <img src = "https://static.insales-cdn.com/images/products/1/4618/880833034/large_logo_square.fw.png"
      width="80px" height = "80px" >
  <p><b id="kaspi_h1">Kaspi.kz</b></p>
  <input type="text" placeholder="Search bar">
  </header>
    <h1>Online Store in Kaspi.kz</h1>

    <div *ngIf="products && products.length; else noProducts">
    <div *ngFor="let c of categories">

      <h1>{{ c.name }}</h1>

    <div class="grid">
      <div class="card" *ngFor="let p of products"
      [hidden]="p.categoryId !== c.id"
      >

        <img id="product_img" [src]="p.image" />

        <h2>{{ p.name }}</h2>

        <p>{{ p.description }}</p>

        <p id="pr"><b>{{ p.price | number }} KZT</b></p>

        
        <p>Likes: {{ p.likes }}</p>

        <p>Rating: {{ p.rating }} ⭐</p>

        <a [href]="p.link" target="_blank">Open in Kaspi</a>
        <br>

        <button id="view_gallery" (click)="toggleGallery(p.id)">
          {{ showGallery[p.id] ? 'Hide Gallery' : 'View Gallery' }}
        </button>
        
        <br>
        

        <div class="gallery" *ngIf="showGallery[p.id] && p.images.length > 1">

          <br>

          <img
            class="main-img"
            [src]="p.images[currentImageIndex[p.id] || 0]"
          />

          <button (click)="prevImage(p)">◀</button>
          <button (click)="nextImage(p)">▶</button>

          <div class="thumbs">
            <img
              *ngFor="let img of p.images; let i = index"
              [src]="img"
              (click)="setImage(p.id, i)"
              class="thumb"
            />
          </div>

        </div>

        <div class="share">
          <button id="whatsapp" (click)="shareWA(p)">WhatsApp</button>
          <button id="telega" (click)="shareTG(p)">Telegram</button>
        </div>

      </div>
    </div>
    </div>
    </div>

    <ng-template #noProducts>
  <p style="text-align:center; font-size:20px; color:red;">
    No products in this category.
  </p>
</ng-template>

    <br>
    <h1>Scan to go
    to the app Kaspi.kz</h1>
    <br>
    <img id="qr" src="https://kaspi.kz/img/QRs/qr-offices-map.png">
    <br>
    

    <hr>
    <footer>
      <p id="bottom">© 2012-2026, АО «Kaspi Bank» <br>
      Лицензия на проведение банковских и иных операций и деятельности на рынке ценных бумаг №1.2.245/61 от 03.02.2020, выданная Агентством Республики Казахстан по регулированию и развитию финансового рынка</p>
    </footer>

    <!-- optional task-->

    
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 20px;
      font-size:40px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
      gap: 20px;
      padding: 20px;
      background-color:rgb(242, 243, 243);
    }

    .card {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 10px;
      background: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      background-color:white;
    }

    #product_img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 5px;
    }

    button {
      margin-right: 8px;
      margin-top: 8px;
      cursor: pointer;
      background-color:white;
    }

    p, .share, a, h2, b{
    background-color:white;
    }

    #kaspi_h1{
      position:absolute;
      left:100px;
      top:15px;
      background-color:rgb(242, 243, 243);
      font-size:40px;
      font-family:Roboto;
    }

    input{
      width:15%;
      height:20px;
      border-radius: 8px;
      border-color: rgb(212, 209, 209);
      border-width: 0.3px;

      position:absolute;
      right:20px;
      top:20px;
    }

    #qr{
      display: block;      /* 1. Change the image from inline to block-level */
      margin-left: auto;   /* 2. Set left margin to auto */
      margin-right: auto;
    }

    #bottom{
      width:50%;
      margin-left:3%;
      background-color: rgb(242, 243, 243);
    }


    <!-- optional task style-->

    .gallery {
      text-align: center;
      
    }

    .main-img {
      width: 90%;
      height: 250px;
      object-fit: cover;
      display: block;      /* 1. Change the image from inline to block-level */
      margin-left: auto;   /* 2. Set left margin to auto */
      margin-right: auto;
    }

    .thumbs {
      display: flex;
      justify-content: center;
      gap: 5px;
      margin-top: 5px;
}

    .thumb {
      width: 50px;
      height: 50px;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid transparent;
  }

    .thumb:hover {
      border-color: blue;
    }

    button{
      border-radius: 8px;
      
    }
    
    #view_gallery{
      border-color:yellow;
    }

    #telega{
      border-color:blue;
     
    }

    #whatsapp{
      border-color:green;
    }

  `]
})
export class ProductListComponent {

  

  currentImageIndex: { [key: number]: number } = {};
  showGallery: { [key: number]: boolean } = {};

  @Input() products: Product[] = [];

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

  
}