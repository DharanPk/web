
export const categories = [
  {
    id: 1,
    name: "Biryani",
    image: "https://th.bing.com/th/id/OIP.er1Gr9IUMiCMtFeZdSHdAAHaE8?w=272&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Tea",
    image: "https://th.bing.com/th/id/OIP.20S41pc863I2CrmxuHYKlgHaE7?w=290&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Dosa",
    image: "https://th.bing.com/th/id/OIP.MvnIsvAsbCdqew14Dcz0vQHaE8?w=277&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Juice",
    image: "https://www.bing.com/th/id/OIP.ZooKIpale71fxxFZudc4XQHaD4?w=326&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "Dessert",
    image: "https://th.bing.com/th/id/OIP.PIMj14SjsSvmNhGBGFGUrQHaE8?w=275&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

// export const items = [
//   { id: 1, name: "Chicken Biryani", price: 220, category: "Biryani" },
//   { id: 2, name: "Mutton Biryani", price: 260, category: "Biryani" },

//   { id: 3, name: "Masala Tea", price: 20, category: "Tea" },
//   { id: 4, name: "Ginger Tea", price: 25, category: "Tea" },

//   { id: 5, name: "Plain Dosa", price: 50, category: "Dosa" },
//   { id: 6, name: "Masala Dosa", price: 70, category: "Dosa" },

//   { id: 7, name: "Mango Juice", price: 80, category: "Juice" },
//   { id: 8, name: "Orange Juice", price: 60, category: "Juice" },

//   { id: 9, name: "Ice Cream", price: 90, category: "Dessert" },
//   { id: 10, name: "Brownie", price: 120, category: "Dessert" },
// ];

// export const foods = [

//   { id: 1, name: "Chicken Biryani", price: 180, category: "Biryani", img: "/images/biryani1.jpg" },
//   { id: 2, name: "Mutton Biryani", price: 250, category: "Biryani", img: "/images/biryani2.jpg" },
//   { id: 3, name: "Masala Dosa", price: 60, category: "Dosa", img: "/images/dosa1.jpg" },
//   { id: 4, name: "Tea", price: 15, category: "Tea", img: "/images/tea1.jpg" },
//   { id: 3, name: "Masala Dosa", price: 60, category: "Dosa", img: "/images/dosa1.jpg" },
//   { id: 4, name: "Tea", price: 15, category: "Tea", img: "/images/tea1.jpg" },

// ];


export const foods = [
  {
    category: "Biryani",
    items: [
      { id: 1, name: "HP Pavilion", price: 55000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn4dEKsf-lqbTizV_a5V3R8mtIJyz8YlLEw&s" ,category: "Biryani"},
      { id: 2, name: "Dell Inspiron", price: 60000, image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SX679_.jpg",category: "Biryani" },
      { id: 3, name: "Asus vivobook", price: 70000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU-9YjhcM2BpBDZacc24IjQnb_DzHjuuYmQ&s",category: "Biryani" },
      { id: 4, name: "Asus ROG Strix", price: 150000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnMe2Xyvx8i_PFsDXRTxiKcupV9X7XFHFVA&s",category: "Biryani" },
      { id: 5, name: "Lenovo LOQ", price: 45000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m49bh28ItQuK9BoJ3VC0Z1wzhwO_Wdfydw&s",category: "Biryani" },
      ],
  },
  {
    category: "Mobiles",
    items: [
      { id: 7, name: "Moto edge 60 fusion", price: 22000, image: "https://notereview.in/wp-content/uploads/2025/11/motorola-edge-60-fusion.jpg" },
      { id: 8, name: "Samsung S24 Ultra", price: 80000, image: "https://bhatiamobile.com/wp-content/uploads/2024/02/SAMSUNG-Galaxy-S24-Ultra-5G-Titanium-Violet-1-600x600.jpg.webp" },
      { id: 9, name: "Iphone 15 Pro", price: 50000, image: "https://phoneprice.in/wp-content/uploads/2025/10/iPhone-15-Pro-Price-In-India-600x600.jpg" },
      { id: 10, name: "Redmi Note 14", price: 20000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPDvljdmaocl8KxrxkptnbqVOyRQxdUDc_g&s" },
      { id: 11, name: "OnePlus Nord 5", price: 32000, image: "https://mobilesdetail.com/wp-content/uploads/2025/07/OnePlus-Nord-5-Dry_Ice.jpg" },
         ],
  },
  {
    category: "Headphones",
    items: [
      { id: 13, name: "Boat Rockerz", price: 1500, image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SX679_.jpg" },
      { id: 14, name: "Sony WH-1000XM4", price: 25000, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg" },
      { id: 15, name: "JBL Tune", price: 3000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJl54LOUh1jR92oWBlzY2Zih7H34-xMldjA&s" },
      { id: 16, name: "OnePlus Buds Pro 3", price: 3500, image: "https://www.geekwills.com/media/catalog/product/cache/d368225e56c0af8fed569f12698f474d/o/n/oneplus_buds_pro_3.png" },
      { id: 17, name: "Boat Earbuds", price: 4000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKK1KZI2aEVMB8jSu1AlIw-K_ibAEL4xwwA&s" },
       ],
  },
  {
    category: "TV",
    items: [
      { id: 13, name: "LG Smart Tv", price: 40000, image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/32lq640bpta_atrq_eail_in_c/gallery/32LQ640BPTA-D-1.jpg" },
      { id: 14, name: "Samsung Crystall", price: 30000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2FjtUehh8AikeTtXa-V6VniaPXYIglhW3g&s" },
      { id: 15, name: "Haier Tv", price: 100000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTfnM1jnFgfS8jT1ZN7ZYDDGQI1fjILOEOQ&s" },
      { id: 16, name: "Sony Bravia", price: 35000, image: "https://ecityuae.ae/cdn/shop/files/S400892726_1_60775f36-b8f7-48ac-98e7-60c3d6b5dfb3.jpg?v=1720544907" },
      { id: 17, name: "Philips tv", price: 29000, image: "https://m.media-amazon.com/images/I/71uW0NH6EUL.jpg" },
      ],
  },
  {
    category: "Other Accessories",
    items: [
      { id: 13, name: "HP Pen Drive", price: 1500, image: "https://tiimg.tistatic.com/fp/1/005/116/64-gb-pen-drive-hp--369.jpg" },
      { id: 14, name: "Arctic fox Mouse", price: 2500, image: "https://m.media-amazon.com/images/I/61x-3W9fUDL._AC_UF1000,1000_QL80_.jpg" },
      { id: 15, name: "Razer Mouse pro", price: 3000, image: "https://electrocity.b-cdn.net/acd-cgi/img/v1/2024/07/razer-cobra-wired-rgb-gaming-mouse-black-electrocity.ie-00001-600x600.jpg?width=600" },
      { id: 16, name: "Noise Smartwatch", price: 3500, image: "https://www.shopyvision.com/wp-content/uploads/2024/02/Noise-Twist-Go-Bluetooth-Calling-Smart-Watch.jpg" },
      { id: 17, name: "RTX 3050 Gpu", price: 800, image: "https://m.media-amazon.com/images/I/51QaFKJf3+L.jpg" },
       ],
  },
];






