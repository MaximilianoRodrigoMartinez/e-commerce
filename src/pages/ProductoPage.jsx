import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import { fetchProducts } from '../api/productsApi'

export default function ProductoPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const localProduct = getProductById(id)
  const [apiProduct, setApiProduct] = useState(null)
  const [loading, setLoading] = useState(!localProduct)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (localProduct) return
    let active = true
    setLoading(true)
    setError(null)
    fetchProducts()
      .then((products) => {
        if (!active) return
        const found = products.find((p) => p.id === id)
        setApiProduct(found || null)
      })
      .catch((err) => {
        if (!active) return
        setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [id, localProduct])

  const product = localProduct || apiProduct

  if (loading) {
    return (
      <div className="max-w-page mx-auto px-4 py-10 md:py-12 text-center">
        <p className="text-muted">Cargando producto...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-page mx-auto px-4 py-10 md:py-12 text-center">
        <p className="text-muted">{error}</p>
        <Link to="/productos" className="btn-primary mt-4 inline-block">Ver productos</Link>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-page mx-auto px-4 py-10 md:py-12 text-center">
        <p className="text-muted">Producto no encontrado.</p>
        <Link to="/productos" className="btn-primary mt-4 inline-block">Ver productos</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      talle: 'M',
      color: 'Único',
      qty: 1,
    })
  }

  return (
    <div className="max-w-page mx-auto px-4 py-10 md:py-12">
      <nav className="text-sm text-muted mb-6" aria-label="Breadcrumb">
        <Link to="/productos" className="hover:text-primary transition-colors">Productos</Link>
        <span className="mx-2">›</span>
        <span className="text-secondary">{product.name}</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div className="overflow-hidden rounded-2xl shadow-subtle bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover aspect-square sm:aspect-[4/5]"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-5">${product.price.toLocaleString('es-AR')}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-sm text-secondary bg-primary/5 rounded-full px-3 py-1">Envíos a todo el país</span>
            <span className="text-sm text-secondary bg-primary/5 rounded-full px-3 py-1">3 cuotas sin interés</span>
            <span className="text-sm text-secondary bg-primary/5 rounded-full px-3 py-1">Cambios sin costo</span>
          </div>
          <p className="text-secondary leading-relaxed mb-6">{product.description}</p>
          <div className="flex flex-wrap gap-3 mb-5">
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
            <Link to="/carrito"><Button variant="outline">Comprar ahora</Button></Link>
          </div>
          <p className="text-sm text-muted rounded-full bg-primary/5 px-4 py-2 inline-block w-fit">
            Si no te queda, lo cambiamos · Despacho en 24/48hs hábiles.
          </p>
        </div>
      </div>
    </div>
  )
}
