import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import ProductCard from '../components/ProductCard'
import { featuredCategories, products } from '../data/products'

const FEATURED_IDS = ['3', '4', '5', '6']
const HERO_IMAGES = [
  { src: '/assets/images/carousel1.jpg', alt: 'Nueva colección MeM', position: 'object-center' },
  { src: '/assets/images/carousel3.webp', alt: 'Moda urbana MeM', position: 'object-top' },
  { src: '/assets/images/carousel4.jpg', alt: 'Estilo MeM', position: 'object-center' },
]
const CAROUSEL_INTERVAL_MS = 5000

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const featured = products.filter((p) => FEATURED_IDS.includes(p.id))

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
      <section className="px-0 pb-0 overflow-x-hidden">
        {/* Carousel arriba, ancho completo y grande */}
        <div
          className="
            relative w-full
            min-h-[380px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[740px]
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
          <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center">
            <Link to="/productos">
              <Button className="bg-white text-secondary hover:bg-gray-100 border-0 shadow-lg">Explorá la colección</Button>
            </Link>
          </div>
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
            fill="#000000"
            transform="scale(1,-1) translate(0,-320)"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Texto principal de la home, separado del carrusel */}
      <section className="max-w-page mx-auto px-4 pt-10 md:pt-14 pb-10 md:pb-14 text-center">
        <p className="text-xs uppercase tracking-widest text-primary mb-2">Nueva colección</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight mb-4">
          Explorá la colección y encontrá tu próximo <span className="text-primary">outfit</span>
        </h1>
        <div className="w-16 h-0.5 bg-primary mx-auto mt-3 mb-4" aria-hidden="true" />
        <div className="mb-5 max-w-2xl mx-auto space-y-1">
          <p className="text-muted">Actitud urbana para todos los días.</p>
          <p className="text-muted">Envíos a todo el país, 3 cuotas sin interés y cambios sin costo.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Link to="/productos"><Button>Ver catálogo completo</Button></Link>
          <Link to="/carrito"><Button variant="ghost">Ir al carrito</Button></Link>
        </div>
        <p className="text-sm text-muted inline-block rounded-full bg-primary/5 px-4 py-2">
          Envíos gratis desde $30.000 · Si no te queda, lo cambiamos
        </p>
      </section>

      <section className="max-w-page mx-auto px-4 py-12 pb-16">
        <h2 className="text-3xl font-heading font-semibold text-secondary mb-2">Promos y looks</h2>
        <p className="text-sm text-muted mb-8">Encontrá promos y combinados para el día a día.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Link to="/productos" className="group relative block overflow-hidden rounded-2xl shadow-subtle hover:shadow-soft transition aspect-[3/2] lg:col-span-2">
            <img src="/assets/images/nuevosingresos.jpg" alt="Nuevos ingresos" className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95" />
            <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-black/70 to-transparent">
              <p className="font-semibold text-white">Nuevos ingresos</p>
              <span className="text-sm text-white/90 font-medium underline group-hover:text-primary transition-colors">Ver más</span>
            </div>
          </Link>
          <Link to="/productos" className="group relative block overflow-hidden rounded-2xl shadow-subtle hover:shadow-soft transition aspect-[4/5]">
            <img src="/assets/images/Ofertas.jpg" alt="Ofertas de temporada" className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95" />
            <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-black/70 to-transparent">
              <p className="font-semibold text-white">Ofertas de temporada</p>
              <span className="text-sm text-white/90 font-medium underline group-hover:text-primary transition-colors">Ver más</span>
            </div>
          </Link>
          <Link to="/productos" className="group relative block overflow-hidden rounded-2xl shadow-subtle hover:shadow-soft transition aspect-[4/5]">
            <img src="/assets/images/Looks.jpg" alt="Looks armados" className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95" />
            <div className="absolute inset-x-0 bottom-0 p-4 pt-12 bg-gradient-to-t from-black/70 to-transparent">
              <p className="font-semibold text-white">Looks armados</p>
              <span className="text-sm text-white/90 font-medium underline group-hover:text-primary transition-colors">Ver más</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Productos destacados: carrusel full width, activa a color y resto en gris */}
      <section className="w-full bg-secondary/95 py-10">
        <div className="max-w-page mx-auto px-4 mb-6">
          <h2 className="text-xl font-heading font-semibold text-white mb-1 text-center">Productos destacados</h2>
          <p className="text-sm text-gray-300 text-center">Armá tu look con estas prendas.</p>
        </div>
        <div className="relative max-w-page mx-auto px-4 md:px-12">
          {/* Mobile: una card por slide */}
          <div className="md:hidden overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                width: `${featured.length * 100}%`,
                transform: `translateX(-${featuredIndex * (100 / featured.length)}%)`,
              }}
            >
              {featured.map((p) => (
                <div
                  key={p.id}
                  className="flex justify-center items-center shrink-0 grow-0 px-2"
                  style={{ flexBasis: `${100 / featured.length}%` }}
                >
                  <div className="w-full max-w-[280px]">
                    <ProductCard product={p} compact showAddToCart={true} />
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
                  index === featuredIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-40 grayscale pointer-events-none scale-95'
                }`}
                style={{ width: index === featuredIndex ? undefined : 'min(200px, 25vw)' }}
              >
                <ProductCard product={p} compact showAddToCart={true} />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setFeaturedIndex((i) => (i - 1 + featured.length) % featured.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition z-20"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setFeaturedIndex((i) => (i + 1) % featured.length)}
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
              onClick={() => setFeaturedIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === featuredIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a producto ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/productos" className="text-white/90 hover:text-white text-sm font-medium underline">
            Ver todos los productos
          </Link>
        </div>
      </section>

      <section className="max-w-page mx-auto px-4 pt-12 pb-12">
        <h2 className="text-2xl font-heading font-semibold text-secondary mb-2">Explorá por categoría</h2>
        <p className="text-sm text-muted mb-6">Elegí por tipo de prenda y encontrá tu estilo.</p>
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

      {/* Franja con banner */}
      <section className="relative w-full min-h-[220px] flex items-center justify-center overflow-hidden">
        <img src="/assets/images/bannerproductos.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="relative z-20 text-center px-4 py-10">
          <p className="text-white text-lg md:text-xl font-heading font-semibold mb-3">Envíos a todo el país</p>
          <Link to="/productos">
            <Button className="bg-white text-secondary hover:bg-gray-100 border-0">Ver productos</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
