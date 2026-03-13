import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductoPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="max-w-page mx-auto px-4 py-8 text-center">
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
    <div className="max-w-page mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card className="p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover aspect-square sm:aspect-[4/5]"
          />
        </Card>
        <Card>
          <h1 className="text-2xl font-heading font-bold text-secondary mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mb-4">${product.price.toLocaleString('es-AR')}</p>
          <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
            <span>Envíos a todo el país</span>
            <span>3 cuotas sin interés</span>
            <span>Cambios sin costo</span>
          </div>
          <p className="text-secondary mb-4">{product.description}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
            <Link to="/carrito"><Button variant="outline">Comprar ahora</Button></Link>
          </div>
          <p className="text-sm text-muted">Si no te queda, lo cambiamos · Despacho en 24/48hs hábiles.</p>
        </Card>
      </div>
    </div>
  )
}
