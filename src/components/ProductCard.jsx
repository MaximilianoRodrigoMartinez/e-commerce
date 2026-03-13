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
      <div className="card min-w-[200px] text-center shrink-0 overflow-hidden p-0 hover:shadow-soft transition border-gray-200 bg-white rounded-xl">
        <Link to={`/productos/${product.id}`} className="block">
          <img src={product.image} alt={product.name} className="w-full h-44 object-cover rounded-t-xl" />
        </Link>
        <div className="p-3">
          <h3 className="font-semibold text-sm text-secondary">{product.name}</h3>
          <p className="font-bold text-primary text-sm">${product.price.toLocaleString('es-AR')}</p>
          {showAddToCart ? (
            <Button className="w-full mt-2 text-sm" onClick={handleAdd}>Agregar al carrito</Button>
          ) : (
            <Link to={`/productos/${product.id}`} className="btn-outline w-full mt-2 text-sm inline-block text-center py-2 rounded-full">Ver producto</Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <article className="card overflow-hidden p-0 group hover:shadow-soft transition flex flex-col">
      <Link to={`/productos/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-secondary line-clamp-2 leading-snug">{product.name}</h3>
        <p className="text-xs text-muted mt-1 uppercase tracking-wide">{product.category}</p>
        <p className="text-primary font-bold mt-3 text-base">${product.price.toLocaleString('es-AR')}</p>
        <div className="flex gap-2 mt-3 items-center justify-between">
          {showAddToCart && (
            <Button className="flex-1 text-sm" onClick={handleAdd}>Agregar al carrito</Button>
          )}
          <Link to={`/productos/${product.id}`} className="btn-outline text-sm px-3 py-2 whitespace-nowrap">Ver</Link>
        </div>
      </div>
    </article>
  )
}
