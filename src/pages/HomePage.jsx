import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { featuredCategories } from '../data/products'

const HERO_IMAGES = [
  { src: '/assets/images/carousel1.jpg', alt: 'Nueva colección MeM', position: 'object-center' },
  { src: '/assets/images/carousel3.webp', alt: 'Moda urbana MeM', position: 'object-top' },
  { src: '/assets/images/carousel4.jpg', alt: 'Estilo MeM', position: 'object-center' },
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
      {/* Hero con carrusel */}
      <section className="px-0 pb-0">
        {/* Carousel arriba, ancho completo y grande */}
        <div
          className="
            relative w-full
            min-h-[480px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[740px]
            bg-secondary/20 overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-black/35 z-10" />
          {HERO_IMAGES.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${img.position} ${
                i === heroIndex ? 'opacity-100' : 'opacity-0'
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
      </section>

      {/* Wave debajo del hero, panza hacia arriba, inicio del contenido */}
      <div className="text-black">
        <svg
          className="w-full h-8 md:h-12"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            transform="scale(1,-1) translate(0,-320)"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Texto principal de la home, separado del carrusel */}
      <section className="max-w-page mx-auto px-4 pt-8 md:pt-12 pb-8 md:pb-12 text-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-2">Nueva colección</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-3">
          Explorá la colección y encontrá tu próximo outfit
        </h1>
        <p className="text-muted mb-5 max-w-2xl mx-auto">
          Actitud urbana para todos los días. Envíos a todo el país, 3 cuotas sin interés y cambios sin costo.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Link to="/productos"><Button>Ver catálogo completo</Button></Link>
          <Link to="/carrito"><Button variant="ghost">Ir al carrito</Button></Link>
        </div>
        <p className="text-sm text-muted">Envíos gratis desde $30.000 · Si no te queda, lo cambiamos</p>
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
          <div className="w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/newera.png" alt="New Era" className="w-full h-auto transform scale-125" />
          </div>
          <div className="w-28 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <img src="/assets/images/brands/hdp.png" alt="HDP" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  )
}
