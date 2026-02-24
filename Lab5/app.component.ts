import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  
  template: `
    <h1>All Products (Old Store)</h1>
    <app-product-list [products]="products"></app-product-list>
  `,
  standalone: true,           
  imports: [CommonModule, ProductListComponent] 
})
export class AppComponent {
  
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
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-112345678/',
      likes:0, categoryId:1
     },
    { id:2, name:'Samsung Galaxy S23', description:'Flagship Android phone with amazing display.', price:420000, rating:4.7, image:'https://avatars.mds.yandex.net/i?id=e8a7c34fe71437a9bfd12851d5ab901b_l-8159518-images-thumbs&n=13', 
      images:[
        'https://avatars.mds.yandex.net/i?id=e8a7c34fe71437a9bfd12851d5ab901b_l-8159518-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/get-mpic/16310377/2a000001991e06925a19475ce079d588219d/orig',
        'https://avatars.mds.yandex.net/get-mpic/12394941/2a0000019473fe7ccc9e600c846c3cb53fa5/orig'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:0, categoryId:1
    },

    { id:3, name:'Samsung Galaxy S25 Ultra', description:'The top-tier model featuring a 200MP main camera', price:520000, rating:4.8, 
      image:'https://avatars.mds.yandex.net/get-mpic/5209134/2a00000194bc5c2c861b3de2b9670b73f382/orig', 
      images:[
        'https://avatars.mds.yandex.net/get-mpic/5209134/2a00000194bc5c2c861b3de2b9670b73f382/orig',
        'https://avatars.mds.yandex.net/get-mpic/5235182/2a00000194cc9617d959b90d389e7eed655d/orig',
        'https://basket-27.wbbasket.ru/vol5056/part505688/505688806/images/big/1.webp'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:0, categoryId:1
    },

    { id:4, name:'Xiaomi 15 Ultra', description:'The top-tier model featuring a 200MP main camera', price:230000, rating:4.8, 
      image:'https://avatars.mds.yandex.net/i?id=d4e694c99bc35c48e9a822cb24106a4a7767d816-10703010-images-thumbs&n=13', 
      images:[
        'https://avatars.mds.yandex.net/i?id=d4e694c99bc35c48e9a822cb24106a4a7767d816-10703010-images-thumbs&n=13',
        'https://static.eldorado.ru/img1/b/bb/139724004.jpg',
        'https://i.ebayimg.com/images/g/neYAAOSwQKpnwUjs/s-l1600.jpg'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:0, categoryId:1
    },

    { id:4, name:'Xiaomi 15 Ultra', description:'The flagship series with premium Leica-engineered cameras, boasting 200MP sensors, Snapdragon 8 Elite processors, and high-quality AMOLED displays.', price:520000, rating:4.8, 
      image:'', 
      images:[
        '',
        '',
        ''
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:0, categoryId:1
    }
  ];
}