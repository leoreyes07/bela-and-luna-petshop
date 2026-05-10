export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
}

export interface CartItemType {
  product: Product;
  size: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'th1',
    name: 'Stealth Black Harness',
    description: 'Service K-9 • Security Unit',
    price: 115,
    image: new URL('./assets/products/harnesses/harness-black.png', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Vendido'
  },
  {
    id: 'col2',
    name: 'Aztec Orange Collar',
    description: 'Aztec Pattern • Orange & Teal',
    price: 38,
    image: new URL('./assets/products/collars/collar-aztec-orange.jpg', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'bed6',
    name: 'Royal Purple Cloud',
    description: 'Velvet Soft Touch • Extra Padding',
    price: 65,
    image: new URL('./assets/products/beds/bed-purple.jpg', import.meta.url).href,
    category: 'Beds',
    tag: 'Nueva Edición'
  }
];

export const CATEGORIES = [
  { name: 'Arneses', icon: 'HarnessIcon' },
  { name: 'Collares', icon: 'CollarIcon' },
  { name: 'Camas', icon: 'Bed' },
  { name: 'Platos', icon: 'BowlIcon' },
  { name: 'Juguetes', icon: 'TeddyBear' },
  { name: 'Otros', icon: 'MoreHorizontal' }
];

export const TACTICAL_HARNESSES: Product[] = [
  {
    id: 'th1',
    name: 'Stealth Black Harness',
    description: 'Service K-9 • Security Unit',
    price: 115,
    image: new URL('./assets/products/harnesses/harness-black.png', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Vendido'
  },
  {
    id: 'th2',
    name: 'Desert Khaki Harness',
    description: 'Service K-9 • Tactical Gear',
    price: 110,
    image: new URL('./assets/products/harnesses/harness-khaki.png', import.meta.url).href,
    category: 'Harnesses'
  },
  {
    id: 'th3',
    name: 'Urban Purple Digital Camo',
    description: 'Service K-9 • Training in Progress',
    price: 125,
    image: new URL('./assets/products/harnesses/harness-purple.png', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Popular'
  },
  {
    id: 'th4',
    name: 'Navy Digital Camo Harness',
    description: 'Service Dog • K9 Unit',
    price: 120,
    image: new URL('./assets/products/harnesses/harness-blue-black.png', import.meta.url).href,
    category: 'Harnesses'
  },
  {
    id: 'th5',
    name: 'Tactical Grey Harness',
    description: 'Police K-9 • Reflection Strips',
    price: 125,
    image: new URL('./assets/products/harnesses/harness-grey.png', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Premium'
  },
  {
    id: 'th6',
    name: 'Rose Tactical Harness',
    description: 'Service Dog • Bright & Bold',
    price: 110,
    image: new URL('./assets/products/harnesses/harness-pink.png', import.meta.url).href,
    category: 'Harnesses'
  }
];

export const COLLARS: Product[] = [
  {
    id: 'col1',
    name: 'Geometric Teal Collar',
    description: 'Geometric Print • Teal & Orange',
    price: 35,
    image: new URL('./assets/products/collars/collar-geometric.jpg', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Vendido'
  },
  {
    id: 'col2',
    name: 'Aztec Orange Collar',
    description: 'Aztec Pattern • Orange & Teal',
    price: 38,
    image: new URL('./assets/products/collars/collar-aztec-orange.jpg', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'col3',
    name: 'Purple Chevron Collar',
    description: 'Purple Chevron • Modern Style',
    price: 35,
    image: new URL('./assets/products/collars/collar-purple-chevron.jpg', import.meta.url).href,
    category: 'Collars'
  },
  {
    id: 'col4',
    name: 'Blue Tribal Collar',
    description: 'Blue Tribal • Ethnic Design',
    price: 37,
    image: new URL('./assets/products/collars/collar-blue-aztec.jpg', import.meta.url).href,
    category: 'Collars'
  },
  {
    id: 'col5',
    name: 'Green Yellow Boho Collar',
    description: 'Boho Green & Yellow • Vibrant',
    price: 36,
    image: new URL('./assets/products/collars/collar-green-yellow.jpg', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'col6',
    name: 'Purple Aztec Collar',
    description: 'Aztec Pattern • Purple & Vibrant',
    price: 38,
    image: new URL('./assets/products/collars/collar-purple-aztec.png', import.meta.url).href,
    category: 'Collars',
    tag: 'Nueva Edición'
  }
];

export const TOYS: Product[] = [
  {
    id: 'toy1',
    name: 'Sunflower Puzzle Feeder',
    description: 'Interactive Spinner • Level 1 Enrichment',
    price: 28,
    image: new URL('./assets/products/toys/toy-puzzle-green.png', import.meta.url).href,
    category: 'Toys',
    tag: 'Más Vendido'
  },
  {
    id: 'toy2',
    name: 'Blue Galaxy Puzzle',
    description: 'Slow Feeder • Anti-Scoff Design',
    price: 32,
    image: new URL('./assets/products/toys/toy-puzzle-blue.png', import.meta.url).href,
    category: 'Toys',
    tag: 'Más Popular'
  },
  {
    id: 'toy3',
    name: 'Red Flower Maze',
    description: 'Level 2 Challenge • Enrichment Toy',
    price: 35,
    image: new URL('./assets/products/toys/toy-puzzle-red.png', import.meta.url).href,
    category: 'Toys'
  }
];

export const BEDS: Product[] = [
  {
    id: 'bed1',
    name: 'Lime Paradise Bed',
    description: 'Washable Cushion • Ultra-Soft Plush',
    price: 49,
    image: new URL('./assets/products/beds/bed-lime.jpg', import.meta.url).href,
    category: 'Beds',
    tag: 'Tendencia'
  },
  {
    id: 'bed2',
    name: 'Crimson Comfort Bed',
    description: 'Orthopedic Foam • Durable Cover',
    price: 55,
    image: new URL('./assets/products/beds/bed-red.jpg', import.meta.url).href,
    category: 'Beds',
    tag: 'Más Vendido'
  },
  {
    id: 'bed3',
    name: 'Bubblegum Dream Bed',
    description: 'Breathable Fabric • Removable Cover',
    price: 52,
    image: new URL('./assets/products/beds/bed-pink.jpg', import.meta.url).href,
    category: 'Beds'
  },
  {
    id: 'bed4',
    name: 'Deep Sea Sanctuary',
    description: 'Premium Fleece • Anti-Slip Bottom',
    price: 58,
    image: new URL('./assets/products/beds/bed-blue.jpg', import.meta.url).href,
    category: 'Beds',
    tag: 'Premium'
  },
  {
    id: 'bed5',
    name: 'Morning Sky Blue Bed',
    description: 'Cooling Gel Fiber • Summer Comfort',
    price: 54,
    image: new URL('./assets/products/beds/bed-lightblue.jpg', import.meta.url).href,
    category: 'Beds'
  },
  {
    id: 'bed6',
    name: 'Royal Purple Cloud',
    description: 'Velvet Soft Touch • Extra Padding',
    price: 65,
    image: new URL('./assets/products/beds/bed-purple.jpg', import.meta.url).href,
    category: 'Beds',
    tag: 'Nueva Edición'
  }
];

export const BOWLS: Product[] = [
  {
    id: 'bowl1',
    name: 'Serein Ceramic - Sage',
    description: 'Hand-glazed matte finish • Hypoallergenic ceramic',
    price: 42,
    image: new URL('./assets/products/bowls/bowl-green.png', import.meta.url).href,
    category: 'Bowls',
    tag: 'Tendencia'
  },
  {
    id: 'bowl2',
    name: 'Serein Ceramic - Cream',
    description: 'Minimalist stoneware • Dishwasher safe',
    price: 42,
    image: new URL('./assets/products/bowls/bowl-beige.png', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl3',
    name: 'Serein Ceramic - Rose',
    description: 'Premium weighted clay • Anti-spill design',
    price: 42,
    image: new URL('./assets/products/bowls/bowl-pink.png', import.meta.url).href,
    category: 'Bowls',
    tag: 'Más Vendido'
  },
  {
    id: 'bowl4',
    name: 'Serein Ceramic - Sky',
    description: 'Ethereal blue glaze • Scratch resistant',
    price: 42,
    image: new URL('./assets/products/bowls/bowl-blue.png', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl5',
    name: 'Atlas Stainless - Cobalt',
    description: 'Double-walled insulated steel • Mirror finish',
    price: 35,
    image: new URL('./assets/products/bowls/bowl-metal-blue.png', import.meta.url).href,
    category: 'Bowls',
    tag: 'Duradero'
  },
  {
    id: 'bowl6',
    name: 'Atlas Stainless - Ruby',
    description: 'Non-slip rubber base • High-gloss lacquer',
    price: 35,
    image: new URL('./assets/products/bowls/bowl-metal-red.png', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl7',
    name: 'Atlas Stainless - Sunset',
    description: 'BPA-free powder coating • Adventure ready',
    price: 35,
    image: new URL('./assets/products/bowls/bowl-metal-orange.png', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl8',
    name: 'Atlas Stainless - Blush',
    description: 'Lightweight & sturdy • Easy to clean',
    price: 35,
    image: new URL('./assets/products/bowls/bowl-metal-pink.png', import.meta.url).href,
    category: 'Bowls',
    tag: 'Más Popular'
  }
];

export const OTHERS: Product[] = [
  {
    id: 'other1',
    name: 'Happy Birthday Pink Kit',
    description: 'Includes bandana, hat, and banner!',
    price: 25,
    image: new URL('./assets/products/others/hb_kit_pink.png', import.meta.url).href,
    category: 'Others',
    tag: 'Tendencia'
  },
  {
    id: 'other2',
    name: 'Happy Birthday Blue Kit',
    description: 'Includes bandana, hat, and banner!',
    price: 25,
    image: new URL('./assets/products/others/hb_kit_blue.png', import.meta.url).href,
    category: 'Others'
  }
];
