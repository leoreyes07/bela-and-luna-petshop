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
    image: '/src/assets/products/harnesses/harness-black.png',
    category: 'Harnesses',
    tag: 'Best Seller'
  },
  {
    id: 'col2',
    name: 'Aztec Orange Collar',
    description: 'Aztec Pattern • Orange & Teal',
    price: 38,
    image: '/src/assets/products/collars/collar-aztec-orange.jpg',
    category: 'Collars',
    tag: 'Most Popular'
  },
  {
    id: 'bed6',
    name: 'Royal Purple Cloud',
    description: 'Velvet Soft Touch • Extra Padding',
    price: 65,
    image: '/src/assets/products/beds/bed-purple.jpg',
    category: 'Beds',
    tag: 'New Edition'
  }
];

export const CATEGORIES = [
  { name: 'Harnesses', icon: 'HarnessIcon' },
  { name: 'Collars', icon: 'CollarIcon' },
  { name: 'Beds', icon: 'Bed' },
  { name: 'Bowls', icon: 'BowlIcon' },
  { name: 'Toys', icon: 'TeddyBear' },
  { name: 'Others', icon: 'MoreHorizontal' }
];

export const TACTICAL_HARNESSES: Product[] = [
  {
    id: 'th1',
    name: 'Stealth Black Harness',
    description: 'Service K-9 • Security Unit',
    price: 115,
    image: '/src/assets/products/harnesses/harness-black.png',
    category: 'Harnesses',
    tag: 'Best Seller'
  },
  {
    id: 'th2',
    name: 'Desert Khaki Harness',
    description: 'Service K-9 • Tactical Gear',
    price: 110,
    image: '/src/assets/products/harnesses/harness-khaki.png',
    category: 'Harnesses'
  },
  {
    id: 'th3',
    name: 'Urban Purple Digital Camo',
    description: 'Service K-9 • Training in Progress',
    price: 125,
    image: '/src/assets/products/harnesses/harness-purple.png',
    category: 'Harnesses',
    tag: 'Most Popular'
  },
  {
    id: 'th4',
    name: 'Navy Digital Camo Harness',
    description: 'Service Dog • K9 Unit',
    price: 120,
    image: '/src/assets/products/harnesses/harness-blue-black.png',
    category: 'Harnesses'
  },
  {
    id: 'th5',
    name: 'Tactical Grey Harness',
    description: 'Police K-9 • Reflection Strips',
    price: 125,
    image: '/src/assets/products/harnesses/harness-grey.png',
    category: 'Harnesses',
    tag: 'Premium'
  },
  {
    id: 'th6',
    name: 'Rose Tactical Harness',
    description: 'Service Dog • Bright & Bold',
    price: 110,
    image: '/src/assets/products/harnesses/harness-pink.png',
    category: 'Harnesses'
  }
];

export const COLLARS: Product[] = [
  {
    id: 'col1',
    name: 'Geometric Teal Collar',
    description: 'Geometric Print • Teal & Orange',
    price: 35,
    image: '/src/assets/products/collars/collar-geometric.jpg',
    category: 'Collars',
    tag: 'Best Seller'
  },
  {
    id: 'col2',
    name: 'Aztec Orange Collar',
    description: 'Aztec Pattern • Orange & Teal',
    price: 38,
    image: '/src/assets/products/collars/collar-aztec-orange.jpg',
    category: 'Collars',
    tag: 'Most Popular'
  },
  {
    id: 'col3',
    name: 'Purple Chevron Collar',
    description: 'Purple Chevron • Modern Style',
    price: 35,
    image: '/src/assets/products/collars/collar-purple-chevron.jpg',
    category: 'Collars'
  },
  {
    id: 'col4',
    name: 'Blue Tribal Collar',
    description: 'Blue Tribal • Ethnic Design',
    price: 37,
    image: '/src/assets/products/collars/collar-blue-aztec.jpg',
    category: 'Collars'
  },
  {
    id: 'col5',
    name: 'Green Yellow Boho Collar',
    description: 'Boho Green & Yellow • Vibrant',
    price: 36,
    image: '/src/assets/products/collars/collar-green-yellow.jpg',
    category: 'Collars',
    tag: 'Most Popular'
  },
  {
    id: 'col6',
    name: 'Purple Aztec Collar',
    description: 'Aztec Pattern • Purple & Vibrant',
    price: 38,
    image: '/src/assets/products/collars/collar-purple-aztec.png',
    category: 'Collars',
    tag: 'New Edition'
  }
];

export const TOYS: Product[] = [
  {
    id: 'toy1',
    name: 'Sunflower Puzzle Feeder',
    description: 'Interactive Spinner • Level 1 Enrichment',
    price: 28,
    image: '/src/assets/products/toys/toy-puzzle-green.png',
    category: 'Toys',
    tag: 'Best Seller'
  },
  {
    id: 'toy2',
    name: 'Blue Galaxy Puzzle',
    description: 'Slow Feeder • Anti-Scoff Design',
    price: 32,
    image: '/src/assets/products/toys/toy-puzzle-blue.png',
    category: 'Toys',
    tag: 'Most Popular'
  },
  {
    id: 'toy3',
    name: 'Red Flower Maze',
    description: 'Level 2 Challenge • Enrichment Toy',
    price: 35,
    image: '/src/assets/products/toys/toy-puzzle-red.png',
    category: 'Toys'
  }
];

export const BEDS: Product[] = [
  {
    id: 'bed1',
    name: 'Lime Paradise Bed',
    description: 'Washable Cushion • Ultra-Soft Plush',
    price: 49,
    image: '/src/assets/products/beds/bed-lime.jpg',
    category: 'Beds',
    tag: 'Trending'
  },
  {
    id: 'bed2',
    name: 'Crimson Comfort Bed',
    description: 'Orthopedic Foam • Durable Cover',
    price: 55,
    image: '/src/assets/products/beds/bed-red.jpg',
    category: 'Beds',
    tag: 'Best Seller'
  },
  {
    id: 'bed3',
    name: 'Bubblegum Dream Bed',
    description: 'Breathable Fabric • Removable Cover',
    price: 52,
    image: '/src/assets/products/beds/bed-pink.jpg',
    category: 'Beds'
  },
  {
    id: 'bed4',
    name: 'Deep Sea Sanctuary',
    description: 'Premium Fleece • Anti-Slip Bottom',
    price: 58,
    image: '/src/assets/products/beds/bed-blue.jpg',
    category: 'Beds',
    tag: 'Premium'
  },
  {
    id: 'bed5',
    name: 'Morning Sky Blue Bed',
    description: 'Cooling Gel Fiber • Summer Comfort',
    price: 54,
    image: '/src/assets/products/beds/bed-lightblue.jpg',
    category: 'Beds'
  },
  {
    id: 'bed6',
    name: 'Royal Purple Cloud',
    description: 'Velvet Soft Touch • Extra Padding',
    price: 65,
    image: '/src/assets/products/beds/bed-purple.jpg',
    category: 'Beds',
    tag: 'New Edition'
  }
];

export const BOWLS: Product[] = [
  {
    id: 'bowl1',
    name: 'Serein Ceramic - Sage',
    description: 'Hand-glazed matte finish • Hypoallergenic ceramic',
    price: 42,
    image: '/src/assets/products/bowls/bowl-green.png',
    category: 'Bowls',
    tag: 'Trending'
  },
  {
    id: 'bowl2',
    name: 'Serein Ceramic - Cream',
    description: 'Minimalist stoneware • Dishwasher safe',
    price: 42,
    image: '/src/assets/products/bowls/bowl-beige.png',
    category: 'Bowls'
  },
  {
    id: 'bowl3',
    name: 'Serein Ceramic - Rose',
    description: 'Premium weighted clay • Anti-spill design',
    price: 42,
    image: '/src/assets/products/bowls/bowl-pink.png',
    category: 'Bowls',
    tag: 'Best Seller'
  },
  {
    id: 'bowl4',
    name: 'Serein Ceramic - Sky',
    description: 'Ethereal blue glaze • Scratch resistant',
    price: 42,
    image: '/src/assets/products/bowls/bowl-blue.png',
    category: 'Bowls'
  },
  {
    id: 'bowl5',
    name: 'Atlas Stainless - Cobalt',
    description: 'Double-walled insulated steel • Mirror finish',
    price: 35,
    image: '/src/assets/products/bowls/bowl-metal-blue.png',
    category: 'Bowls',
    tag: 'Durable'
  },
  {
    id: 'bowl6',
    name: 'Atlas Stainless - Ruby',
    description: 'Non-slip rubber base • High-gloss lacquer',
    price: 35,
    image: '/src/assets/products/bowls/bowl-metal-red.png',
    category: 'Bowls'
  },
  {
    id: 'bowl7',
    name: 'Atlas Stainless - Sunset',
    description: 'BPA-free powder coating • Adventure ready',
    price: 35,
    image: '/src/assets/products/bowls/bowl-metal-orange.png',
    category: 'Bowls'
  },
  {
    id: 'bowl8',
    name: 'Atlas Stainless - Blush',
    description: 'Lightweight & sturdy • Easy to clean',
    price: 35,
    image: '/src/assets/products/bowls/bowl-metal-pink.png',
    category: 'Bowls',
    tag: 'Most Popular'
  }
];

export const OTHERS: Product[] = [
  {
    id: 'other1',
    name: 'Happy Birthday Pink Kit',
    description: 'Includes bandana, hat, and banner!',
    price: 25,
    image: '/src/assets/products/others/hb_kit_pink.png',
    category: 'Others',
    tag: 'Trending'
  },
  {
    id: 'other2',
    name: 'Happy Birthday Blue Kit',
    description: 'Includes bandana, hat, and banner!',
    price: 25,
    image: '/src/assets/products/others/hb_kit_blue.png',
    category: 'Others'
  }
];
