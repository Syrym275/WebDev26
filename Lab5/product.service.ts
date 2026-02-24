import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

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
      likes:222, categoryId:1
    },

    { id:3, name:'Samsung Galaxy S25 Ultra', description:'The top-tier model featuring a 200MP main camera', price:520000, rating:4.8, 
      image:'https://avatars.mds.yandex.net/get-mpic/5209134/2a00000194bc5c2c861b3de2b9670b73f382/orig', 
      images:[
        'https://avatars.mds.yandex.net/get-mpic/5209134/2a00000194bc5c2c861b3de2b9670b73f382/orig',
        'https://avatars.mds.yandex.net/get-mpic/5235182/2a00000194cc9617d959b90d389e7eed655d/orig',
        'https://basket-27.wbbasket.ru/vol5056/part505688/505688806/images/big/1.webp'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:345, categoryId:1
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

    { id:5, name:'Xiaomi MIX Flip', description:'Specialized, high-end foldable devices showcasing innovative display tech', price:450000, rating:4.8, 
      image:'https://avatars.mds.yandex.net/get-mpic/10567286/2a00000194e65c876e728a780fcde6ac5054/orig', 
      images:[
        'https://avatars.mds.yandex.net/get-mpic/10567286/2a00000194e65c876e728a780fcde6ac5054/orig',
        'https://ir.ozone.ru/s3/multimedia-1-p/7175712589.jpg',
        'https://static.eldorado.ru/img1/b/bb/354364003.jpg'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:505, categoryId:1
    },

    { id:6, name:'MacBook Pro 14-inch', description:'Engineered for power users, creators, and developers.', price:520000, rating:4.8, 
      image:'https://avatars.mds.yandex.net/i?id=093eda8cec1682371cdf323be8492450_sr-16476183-images-thumbs&n=13', 
      images:[
        'https://avatars.mds.yandex.net/i?id=093eda8cec1682371cdf323be8492450_sr-16476183-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=d997da09857e69085a807dba15745c3410396c90-4080605-images-thumbs&n=13',
        'https://dkstatics-public.digikala.com/digikala-products/e2a13a371874d95beafc36cb24d618a41fe36c2c_1720734343.jpg?x-oss-process=image/resize,h_1600/quality,q_80'
      ], 
      link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
      likes:765, categoryId:2
    },

    { 
  id:7, 
  name:'ASUS ROG Zephyrus G14', 
  description:'Compact gaming laptop with powerful RTX graphics and Ryzen processor.', 
  price:689000, 
  rating:4.7, 
  image:'https://main-cdn.sbermegamarket.ru/big1/hlr-system/146/070/045/412/410/38/600009921173b0.jpeg', 
  images:[
    'https://avatars.mds.yandex.net/i?id=8f1c2d3a4b5c6d7e8f9a0b1c2d3e4f5a_sr-12345678-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d_sr-22334455-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_sr-33445566-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-123456/', 
  likes:542, 
  categoryId:2
},

{ 
  id:8, 
  name:'Lenovo ThinkPad X1 Carbon Gen 11', 
  description:'Ultra-light business laptop with premium build and strong security.', 
  price:745000, 
  rating:4.9, 
  image:'https://avatars.mds.yandex.net/i?id=4e16ea18505ca4d094115f8060ab2458_l-8550886-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=aa11bb22cc33dd44ee55ff6677889900_sr-44556677-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=bb22cc33dd44ee55ff6677889900aa11_sr-55667788-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=cc33dd44ee55ff6677889900aa11bb22_sr-66778899-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-654321/', 
  likes:398, 
  categoryId:2
},
{ 
  id:9, 
  name:'HP Spectre x360 14', 
  description:'Convertible touchscreen laptop with sleek design and OLED display.', 
  price:612000, 
  rating:4.6, 
  image:'https://avatars.mds.yandex.net/i?id=62a4242a67ef1ea4e23494e3af1ddc06_l-5675611-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=dd44ee55ff6677889900aa11bb22cc33_sr-77889900-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ee55ff6677889900aa11bb22cc33dd44_sr-88990011-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ff6677889900aa11bb22cc33dd44ee55_sr-99001122-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/hp-spectre-x360-789012/', 
  likes:471, 
  categoryId:2
},
{ 
  id:10, 
  name:'Acer Swift 5', 
  description:'Lightweight ultrabook with strong battery life and Intel Evo platform.', 
  price:498000, 
  rating:4.5, 
  image:'https://avatars.mds.yandex.net/i?id=b0c7a0f497a3806ffefc91bc2bb6dea8045ea40d-5221720-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=1122aabb3344ccdd5566ee77889900ff_sr-11122233-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=2233bbcc4455ddee6677ff889900aabb_sr-22233344-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=3344ccdd5566ee77889900ff1122aabb_sr-33344455-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/acer-swift-5-345678/', 
  likes:289, 
  categoryId:2
},

{ 
  id:11, 
  name:'Sony WH-1000XM5', 
  description:'Industry-leading noise cancellation with premium sound quality.', 
  price:189000, 
  rating:4.9, 
  image:'https://avatars.mds.yandex.net/i?id=81994de22d70cee8164f80144f85bbdadb2d03c8-11908918-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=4455ddeeff6677889900aabbcc112233_sr-44455566-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=5566eeff77889900aabbcc1122334455_sr-55566677-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6677ff889900aabbcc11223344556677_sr-66677788-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/sony-wh1000xm5-112244/', 
  likes:1024, 
  categoryId:3
},
{ 
  id:12, 
  name:'Apple AirPods Max', 
  description:'High-fidelity audio with spatial sound and premium aluminum build.', 
  price:329000, 
  rating:4.7, 
  image:'https://avatars.mds.yandex.net/i?id=fb22ce5227a8bdb0b09402964e21fb81_l-5321834-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=77889900aabbccddeeff112233445566_sr-77788899-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=889900aabbccddeeff11223344556677_sr-88899900-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=9900aabbccddeeff1122334455667788_sr-99900011-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/apple-airpods-max-778899/', 
  likes:865, 
  categoryId:3
},
{ 
  id:13, 
  name:'JBL Tune 770NC', 
  description:'Affordable wireless headphones with active noise cancelling.', 
  price:79000, 
  rating:4.4, 
  image:'https://avatars.mds.yandex.net/i?id=66e464a9dda5a6ba3c227471d1ee890a9a5dc2cb-13125018-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=aabbccddeeff00112233445566778899_sr-10111213-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=bbccddeeff00112233445566778899aa_sr-12131415-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ccddeeff00112233445566778899aabb_sr-13141516-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/jbl-tune-770nc-334455/', 
  likes:452, 
  categoryId:3
},
{ 
  id:14, 
  name:'Beats Studio3 Wireless', 
  description:'Deep bass performance with adaptive noise cancelling.', 
  price:159000, 
  rating:4.5, 
  image:'https://avatars.mds.yandex.net/i?id=a8b88d1945df0078e3a7bcf090b4df9e79ee0e6a-5042325-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=ddeeff00112233445566778899aabbcc_sr-14151617-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=eeff00112233445566778899aabbccdd_sr-15161718-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ff00112233445566778899aabbccddee_sr-16171819-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/beats-studio3-556677/', 
  likes:613, 
  categoryId:3
},
{ 
  id:15, 
  name:'Sennheiser Momentum 4', 
  description:'Audiophile-grade sound with exceptional battery life.', 
  price:214000, 
  rating:4.8, 
  image:'https://avatars.mds.yandex.net/i?id=fe87a5e2fe55a6be8a72498f38c15f1846e6edff-9181638-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=00112233445566778899aabbccddeeff_sr-17181920-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=112233445566778899aabbccddeeff00_sr-18192021-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=2233445566778899aabbccddeeff0011_sr-19202122-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/sennheiser-momentum4-998877/', 
  likes:734, 
  categoryId:3
},

{ 
  id:16, 
  name:'Apple iPad Air 5 (10.9-inch)', 
  description:'Powerful M1 chip tablet with Liquid Retina display and Apple Pencil support.', 
  price:389000, 
  rating:4.9, 
  image:'https://avatars.mds.yandex.net/i?id=c36d93d30a2295bed9b5417ff37ed112d5db3c26-10021306-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=5e0d4a2a9f1f8b7c6d5e4c3b2a1f0e9d_sr-9023456-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=7a6b5c4d3e2f1a9b8c7d6e5f4a3b2c1d_sr-8123456-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=9c8b7a6d5e4f3c2b1a0d9e8f7c6b5a4d_sr-7123456-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/apple-ipad-air-5-109-inch-223344/', 
  likes:1123, 
  categoryId:4
},

{ 
  id:17, 
  name:'Samsung Galaxy Tab S9', 
  description:'Premium Android tablet with AMOLED display and S Pen included.', 
  price:412000, 
  rating:4.8, 
  image:'https://object.pscloud.io/cms/cms/Photo/img_0_64_1594_0_1.jpg', 
  images:[
    'https://avatars.mds.yandex.net/i?id=3f2e1d0c9b8a7f6e5d4c3b2a1908e7d6_sr-6234567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=2a1b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_sr-5234567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e_sr-4234567-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-556677/', 
  likes:987, 
  categoryId:4
},

{ 
  id:18, 
  name:'Xiaomi Pad 6', 
  description:'High-refresh display tablet with Snapdragon processor and sleek metal body.', 
  price:229000, 
  rating:4.6, 
  image:'https://img.mvideo.ru/Big/400165295bb1.jpg', 
  images:[
    'https://avatars.mds.yandex.net/i?id=8d7c6b5a4e3f2d1c0b9a8f7e6d5c4b3a_sr-3234567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=6c5b4a3d2e1f0a9b8c7d6e5f4a3b2c1d_sr-2234567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=4b3a2c1d0e9f8a7b6c5d4e3f2a1b0c9d_sr-1234567-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/xiaomi-pad-6-889900/', 
  likes:654, 
  categoryId:4
},

{ 
  id:19, 
  name:'Lenovo Tab P12 Pro', 
  description:'Large 12.6-inch AMOLED tablet designed for productivity and entertainment.', 
  price:345000, 
  rating:4.5, 
  image:'https://aio.lv/img/cache/product/5020447/35443486_large.webp', 
  images:[
    'https://avatars.mds.yandex.net/i?id=abc123def456ghi789jkl012mno345pq_sr-2134567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=bcd234efg567hij890klm123nop456qr_sr-1134567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=cde345fgh678ijk901lmn234opq567rs_sr-0134567-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-667788/', 
  likes:432, 
  categoryId:4
},

{ 
  id:20, 
  name:'Huawei MatePad 11.5', 
  description:'Slim HarmonyOS tablet with smooth 120Hz display and stylus support.', 
  price:198000, 
  rating:4.4, 
  image:'https://avatars.mds.yandex.net/i?id=55560e9aaae2d15c73058b9d7bd5fc72_l-5334002-images-thumbs&n=13', 
  images:[
    'https://avatars.mds.yandex.net/i?id=xyz987uvw654rst321opq098lmn765kj_sr-9134567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=yza876vwx543stu210opq987lmn654ij_sr-8134567-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=zab765wxy432tuv109opq876lmn543hi_sr-7134567-images-thumbs&n=13'
  ], 
  link:'https://kaspi.kz/shop/p/huawei-matepad-115-445566/', 
  likes:389, 
  categoryId:4
}

    // { id:5, name:'', description:'', price:520000, rating:4.8, 
    //   image:'', 
    //   images:[
    //     '',
    //     '',
    //     ''
    //   ], 
    //   link:'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112233445/',
    //   likes:505, categoryId:1
    // }
    
    // { id:3, name:'MacBook Air M2', description:'Lightweight laptop with powerful Apple silicon chip.', price:750000, rating:4.8, image:'https://images.merstatic.com/imgcache/resized/images/offer/2025/03/29/image7_67e8346521e8a.jpg', 
    //   images:[
    //     'https://images.merstatic.com/imgcache/resized/images/offer/2025/03/29/image7_67e8346521e8a.jpg',
    //     'https://images.blocketcdn.se/dynamic/480x480c/item/18738435/b8fd3b9a-ca2b-487f-bddb-feed9b7021d0',
    //     'https://avatars.mds.yandex.net/get-mpic/1925870/2a00000192c922daf498fb008cb3844c231b/orig'
    //   ], 
    //   link:'https://kaspi.kz/shop/p/apple-macbook-air-m2-256gb-109876543/',
    //   likes:0, categoryId:1
    // },
    // { id:4, name:'AirPods Pro', description:'Wireless earbuds with noise cancellation.', price:120000, rating:4.6, image:'https://ir.ozone.ru/s3/multimedia-1-r/7793855343.jpg', 
    //   images:[
    //     'https://ir.ozone.ru/s3/multimedia-1-r/7793855343.jpg',
    //     'https://avatars.mds.yandex.net/get-marketpic/12324017/pic18cb80a6aea48d0d3e7d4feed05d2656/orig',
    //     'https://static.wixstatic.com/media/91aadc_58a28b0b711e41d29b74212075c2fca6~mv2.jpg/v1/fill/w_700,h_700,al_c,q_85,enc_avif,quality_auto/91aadc_58a28b0b711e41d29b74212075c2fca6~mv2.jpg'
    //   ], 
    //   link:'https://kaspi.kz/shop/p/apple-airpods-pro-102938475/' },
    // { id:5, name:'PlayStation 5', description:'Next-gen gaming console with stunning graphics.', price:350000, rating:4.9, image:'https://gamevent.ru/wp-content/uploads/2025/04/ps-5-de.jpg', 
    //   images:[
    //     'https://gamevent.ru/wp-content/uploads/2025/04/ps-5-de.jpg',
    //     'https://i.etsystatic.com/36092519/r/il/c75832/4005272399/il_800x800.4005272399_soy6.jpg',
    //     'https://ir.ozone.ru/s3/multimedia-1-d/8210279821.jpg'
    //   ], 
    //   link:'https://kaspi.kz/shop/p/sony-playstation-5-99887766/' },
    // { id:6, name:'Xiaomi Scooter', description:'Electric scooter perfect for city commuting.', price:180000, rating:4.5, image:'https://ir.ozone.ru/s3/multimedia-1-s/7144251976.jpg', images:[], link:'https://kaspi.kz/shop/p/xiaomi-mi-scooter-77665544/' },
    // { id:7, name:'LG Smart TV', description:'4K UHD Smart TV with webOS.', price:290000, rating:4.6, image:'https://avatars.mds.yandex.net/i?id=e2e665ddbecb967699fde6267fe1f4309f587de7-5660145-images-thumbs&n=13', images:[], link:'https://kaspi.kz/shop/p/lg-smart-tv-55443322/' },
    // { id:8, name:'Dyson Vacuum', description:'Powerful cordless vacuum cleaner.', price:330000, rating:4.7, image:'https://my-apple-store.ru/wa-data/public/shop/products/24/63/16324/images/34395/34395.750x0.jpg', images:[], link:'https://kaspi.kz/shop/p/dyson-vacuum-33221100/' },
    // { id:9, name:'GoPro Hero 11', description:'Action camera for extreme shooting.', price:210000, rating:4.6, image:'https://avatars.mds.yandex.net/i?id=fb18850afc56f642ba57b0f6a94c0de03f68848e-4937726-images-thumbs&n=13', images:[], link:'https://kaspi.kz/shop/p/gopro-hero-11-99881122/' },
    // { id:10, name:'Apple Watch Series 9', description:'Smartwatch with health tracking features.', price:240000, rating:4.8, image:'https://avatars.mds.yandex.net/get-mpic/12456181/2a0000018f838be1bbf08a09fb82acaf10ab/orig', images:[], link:'https://kaspi.kz/shop/p/apple-watch-series-9-66554433/' }
  
  ];

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.products;
  }
}