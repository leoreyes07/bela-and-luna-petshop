export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  pricesBySize?: Record<string, number>;
  image: string;
  category: string;
  tag?: string;
}

export interface CartItemType {
  product: Product;
  size: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 'th1',
    name: 'Arnés Táctico Negro',
    description: 'Unidad de Seguridad • K-9 de Servicio',
    price: 750,
    pricesBySize: { M: 750, L: 850, XL: 950 },
    image: new URL('./assets/products/harnesses/harness-black.webp', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Vendido'
  },
  {
    id: 'col2',
    name: 'Collar Azteca Naranja',
    description: 'Patrón Azteca • Naranja y Verde Agua',
    price: 1391,
    image: new URL('./assets/products/collars/collar-aztec-orange.webp', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'bed6',
    name: 'Nube Real Púrpura',
    description: 'Tacto de Terciopelo Suave • Acolchado Extra',
    price: 2379,
    image: new URL('./assets/products/beds/bed-purple.webp', import.meta.url).href,
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
    name: 'Arnés Táctico Negro',
    description: 'Unidad de Seguridad • K-9 de Servicio',
    price: 750,
    pricesBySize: { M: 750, L: 850, XL: 950 },
    image: new URL('./assets/products/harnesses/harness-black.webp', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Vendido'
  },
  {
    id: 'th2',
    name: 'Arnés Caqui del Desierto',
    description: 'K-9 de Servicio • Equipo Táctico',
    price: 750,
    pricesBySize: { M: 750, L: 850, XL: 950 },
    image: new URL('./assets/products/harnesses/harness-khaki.webp', import.meta.url).href,
    category: 'Harnesses'
  },
  {
    id: 'th3',
    name: 'Arnés Camuflaje Digital Púrpura',
    description: 'K-9 de Servicio • En Entrenamiento',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },
    image: new URL('./assets/products/harnesses/harness-purple.webp', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Más Popular'
  },
  {
    id: 'th4',
    name: 'Arnés Camuflaje Digital Naval',
    description: 'Perro de Servicio • Unidad K9',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },
    image: new URL('./assets/products/harnesses/harness-blue-black.webp', import.meta.url).href,
    category: 'Harnesses'
  },
  {
    id: 'th5',
    name: 'Arnés Táctico Gris',
    description: 'K-9 Policial • Cintas Reflectantes',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },
    image: new URL('./assets/products/harnesses/harness-grey.webp', import.meta.url).href,
    category: 'Harnesses',
    tag: 'Premium'
  },
  {
    id: 'th6',
    name: 'Arnés Táctico Rosa',
    description: 'Perro de Servicio • Brillante y Audaz',
    price: 790,
    pricesBySize: { S: 790, M: 820, L: 860, XL: 900 },
    image: new URL('./assets/products/harnesses/harness-pink.webp', import.meta.url).href,
    category: 'Harnesses'
  }
];

export const COLLARS: Product[] = [
  {
    id: 'col1',
    name: 'Collar Geométrico Verde Agua',
    description: 'Estampado Geométrico • Verde Agua y Naranja',
    price: 1281,
    image: new URL('./assets/products/collars/collar-geometric.webp', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Vendido'
  },
  {
    id: 'col2',
    name: 'Collar Azteca Naranja',
    description: 'Patrón Azteca • Naranja y Verde Agua',
    price: 1391,
    image: new URL('./assets/products/collars/collar-aztec-orange.webp', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'col3',
    name: 'Collar Chevron Púrpura',
    description: 'Patrón Chevron • Estilo Moderno',
    price: 1281,
    image: new URL('./assets/products/collars/collar-purple-chevron.webp', import.meta.url).href,
    category: 'Collars'
  },
  {
    id: 'col4',
    name: 'Collar Tribal Azul',
    description: 'Patrón Tribal • Diseño Étnico',
    price: 1354,
    image: new URL('./assets/products/collars/collar-blue-aztec.webp', import.meta.url).href,
    category: 'Collars'
  },
  {
    id: 'col5',
    name: 'Collar Boho Verde y Amarillo',
    description: 'Estilo Boho • Colores Vibrantes',
    price: 1318,
    image: new URL('./assets/products/collars/collar-green-yellow.webp', import.meta.url).href,
    category: 'Collars',
    tag: 'Más Popular'
  },
  {
    id: 'col6',
    name: 'Collar Azteca Púrpura',
    description: 'Patrón Azteca • Púrpura Vibrante',
    price: 1391,
    image: new URL('./assets/products/collars/collar-purple-aztec.webp', import.meta.url).href,
    category: 'Collars',
    tag: 'Nueva Edición'
  }
];

export const TOYS: Product[] = [
  {
    id: 'toy1',
    name: 'Girasol Rompecabezas',
    description: 'Juguete Interactivo • Enriquecimiento Nivel 1',
    price: 1025,
    image: new URL('./assets/products/toys/toy-puzzle-green.webp', import.meta.url).href,
    category: 'Toys',
    tag: 'Más Vendido'
  },
  {
    id: 'toy2',
    name: 'Rompecabezas Galaxia Azul',
    description: 'Comedero Lento • Diseño Anti-Ansiedad',
    price: 1171,
    image: new URL('./assets/products/toys/toy-puzzle-blue.webp', import.meta.url).href,
    category: 'Toys',
    tag: 'Más Popular'
  },
  {
    id: 'toy3',
    name: 'Laberinto Flor Roja',
    description: 'Desafío Nivel 2 • Juguete de Enriquecimiento',
    price: 1281,
    image: new URL('./assets/products/toys/toy-puzzle-red.webp', import.meta.url).href,
    category: 'Toys'
  }
];

export const BEDS: Product[] = [
  {
    id: 'bed1',
    name: 'Cama Paraíso Lima',
    description: 'Cojín Lavable • Felpa Ultrasuave',
    price: 1793,
    image: new URL('./assets/products/beds/bed-lime.webp', import.meta.url).href,
    category: 'Beds',
    tag: 'Tendencia'
  },
  {
    id: 'bed2',
    name: 'Cama Confort Carmesí',
    description: 'Espuma Ortopédica • Funda Duradera',
    price: 2013,
    image: new URL('./assets/products/beds/bed-red.webp', import.meta.url).href,
    category: 'Beds',
    tag: 'Más Vendido'
  },
  {
    id: 'bed3',
    name: 'Cama Sueño Chicle',
    description: 'Tela Transpirable • Funda Desmontable',
    price: 1903,
    image: new URL('./assets/products/beds/bed-pink.webp', import.meta.url).href,
    category: 'Beds'
  },
  {
    id: 'bed4',
    name: 'Santuario Mar Profundo',
    description: 'Polar Premium • Base Antideslizante',
    price: 2123,
    image: new URL('./assets/products/beds/bed-blue.webp', import.meta.url).href,
    category: 'Beds',
    tag: 'Premium'
  },
  {
    id: 'bed5',
    name: 'Cama Azul Cielo Matutino',
    description: 'Fibra de Gel Refrescante • Confort de Verano',
    price: 1976,
    image: new URL('./assets/products/beds/bed-lightblue.webp', import.meta.url).href,
    category: 'Beds'
  },
  {
    id: 'bed6',
    name: 'Nube Real Púrpura',
    description: 'Tacto de Terciopelo Suave • Acolchado Extra',
    price: 2379,
    image: new URL('./assets/products/beds/bed-purple.webp', import.meta.url).href,
    category: 'Beds',
    tag: 'Nueva Edición'
  }
];

export const BOWLS: Product[] = [
  {
    id: 'bowl1',
    name: 'Cerámica Serein - Salvia',
    description: 'Acabado mate esmaltado a mano • Cerámica hipoalergénica',
    price: 1537,
    image: new URL('./assets/products/bowls/bowl-green.webp', import.meta.url).href,
    category: 'Bowls',
    tag: 'Tendencia'
  },
  {
    id: 'bowl2',
    name: 'Cerámica Serein - Crema',
    description: 'Gres minimalista • Apto para lavavajillas',
    price: 1537,
    image: new URL('./assets/products/bowls/bowl-beige.webp', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl3',
    name: 'Cerámica Serein - Rosa',
    description: 'Arcilla pesada premium • Diseño antiderrames',
    price: 1537,
    image: new URL('./assets/products/bowls/bowl-pink.webp', import.meta.url).href,
    category: 'Bowls',
    tag: 'Más Vendido'
  },
  {
    id: 'bowl4',
    name: 'Cerámica Serein - Cielo',
    description: 'Esmalte azul etéreo • Resistente a los arañazos',
    price: 1537,
    image: new URL('./assets/products/bowls/bowl-blue.webp', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl5',
    name: 'Acero Inoxidable Atlas - Cobalto',
    description: 'Acero aislado de doble pared • Acabado espejo',
    price: 1281,
    image: new URL('./assets/products/bowls/bowl-metal-blue.webp', import.meta.url).href,
    category: 'Bowls',
    tag: 'Duradero'
  },
  {
    id: 'bowl6',
    name: 'Acero Inoxidable Atlas - Rubí',
    description: 'Base de goma antideslizante • Laca de alto brillo',
    price: 1281,
    image: new URL('./assets/products/bowls/bowl-metal-red.webp', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl7',
    name: 'Acero Inoxidable Atlas - Atardecer',
    description: 'Pintura en polvo sin BPA • Listo para la aventura',
    price: 1281,
    image: new URL('./assets/products/bowls/bowl-metal-orange.webp', import.meta.url).href,
    category: 'Bowls'
  },
  {
    id: 'bowl8',
    name: 'Acero Inoxidable Atlas - Rosa Pálido',
    description: 'Ligero y resistente • Fácil de limpiar',
    price: 1281,
    image: new URL('./assets/products/bowls/bowl-metal-pink.webp', import.meta.url).href,
    category: 'Bowls',
    tag: 'Más Popular'
  }
];

export const OTHERS: Product[] = [
  {
    id: 'other1',
    name: 'Kit Feliz Cumpleaños Rosa',
    description: '¡Incluye bandana, gorrito y cartel!',
    price: 915,
    image: new URL('./assets/products/others/hb_kit_pink.webp', import.meta.url).href,
    category: 'Others',
    tag: 'Tendencia'
  },
  {
    id: 'other2',
    name: 'Kit Feliz Cumpleaños Azul',
    description: '¡Incluye bandana, gorrito y cartel!',
    price: 915,
    image: new URL('./assets/products/others/hb_kit_blue.webp', import.meta.url).href,
    category: 'Others'
  }
];
