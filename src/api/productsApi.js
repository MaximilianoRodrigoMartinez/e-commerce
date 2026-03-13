const API_URL = 'https://dummyjson.com/products?limit=100'

const CLOTHING_CATEGORIES = [
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-dresses',
  'womens-shoes',
  'womens-bags',
  'womens-watches',
  'womens-jewellery',
  'tops',
  'sports-accessories',
  'sunglasses',
]

const CATEGORY_MAP = {
  'mens-shirts': 'Hombre',
  'mens-watches': 'Hombre',
  'mens-shoes': 'Calzado',
  'womens-dresses': 'Mujer',
  'womens-bags': 'Mujer',
  'womens-watches': 'Mujer',
  'womens-jewellery': 'Mujer',
  'womens-shoes': 'Calzado',
  tops: 'Hombre',
  'sports-accessories': 'Hombre',
  sunglasses: 'Mujer',
}

export async function fetchProducts() {
  const res = await fetch(API_URL)
  if (!res.ok) {
    throw new Error('No se pudieron cargar los productos')
  }
  const data = await res.json()

  const items = Array.isArray(data.products) ? data.products : data

  const clothing = items.filter((item) => CLOTHING_CATEGORIES.includes(item.category))

  return clothing.map((item) => ({
    id: String(item.id),
    name: item.title,
    price: item.price,
    category: CATEGORY_MAP[item.category] || 'Otros',
    image: item.thumbnail || (Array.isArray(item.images) ? item.images[0] : '') || '',
    description: item.description,
  }))
}

