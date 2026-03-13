import { useState } from 'react'
import Card from '../components/Card'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const PRICE_OPTIONS = [
  { value: 5000, label: 'Hasta $5.000' },
  { value: 10000, label: 'Hasta $10.000' },
  { value: 20000, label: 'Hasta $20.000' },
  { value: 50000, label: 'Hasta $50.000' },
  { value: 100000, label: 'Hasta $100.000' },
]
const CATEGORIES = ['Hombre', 'Mujer', 'Niños', 'Calzado']

export default function ProductosPage() {
  const [maxPrice, setMaxPrice] = useState(100000)
  const filtered = products.filter((p) => p.price <= maxPrice)

  return (
    <div className="max-w-page mx-auto px-4 py-8">
      <section
        className="text-center py-10 rounded-xl mb-8 bg-secondary text-white bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), url('/assets/images/logo.webp')",
        }}
      >
        <h1 className="text-3xl font-heading font-bold">MeM</h1>
        <p className="text-gray-300 mt-1">Productos</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-heading font-semibold text-muted mb-4">Filtros</h2>
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
          <Card>
            <h3 className="text-sm font-semibold text-muted mb-2">Categorías</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <a href="#" className="text-secondary hover:text-primary transition">{c}</a>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold text-muted mb-2">Precio máximo</h3>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {PRICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}
