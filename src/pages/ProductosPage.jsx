import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/productsApi'

const SORT_OPTIONS = [
  { value: 'none', label: 'Por defecto' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
]

export default function ProductosPage() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState(200)
  const [sortOrder, setSortOrder] = useState('none')

  // Sincronizar búsqueda con query ?q= del header
  useEffect(() => {
    const q = searchParams.get('q')
    if (q != null) setSearchTerm(q)
  }, [searchParams])

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)

    fetchProducts()
      .then((data) => {
        if (!active) return
        setProducts(data)
      })
      .catch((err) => {
        console.error(err)
        if (!active) return
        setError('No pudimos cargar los productos. Probá de nuevo en unos segundos.')
      })
      .finally(() => {
        if (!active) return
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return Array.from(set)
  }, [products])

  const uiCategories = useMemo(() => {
    const base = new Set(categories)
    const ordered = ['Hombre', 'Mujer', 'Niños', 'Calzado']
    return ordered.filter((cat) => {
      if (cat === 'Niños') {
        return base.has('Hombre') || base.has('Mujer')
      }
      return base.has(cat)
    })
  }, [categories])

  const filtered = useMemo(() => {
    let result = [...products]

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
      )
    }

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'Niños') {
        result = result.filter((p) => p.category === 'Hombre' || p.category === 'Mujer')
      } else {
        result = result.filter((p) => p.category === selectedCategory)
      }
    }

    result = result.filter((p) => p.price <= maxPrice)

    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [products, searchTerm, selectedCategory, maxPrice, sortOrder])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full">
      {/* Hero de productos - logo grande con blur e imagen aspiracional */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-secondary via-secondary to-primary text-white">
        <div className="absolute inset-y-0 right-0 opacity-25 pointer-events-none flex justify-end">
          <img
            src="/assets/images/logo.webp"
            alt="MeM"
            className="h-full w-auto object-contain blur-3xl scale-150"
          />
        </div>
        <div className="relative max-w-page mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="flex-1 text-center md:text-left max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 mb-3">Explorá la colección</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 leading-tight text-white">
              Encontrá tu próximo outfit<br />
              con <span className="text-accent">actitud urbana</span>
            </h1>
            <p className="text-gray-200 mb-6 text-sm md:text-base">
              Prendas cómodas, versátiles y con estilo para todos los días. Explorá todos los productos de la tienda y armá tu look.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <button
                type="button"
                className="btn-primary px-6"
                onClick={() => scrollToSection('productos-list')}
              >
                Ver productos
              </button>
            </div>
            {/* Beneficios con iconos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h13l3 5v5a2 2 0 01-2 2H6a3 3 0 01-3-3V7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Envíos a todo el país</p>
                  <p className="text-xs text-gray-300">Recibí tu pedido donde estés.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7h16M4 11h10M4 15h7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">3 cuotas sin interés</p>
                  <p className="text-xs text-gray-300">Pagá sin recargo.</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v6h4M20 20v-6h-4M4 10a8 8 0 0113.657-4.657M20 14A8 8 0 016.343 18.657"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Cambios sin costo</p>
                  <p className="text-xs text-gray-300">Si no va, lo cambiás.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Imagen aspiracional */}
          <div className="flex-1 hidden md:flex justify-end">
            <div className="bg-black/40 rounded-3xl border border-white/10 shadow-soft overflow-hidden max-w-md">
              <img
                src="/assets/images/bannerproductos.jpg"
                alt="Banner productos MeM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Wave decorativa */}
        <div className="text-black">
          <svg
            className="w-full h-8 md:h-12"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#000000"
              d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,133.3C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      <div className="max-w-page mx-auto px-4 py-8">
        {/* Filtros */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-heading font-semibold text-secondary">Explorar productos</h2>
              <p className="text-sm text-muted">
                Usá la búsqueda y los filtros para encontrar exactamente lo que querés.
              </p>
            </div>
            <div className="w-full md:w-80">
              <label className="block text-xs font-semibold text-muted mb-1">Buscar</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre o categoría..."
                className="w-full px-3 py-2 rounded-full border border-gray-200 bg-white text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6">
            {/* Columna izquierda: filtros */}
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm shadow-subtle">
                <h3 className="text-sm font-semibold text-muted mb-2">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      selectedCategory === 'all'
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-secondary border-gray-200 hover:border-primary/60 hover:bg-primary/5'
                    }`}
                  >
                    Todas
                  </button>
                  {uiCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        selectedCategory === cat
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-secondary border-gray-200 hover:border-primary/60 hover:bg-primary/5'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-subtle">
                <h3 className="text-sm font-semibold text-muted mb-2">Precio máximo</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>Hasta</span>
                    <span className="font-semibold text-secondary">
                      ${maxPrice.toLocaleString('es-AR')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    step={5}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-muted">
                    <span>$0</span>
                    <span>$100</span>
                    <span>$200</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-subtle">
                <h3 className="text-sm font-semibold text-muted mb-2">Ordenar por</h3>
                <div className="relative">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full px-3 py-2 pr-9 border border-gray-200 rounded-full bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ▼
                  </span>
                </div>
              </Card>
            </div>

            {/* Columna derecha: listado de productos */}
            <section id="productos-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {loading && (
                <p className="text-muted col-span-full text-center py-8">Cargando productos...</p>
              )}
              {error && !loading && (
                <p className="text-red-600 col-span-full text-center py-8">{error}</p>
              )}
              {!loading && !error && filtered.length === 0 && (
                <p className="text-muted col-span-full text-center py-8">
                  No encontramos productos con esos filtros. Probá cambiarlos un poco.
                </p>
              )}
              {!loading && !error && filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
