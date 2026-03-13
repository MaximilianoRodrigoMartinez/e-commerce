import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const FEATURED_IDS = ['3', '4', '5', '6']

export default function CarritoPage() {
  const { items, removeItem, updateQty, subtotal, total, isEmpty } = useCart()
  const featured = products.filter((p) => FEATURED_IDS.includes(p.id))

  if (isEmpty) {
    return (
      <div className="max-w-page mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-heading font-bold text-secondary mb-4">Tu carrito está vacío</h1>
        <p className="text-muted mb-6">Agregá productos desde el catálogo para continuar.</p>
        <Link to="/productos"><Button>Seguir comprando</Button></Link>
      </div>
    )
  }

  return (
    <div className="max-w-page mx-auto px-4 py-8">
      <h1 className="text-2xl font-heading font-bold text-secondary mb-6">Tu carrito</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mb-12">
        <Card className="divide-y divide-gray-100 p-0">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-[100px_1fr_auto] gap-4 py-4 px-4 items-center">
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded" />
              <div>
                <h3 className="font-semibold text-secondary">{item.name}</h3>
                <p className="text-sm text-muted">Talle: {item.talle} | Color: {item.color}</p>
                <p className="font-bold text-primary mt-1">${(item.price || 0).toLocaleString('es-AR')}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded border border-gray-200 bg-gray-50 font-bold hover:bg-gray-100"
                    onClick={() => updateQty(index, -1)}
                  >
                    -
                  </button>
                  <span>{item.qty || 1}</span>
                  <button
                    type="button"
                    className="w-8 h-8 rounded border border-gray-200 bg-gray-50 font-bold hover:bg-gray-100"
                    onClick={() => updateQty(index, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="text-primary text-sm underline mt-2 hover:no-underline"
                  onClick={() => removeItem(index)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </Card>

        <Card className="h-fit lg:sticky lg:top-24">
          <h3 className="font-semibold text-secondary pb-3 border-b border-gray-100 mb-4">Resumen del pedido</h3>
          <div className="flex justify-between text-sm mb-2"><span>Subtotal:</span><span>${subtotal.toLocaleString('es-AR')}</span></div>
          <div className="flex justify-between text-sm mb-2"><span>Envío:</span><span>Gratis</span></div>
          <div className="flex justify-between font-bold text-lg pt-4 mt-4 border-t-2 border-primary"><span>Total:</span><span>${total.toLocaleString('es-AR')}</span></div>
          <Button className="w-full mt-4">Finalizar compra</Button>
        </Card>
      </div>

      <section className="pt-8 border-t border-gray-100">
        <h2 className="text-xl font-heading font-semibold text-secondary mb-4 text-center">Productos destacados</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
      </section>
    </div>
  )
}
