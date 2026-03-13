export const products = [
  {
    id: '1',
    name: 'Remera oversize negra',
    slug: 'remera-oversize-negra',
    category: 'Hombre',
    price: 9999,
    image: '/assets/images/RemeraOversizeNegra.jpg',
    description: 'Remera de algodón premium con corte oversize, pensada para acompañarte todos los días. Tejido suave, respirable y de alta durabilidad. Actitud urbana en cada uso.',
  },
  {
    id: '2',
    name: 'Remera oversize blanca',
    slug: 'remera-oversize-blanca',
    category: 'Mujer',
    price: 9999,
    image: '/assets/images/promo3.jpg',
    description: 'Remera de algodón premium con corte oversize. Ideal para combinar con todo y lucir canchera sin esfuerzo.',
  },
  {
    id: '3',
    name: 'Buzo oversize MeM',
    slug: 'buzo-oversize',
    category: 'Hombre',
    price: 12999,
    image: '/assets/images/grid3.jpg',
    description: 'Buzo oversize cómodo para el día a día. Frisa de primera, corte urbano y detalles que marcan la diferencia.',
  },
  {
    id: '4',
    name: 'Pantalón cargo urbano',
    slug: 'pantalon-cargo',
    category: 'Hombre',
    price: 14999,
    image: '/assets/images/Grid4.jpg',
    description: 'Pantalón cargo urbano con múltiples bolsillos. Tela resistente y corte que suma a cualquier look.',
  },
  {
    id: '5',
    name: 'Camisa flannel',
    slug: 'camisa-flannel',
    category: 'Hombre',
    price: 15999,
    image: '/assets/images/promo1.webp',
    description: 'Camisa flannel abrigada y con estilo. Perfecta para capas o sola, de día o de noche.',
  },
  {
    id: '6',
    name: 'Zapatillas urbanas',
    slug: 'zapatillas-urbanas',
    category: 'Calzado',
    price: 22999,
    image: '/assets/images/zapatillasurbanas.jpg',
    description: 'Zapatillas urbanas para moverte con comodidad. Diseño limpio que va con todo.',
  },
  {
    id: '7',
    name: 'Remera básica street',
    slug: 'remera-muestra',
    category: 'Mujer',
    price: 8999,
    image: '/assets/images/promo3.jpg',
    description: 'Remera esencial de algodón, corte regular. La base de tu guardarropa urbano.',
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
