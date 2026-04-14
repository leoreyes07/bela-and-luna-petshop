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
    id: '1',
    name: 'The Luna Harness',
    description: 'Midnight Teal • Italian Leather',
    price: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDozI1cLNIbNKgvvoLLPzDrp2HFF9xZwppw6Oq-7FDe8-wt7jf7SeQL5HvaMOLYcKKvKgvnuDfd1mJ16b-k-MXTpjZuDi9z1PapeyiOIF74IOfDWQQlOpp29ddiDx_zWQaf106goMgEYYVa3lzWAzNDkOPz5_eiP55rXU_ZV56WPzkRhZSFC1Wi6WKsLNCKZ8f7j1KIj5ZeAtdSqdaMA3XO4__Obl2olGmaufsXDkLs8728JAefZ-jl8mNHwdCUrPTHgkGTpDHIew',
    category: 'Harnesses',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Royal Velvet Collar',
    description: 'Ruby Red • Brass Hardware',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3BKxKxJpJJsTh8R1pNnaUBSO1X-oswNWwH1RH8oAESbASYtkWU3CFbkr02Ie6949iVQqPv1brvAhLwPgokfmrYaycvj0dHo9BqXHR7_tZEhfdT5xgbJh09pTqqyXpHzpZ8g0bGAqGSqJvKx34qauG0hLWHmPIXHcS6dUyc2cQkFjcVvdUGWmAhybAuR5QDVPQyItsxaxwVaLUQxCEvjSvFBIoU1jU3QXxAORI1KRgIMrduiZMClzE9bVc9XWIfo-DR9nsV8c1SQ',
    category: 'Collars'
  },
  {
    id: '3',
    name: 'Cloud Nine Bed',
    description: 'Bouclé Cream • Orthopedic',
    price: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_LGPrT3VD88gvNnPFHOisdqlKcG-MyhY8WJ9S8Tu4H0KK2B5Z8BGujm-FhTGgeGte1_jX0AjfTcHyWK2bFExfWPidjN0yRyz4pLZM50619ZAvusNAkzrK5T5tgYxQCkrX6lh_jV1NiYEZqmUMvK9_qfjEhhk9i6r0MsSHWLtYW2wndLEmIkBOZxtyMb8GXzcpaUzmvRvur0D431QBekBK6g0M6bb5oiHRNFjMSwgIWgkX-px9ZN3AtoRY5QW1k_FBI-E0S_xtw',
    category: 'Beds',
    tag: 'New Arrival'
  }
];

export const CATEGORIES = [
  { name: 'Harnesses', icon: 'ShieldCheck' },
  { name: 'Collars', icon: 'Zap' },
  { name: 'Beds', icon: 'Bed' },
  { name: 'Bowls', icon: 'Utensils' },
  { name: 'Toys', icon: 'Gamepad2' },
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
    tag: 'New'
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
    tag: 'New'
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
    tag: 'New'
  }
];
