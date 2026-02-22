import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header>  
  <img src = "https://static.insales-cdn.com/images/products/1/4618/880833034/large_logo_square.fw.png"
      width="80px" height = "80px" >
  <p><b id="kaspi_h1">Kaspi.kz</b></p>
  <input type="text" placeholder="Search bar">
  </header>
    <h1>Online Store in Kaspi.kz</h1>

    <div class="grid">
      <div class="card" *ngFor="let p of products">

        <img id="product_img" [src]="p.image" />

        <h2>{{ p.name }}</h2>

        <p>{{ p.description }}</p>

        <p id="pr"><b>{{ p.price | number }} KZT</b></p>

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

  products: Product[] = [
    { id:1, 
      name:'iPhone 15', 
      description:'Latest Apple smartphone with powerful camera and performance.', 
      price:550000, 
      rating:4.9, 
      image:'https://avatars.mds.yandex.net/get-mpic/12281369/2a0000019031094f17ac2be7a8704279d902/orig', 
      images:[
        'https://avatars.mds.yandex.net/get-mpic/12281369/2a0000019031094f17ac2be7a8704279d902/orig',
        'https://avatars.mds.yandex.net/i?id=1d9869e77d2450bf8c63097c803db318_l-16296664-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=f01d1a0b6daa6bd096e0fe43da52d74fb6480124-5221316-images-thumbs&n=13'
      ], 
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-112345678/' },
    { id:2, name:'Samsung Galaxy S23', description:'Flagship Android phone with amazing display.', price:420000, rating:4.7, image:'https://avatars.mds.yandex.net/i?id=e8a7c34fe71437a9bfd12851d5ab901b_l-8159518-images-thumbs&n=13', 
      images:[
        'https://avatars.mds.yandex.net/i?id=e8a7c34fe71437a9bfd12851d5ab901b_l-8159518-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/get-mpic/16310377/2a000001991e06925a19475ce079d588219d/orig',
        'https://avatars.mds.yandex.net/get-mpic/12394941/2a0000019473fe7ccc9e600c846c3cb53fa5/orig'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/' },
    { id:3, name:'MacBook Air M2', description:'Lightweight laptop with powerful Apple silicon chip.', price:750000, rating:4.8, image:'https://images.merstatic.com/imgcache/resized/images/offer/2025/03/29/image7_67e8346521e8a.jpg', 
      images:[
        'https://images.merstatic.com/imgcache/resized/images/offer/2025/03/29/image7_67e8346521e8a.jpg',
        'https://images.blocketcdn.se/dynamic/480x480c/item/18738435/b8fd3b9a-ca2b-487f-bddb-feed9b7021d0',
        'https://avatars.mds.yandex.net/get-mpic/1925870/2a00000192c922daf498fb008cb3844c231b/orig'
      ], 
      link:'https://kaspi.kz/shop/p/apple-macbook-air-m2-256gb-109876543/' },
    { id:4, name:'AirPods Pro', description:'Wireless earbuds with noise cancellation.', price:120000, rating:4.6, image:'https://ir.ozone.ru/s3/multimedia-1-r/7793855343.jpg', 
      images:[
        'https://ir.ozone.ru/s3/multimedia-1-r/7793855343.jpg',
        'https://avatars.mds.yandex.net/get-marketpic/12324017/pic18cb80a6aea48d0d3e7d4feed05d2656/orig',
        'https://static.wixstatic.com/media/91aadc_58a28b0b711e41d29b74212075c2fca6~mv2.jpg/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/91aadc_58a28b0b711e41d29b74212075c2fca6~mv2.jpg'
      ], 
      link:'https://kaspi.kz/shop/p/apple-airpods-pro-102938475/' },
    { id:5, name:'PlayStation 5', description:'Next-gen gaming console with stunning graphics.', price:350000, rating:4.9, image:'https://gamevent.ru/wp-content/uploads/2025/04/ps-5-de.jpg', 
      images:[
        'https://gamevent.ru/wp-content/uploads/2025/04/ps-5-de.jpg',
        'https://i.etsystatic.com/36092519/r/il/c75832/4005272399/il_800x800.4005272399_soy6.jpg',
        'https://ir.ozone.ru/s3/multimedia-1-d/8210279821.jpg'
      ], 
      link:'https://kaspi.kz/shop/p/sony-playstation-5-99887766/' },
    { id:6, name:'Xiaomi Scooter', description:'Electric scooter perfect for city commuting.', price:180000, rating:4.5, image:'https://ir.ozone.ru/s3/multimedia-1-s/7144251976.jpg', images:[], link:'https://kaspi.kz/shop/p/xiaomi-mi-scooter-77665544/' },
    { id:7, name:'LG Smart TV', description:'4K UHD Smart TV with webOS.', price:290000, rating:4.6, image:'https://avatars.mds.yandex.net/i?id=e2e665ddbecb967699fde6267fe1f4309f587de7-5660145-images-thumbs&n=13', images:[], link:'https://kaspi.kz/shop/p/lg-smart-tv-55443322/' },
    { id:8, name:'Dyson Vacuum', description:'Powerful cordless vacuum cleaner.', price:330000, rating:4.7, image:'https://my-apple-store.ru/wa-data/public/shop/products/24/63/16324/images/34395/34395.750x0.jpg', images:[], link:'https://kaspi.kz/shop/p/dyson-vacuum-33221100/' },
    { id:9, name:'GoPro Hero 11', description:'Action camera for extreme shooting.', price:210000, rating:4.6, image:'https://avatars.mds.yandex.net/i?id=fb18850afc56f642ba57b0f6a94c0de03f68848e-4937726-images-thumbs&n=13', images:[], link:'https://kaspi.kz/shop/p/gopro-hero-11-99881122/' },
    { id:10, name:'Apple Watch Series 9', description:'Smartwatch with health tracking features.', price:240000, rating:4.8, image:'https://avatars.mds.yandex.net/get-mpic/12456181/2a0000018f838be1bbf08a09fb82acaf10ab/orig', images:[], link:'https://kaspi.kz/shop/p/apple-watch-series-9-66554433/' }
  ];

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