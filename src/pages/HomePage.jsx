import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { featuredCategories } from '../data/products'

const HERO_IMAGES = [
  { src: '/assets/images/carousel1.jpg', alt: 'Nueva colección MeM' },
  { src: '/assets/images/carousel3.webp', alt: 'Moda urbana MeM' },
  { src: '/assets/images/carousel4.jpg', alt: 'Estilo MeM' },
]
const CAROUSEL_INTERVAL_MS = 5000

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, CAROUSEL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setHeroIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)
  const goNext = () => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length)

  return (
    <>
      <section className="px-0 pb-8 md:pb-12">
        {/* Carousel arriba, ancho completo y grande */}
        <div
          className="
            relative w-full
            aspect-[16/9]
            min-h-[260px] sm:min-h-[300px] md:min-h-[340px]
            bg-secondary/10 overflow-hidden
          "
        >
          {HERO_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-500 ${
                i === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setHeroIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === heroIndex ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Texto abajo, centrado */}
        <div className="max-w-page mx-auto px-4 pt-8 md:pt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Nueva temporada</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-3">
            Moda urbana pensada para vivir en movimiento
          </h1>
          <p className="text-muted mb-5 max-w-2xl mx-auto">
            Prendas cómodas, versátiles y con estilo para el día a día. Envíos a todo el país y hasta 3 cuotas sin interés.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <Link to="/productos"><Button>Ver catálogo completo</Button></Link>
            <Link to="/carrito"><Button variant="ghost">Ir al carrito</Button></Link>
          </div>
          <p className="text-sm text-muted">Envíos gratis desde $30.000 · Cambios sin costo en sucursal</p>
        </div>
      </section>

      <section className="max-w-page mx-auto px-4 pb-12">
        <h2 className="text-2xl font-heading font-semibold text-secondary mb-6">Promos y looks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/productos" className="group block overflow-hidden rounded-xl shadow-subtle hover:shadow-soft transition">
            <div className="aspect-[4/3] bg-gray-100">
              <img src="/assets/images/promo1.webp" alt="Nueva colección" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3 bg-white">
              <p className="font-medium text-secondary">Nueva colección</p>
              <span className="text-sm text-primary font-semibold">Ver más</span>
            </div>
          </Link>
          <Link to="/productos" className="group block overflow-hidden rounded-xl shadow-subtle hover:shadow-soft transition">
            <div className="aspect-[4/3] bg-gray-100">
              <img src="/assets/images/promo2.webp" alt="Ofertas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3 bg-white">
              <p className="font-medium text-secondary">Ofertas</p>
              <span className="text-sm text-primary font-semibold">Ver más</span>
            </div>
          </Link>
          <Link to="/productos" className="group block overflow-hidden rounded-xl shadow-subtle hover:shadow-soft transition sm:col-span-2 lg:col-span-1">
            <div className="aspect-[4/3] bg-gray-100">
              <img src="/assets/images/promo3.jpg" alt="Looks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3 bg-white">
              <p className="font-medium text-secondary">Looks</p>
              <span className="text-sm text-primary font-semibold">Ver más</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-page mx-auto px-4 pb-12">
        <h2 className="text-2xl font-heading font-semibold text-secondary mb-6">Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCategories.map((cat) => (
            <Card key={cat.label} className="overflow-hidden p-0 group hover:shadow-soft transition">
              <img src={cat.image} alt={cat.label} className="w-full aspect-square object-cover" />
              <div className="p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-muted">{cat.sublabel}</p>
                <p className="font-medium text-secondary mt-1">{cat.label}</p>
                <Link to={cat.link} className="btn-link mt-2 inline-block">Ver más</Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-page mx-auto px-4 pb-12 border-t border-gray-100 pt-8">
        <h3 className="text-xl font-heading font-semibold text-secondary mb-6 text-center">Nuestras marcas</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/nike.webp" alt="Nike" className="w-full h-auto" />
          </div>
          <div className="w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/adidas.png" alt="Adidas" className="w-full h-auto" />
          </div>
          <div className="w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/puma.png" alt="Puma" className="w-full h-auto" />
          </div>
          <div className="w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/hdp.png" alt="HDP" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  )
}
