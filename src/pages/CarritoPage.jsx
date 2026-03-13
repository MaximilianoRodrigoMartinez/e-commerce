import { useState } from 'react'
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
  const [carouselIndex, setCarouselIndex] = useState(0)

  if (isEmpty) {
    return (
      <div className="max-w-page mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Tu carrito está vacío</h1>
        <p className="text-muted mb-6 max-w-md mx-auto">Sumá prendas desde el catálogo y armá tu próximo outfit.</p>
        <Link to="/productos"><Button>Explorá la colección</Button></Link>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Hero compacto - mismo estilo que Productos */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-secondary via-secondary to-primary text-white">
        <div className="absolute inset-y-0 right-0 opacity-25 pointer-events-none flex justify-end">
          <img
            src="/assets/images/logo.webp"
            alt="MeM"
            className="h-full w-auto object-contain blur-3xl scale-150"
          />
        </div>
        <div className="relative max-w-page mx-auto px-4 py-10 md:py-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white">Tu carrito</h1>
          <p className="text-gray-200 text-sm md:text-base max-w-xl mb-8">
            Revisá tus prendas, ajustá cantidades y cuando estés listo finalizá tu compra.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
              <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h13l3 5v5a2 2 0 01-2 2H6a3 3 0 01-3-3V7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Envíos a todo el país</p>
                <p className="text-xs text-gray-300">Recibí tu pedido donde estés.</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
              <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 11h10M4 15h7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">3 cuotas sin interés</p>
                <p className="text-xs text-gray-300">Pagá sin recargo.</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl px-4 py-3 flex items-start gap-3 border border-white/10">
              <div className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h4M20 20v-6h-4M4 10a8 8 0 0113.657-4.657M20 14A8 8 0 016.343 18.657" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Cambios sin costo</p>
                <p className="text-xs text-gray-300">Si no va, lo cambiás.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black">
          <svg className="w-full h-8 md:h-12" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#000000" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,133.3C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </div>
      </section>

      <div className="max-w-page mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mb-12">
          <Card className="divide-y divide-gray-100 p-0 border-gray-200 bg-white rounded-xl">
            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[110px_minmax(0,1fr)] gap-4 py-4 px-4 items-center"
              >
                <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="font-heading font-semibold text-secondary">{item.name}</h3>
                  <p className="text-sm text-muted">Talle: {item.talle} | Color: {item.color}</p>
                  <p className="font-bold text-primary mt-1">${(item.price || 0).toLocaleString('es-AR')}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 font-bold hover:bg-gray-100 transition"
                      onClick={() => updateQty(index, -1)}
                    >
                      -
                    </button>
                    <span className="text-secondary text-sm">{item.qty || 1}</span>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 font-bold hover:bg-gray-100 transition"
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

          <Card className="h-fit lg:sticky lg:top-24 border-gray-200 bg-white rounded-xl">
            <h3 className="font-heading font-semibold text-secondary pb-3 border-b border-gray-100 mb-4">Resumen del pedido</h3>
            <div className="flex justify-between text-sm text-secondary mb-2"><span>Subtotal:</span><span>${subtotal.toLocaleString('es-AR')}</span></div>
            <div className="flex justify-between text-sm text-secondary mb-2"><span>Envío:</span><span>Gratis</span></div>
            <div className="flex justify-between font-bold text-lg pt-4 mt-4 border-t-2 border-primary text-secondary"><span>Total:</span><span>${total.toLocaleString('es-AR')}</span></div>
            <Button type="button" className="w-full mt-4" onClick={() => {}}>
              Finalizar compra
            </Button>
          </Card>
        </div>
      </div>

      {/* Productos destacados: carrusel con activa destacada y resto en gris */}
      <section className="w-full bg-secondary/95 py-10">
        <div className="max-w-page mx-auto px-4 mb-6">
          <h2 className="text-xl font-heading font-semibold text-white mb-1 text-center">Productos destacados</h2>
          <p className="text-sm text-gray-300 text-center">Sumá más a tu look con estas prendas.</p>
        </div>
        <div className="relative max-w-page mx-auto px-4 md:px-12">
          {/* Mobile: una card por slide */}
          <div className="md:hidden overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                width: `${featured.length * 100}%`,
                transform: `translateX(-${carouselIndex * (100 / featured.length)}%)`,
              }}
            >
              {featured.map((p) => (
                <div
                  key={p.id}
                  className="flex justify-center items-center shrink-0 grow-0 px-2"
                  style={{ flexBasis: `${100 / featured.length}%` }}
                >
                  <div className="w-full max-w-[280px]">
                    <ProductCard product={p} compact showAddToCart={false} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: activa a color y resto en gris */}
          <div className="hidden md:flex items-center justify-center gap-4 overflow-hidden">
            {featured.map((p, index) => (
              <div
                key={p.id}
                className={`shrink-0 transition-all duration-300 ${
                  index === carouselIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-40 grayscale pointer-events-none scale-95'
                }`}
                style={{ width: index === carouselIndex ? undefined : 'min(200px, 25vw)' }}
              >
                <ProductCard product={p} compact showAddToCart={false} />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setCarouselIndex((i) => (i - 1 + featured.length) % featured.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition z-20"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setCarouselIndex((i) => (i + 1) % featured.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition z-20"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {featured.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCarouselIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === carouselIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a producto ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
