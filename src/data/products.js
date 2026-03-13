export const products = [
  {
    id: '1',
    name: 'Remera oversize negra',
    slug: 'remera-oversize-negra',
    category: 'Remera',
    price: 9999,
    image: '/assets/images/remera.jpg',
    description: 'Remera de algodón premium con corte oversize, pensada para acompañarte todos los días. Tejido suave, respirable y de alta durabilidad.',
  },
  {
    id: '2',
    name: 'Remera oversize blanca',
    slug: 'remera-oversize-blanca',
    category: 'Remera',
    price: 9999,
    image: '/assets/images/remera.jpg',
    description: 'Remera de algodón premium con corte oversize. Ideal para combinar.',
  },
  {
    id: '3',
    name: 'Buzo Oversize',
    slug: 'buzo-oversize',
    category: 'Abrigo',
    price: 12999,
    image: '/assets/images/remera.jpg',
    description: 'Buzo oversize cómodo para el día a día.',
  },
  {
    id: '4',
    name: 'Pantalón Cargo',
    slug: 'pantalon-cargo',
    category: 'Pantalón',
    price: 14999,
    image: '/assets/images/remera.jpg',
    description: 'Pantalón cargo urbano con múltiples bolsillos.',
  },
  {
    id: '5',
    name: 'Camisa Flannel',
    slug: 'camisa-flannel',
    category: 'Camisa',
    price: 15999,
    image: '/assets/images/remera.jpg',
    description: 'Camisa flannel abrigada y con estilo.',
  },
  {
    id: '6',
    name: 'Zapatillas Urbanas',
    slug: 'zapatillas-urbanas',
    category: 'Calzado',
    price: 22999,
    image: '/assets/images/remera.jpg',
    description: 'Zapatillas urbanas para moverte con comodidad.',
  },
  {
    id: '7',
    name: 'Remera de muestra',
    slug: 'remera-muestra',
    category: 'Remera',
    price: 5000,
    image: '/assets/images/remera.jpg',
    description: 'Remera de muestra.',
  },
]

export const featuredCategories = [
  { label: 'Buzos y hoodies', sublabel: 'Abrigo', image: '/assets/images/grid1.jpg', link: '/productos' },
  { label: 'Ella', sublabel: 'Colección', image: '/assets/images/grid2.jpg', link: '/productos' },
  { label: 'Él', sublabel: 'Colección', image: '/assets/images/grid3.jpg', link: '/productos' },
  { label: 'Kids', sublabel: 'Colección', image: '/assets/images/Grid4.jpg', link: '/productos' },
]

export const featuredProductIds = ['1', '3', '4', '5']

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}
