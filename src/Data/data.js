
export const categories = [
  {
    id: 1,
    name: "Biryani",
    image: "https://th.bing.com/th/id/OIP.er1Gr9IUMiCMtFeZdSHdAAHaE8?w=272&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Veg",
    image: "https://th.bing.com/th/id/OIP.3Zg1_rzhHhiBFMaHOAoKHAHaFj?w=231&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Non-Veg",
    image: "https://th.bing.com/th/id/OIP.QGaI6mtYc-np8sdgVIJrtgHaE8?w=286&h=191&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
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
      { id: 1, name: "Veg Briyani", price: 299, image: "https://th.bing.com/th/id/OIP.kURGRk6QsZw1oArABD_zTwHaF5?w=289&h=181&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" ,category: "Biryani"},
      { id: 2, name: "Chicken Briyani", price: 399, image: "https://th.bing.com/th/id/OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa?w=196&h=196&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category: "Biryani" },
      { id: 3, name: "Mutton Briyani", price: 400, image: "https://tse3.mm.bing.net/th/id/OIP.yu1c0La2doVvnEAth-9jZQHaEK?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",category: "Biryani" },
      { id: 4, name: "Hyderabad Briyani", price: 499, image: "https://th.bing.com/th/id/OIP.rxwa_V3Ms5Lc3GZoQ2xNiAHaHa?w=199&h=200&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category: "Biryani" },
      { id: 5, name: "Mandi Briyani", price: 599, image: "https://th.bing.com/th/id/OIP.sM6CF05YGmrJW3FrfFGK-wHaEK?w=271&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category: "Biryani" },
      ],
  },
  {
    category: "Veg",
    items: [
      { id: 7, name: "Panner Butter Masala", price: 22000, image: "https://th.bing.com/th/id/OIP.ATKZz4Y31flHfIm6jPYzxAHaHa?w=161&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" ,category:"Veg"},
      { id: 8, name: "Idli", price: 80000, image: "https://th.bing.com/th/id/OIP.ERoIuLxjwtM1ask7eyf4OwHaEO?w=307&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category:"Veg" },
      { id: 9, name: "Veg Manchurian Gravy", price: 50000, image: "https://th.bing.com/th/id/OIP.sVt4zUpukhmA5h_QVFMP-AHaFJ?w=269&h=187&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" ,category:"Veg"},
      { id: 10, name: "Curd Rice", price: 20000, image: "https://th.bing.com/th/id/OIP.c-IgVzl24T0b-JMXvfC29wHaHa?w=175&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category:"Veg" },
      { id: 11, name: "Puri", price: 32000, image: "https://th.bing.com/th/id/OIP.C6vcWF_SI9A530-06uFwqwHaFa?w=238&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",category:"Veg" },
         ],
  },
  {
    category: "Nov-Veg",
    items: [
      { id: 13, name: "Boat Rockerz", price: 1500, image: "", category: "Nov-Veg" },
      { id: 14, name: "Sony WH-1000XM4", price: 25000, image: "" , category: "Nov-Veg"},
      { id: 15, name: "JBL Tune", price: 3000, image: "", category: "Nov-Veg" },
      { id: 16, name: "OnePlus Buds Pro 3", price: 3500, image: "", category: "Nov-Veg" },
      { id: 17, name: "Boat Earbuds", price: 4000, image: "", category: "Nov-Veg" },
       ],
  },
  {
    category: "Juice",
    items: [
      { id: 13, name: "LG Smart Tv", price: 40000, image: "", category: "Juice" },
      { id: 14, name: "Samsung Crystall", price: 30000, image: "", category: "Juice" },
      { id: 15, name: "Haier Tv", price: 100000, image: "" , category: "Juice"},
      { id: 16, name: "Sony Bravia", price: 35000, image: "" , category: "Juice"},
      { id: 17, name: "Philips tv", price: 29000, image: "", category: "Juice" },
      ],
  },
  {
    category: "Dessert",
    items: [
      { id: 13, name: "HP Pen Drive", price: 1500, image: "",category: "Dessert" },
      { id: 14, name: "Arctic fox Mouse", price: 2500, image: "",category: "Dessert" },
      { id: 15, name: "Razer Mouse pro", price: 3000, image: "" ,category: "Dessert"},
      { id: 16, name: "Noise Smartwatch", price: 3500, image: "",category: "Dessert" },
      { id: 17, name: "RTX 3050 Gpu", price: 800, image: "",category: "Dessert" },
  
     ],
  },
];






