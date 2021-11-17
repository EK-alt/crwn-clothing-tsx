const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageurl: 'http://localhost:3003/images/shop/Hats/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageurl: 'http://localhost:3003/images/shop/Hats/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageurl: 'http://localhost:3003/images/shop/Hats/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageurl: 'http://localhost:3003/images/shop/Hats/grey-brim.png',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageurl: 'http://localhost:3003/images/shop/Hats/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageurl: 'http://localhost:3003/images/shop/Hats/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageurl: 'http://localhost:3003/images/shop/Hats/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageurl: 'http://localhost:3003/images/shop/Hats/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageurl: 'http://localhost:3003/images/shop/Hats/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageurl: 'http://localhost:3003/images/shop/Sneakers/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageurl: 'http://localhost:3003/images/shop/Jackets/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageurl: 'http://localhost:3003/images/shop/Jackets/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageurl: 'http://localhost:3003/images/shop/Jackets/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageurl: 'http://localhost:3003/images/shop/Jackets/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageurl: 'http://localhost:3003/images/shop/Jackets/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageurl: 'http://localhost:3003/images/shop/Womens/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageurl: 'http://localhost:3003/images/shop/Womens/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageurl: 'http://localhost:3003/images/shop/Womens/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageurl: 'http://localhost:3003/images/shop/Womens/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageurl: 'http://localhost:3003/images/shop/Womens/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageurl: 'http://localhost:3003/images/shop/Womens/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageurl: 'http://localhost:3003/images/shop/Womens/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageurl: 'http://localhost:3003/images/shop/Mens/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageurl: 'http://localhost:3003/images/shop/Mens/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageurl: 'http://localhost:3003/images/shop/Mens/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageurl: 'http://localhost:3003/images/shop/Mens/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageurl: 'http://localhost:3003/images/shop/Mens/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageurl: 'http://localhost:3003/images/shop/Mens/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
