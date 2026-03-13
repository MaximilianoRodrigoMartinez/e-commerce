import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import { featuredCategories } from '../data/products'

export default function HomePage() {
  return (
    <>
      <section className="max-w-page mx-auto px-4 py-8 md:py-12 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Nueva temporada</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-3">
            Moda urbana pensada para vivir en movimiento
          </h1>
          <p className="text-muted mb-5">
            Prendas cómodas, versátiles y con estilo para el día a día. Envíos a todo el país y hasta 3 cuotas sin interés.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <Link to="/productos"><Button>Ver catálogo completo</Button></Link>
            <Link to="/carrito"><Button variant="ghost">Ir al carrito</Button></Link>
          </div>
          <p className="text-sm text-muted">Envíos gratis desde $30.000 · Cambios sin costo en sucursal</p>
        </div>
        <Card className="overflow-hidden p-0">
          <img src="/assets/images/carousel1.jpg" alt="Nueva colección MeM" className="w-full h-auto rounded-xl object-cover" />
        </Card>
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
