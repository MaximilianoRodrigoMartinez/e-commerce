import { Link } from 'react-router-dom'
import Button from './Button'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, showAddToCart = true, compact = false }) {
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
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

  if (compact) {
    return (
      <div className="card min-w-[200px] text-center shrink-0 overflow-hidden p-0 hover:shadow-soft transition">
        <img src={product.image} alt={product.name} className="w-full h-44 object-cover rounded-t-xl" />
        <div className="p-3">
          <h3 className="font-semibold text-sm text-secondary">{product.name}</h3>
          <p className="font-bold text-primary text-sm">${product.price.toLocaleString('es-AR')}</p>
          <Button className="w-full mt-2 text-sm" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
      </div>
    )
  }

  return (
    <article className="card overflow-hidden p-0 group hover:shadow-soft transition">
      <Link to={`/productos/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-secondary">{product.name}</h3>
        <p className="text-sm text-muted mt-0.5">{product.category}</p>
        <p className="text-primary font-bold mt-2">${product.price.toLocaleString('es-AR')}</p>
        <div className="flex gap-2 mt-3">
          <Button className="flex-1 text-sm" onClick={handleAdd}>Agregar al carrito</Button>
          <Link to={`/productos/${product.id}`} className="btn-outline text-sm px-3 py-2">Ver</Link>
        </div>
      </div>
    </article>
  )
}
