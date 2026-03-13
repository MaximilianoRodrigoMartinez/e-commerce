import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

export default function QuienesSomosPage() {
  return (
    <div className="max-w-page mx-auto px-4 py-10">
      {/* Banner con logo como imagen, nítido y proporcionado */}
      <section className="text-center py-10 md:py-12 rounded-xl mb-10 bg-black text-white min-h-[200px] flex flex-col items-center justify-center">
        <img
          src="/assets/images/logo.webp"
          alt="MeM"
          className="h-32 md:h-44 w-auto object-contain mx-auto"
        />
        <h1 className="text-3xl md:text-4xl font-heading font-bold mt-4 text-primary">MeM</h1>
        <p className="text-gray-300 mt-2 text-base md:text-lg">Actitud urbana para todos los días</p>
        <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto px-4">
          Streetwear pensado para vivir en movimiento. Calidad, estilo y compromiso con quienes nos eligen.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card className="border-gray-200 bg-white">
          <h2 className="text-xl font-heading font-semibold text-primary mb-4">La empresa</h2>
          <p className="text-secondary">
            Somos una marca de streetwear pensada para el día a día, con prendas cómodas y cancheras que combinan estilo y funcionalidad.
          </p>
        </Card>
        <Card className="border-gray-200 bg-white">
          <h2 className="text-xl font-heading font-semibold text-primary mb-4">Historia y valores</h2>
          <p className="text-secondary mb-4">Fundada en 2010, comenzamos como un pequeño emprendimiento y hoy somos referentes en el mercado. Nuestros valores son:</p>
          <ul className="space-y-2 text-secondary">
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Calidad en cada producto</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Pasión por el deporte</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Innovación constante</li>
            <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Compromiso con nuestros clientes</li>
          </ul>
        </Card>
      </section>

      {/* Pilares: mismo estilo que Contacto/Registro */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Qué nos define</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Calidad</h2>
          <p className="text-sm text-secondary">
            Cada prenda pensada para durar y verse bien en el día a día.
          </p>
        </Card>
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Qué nos define</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Estilo urbano</h2>
          <p className="text-sm text-secondary">
            Diseños que van con tu onda, sin sacrificar comodidad.
          </p>
        </Card>
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Qué nos define</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Compromiso</h2>
          <p className="text-sm text-secondary">
            Envíos a todo el país, cambios sin costo y atención al cliente.
          </p>
        </Card>
      </section>

      {/* CTA final */}
      <section className="text-center bg-gray-50 rounded-xl py-8 px-4">
        <h2 className="text-xl font-heading font-semibold text-secondary mb-3">Conocé la colección</h2>
        <p className="text-sm text-muted mb-4 max-w-md mx-auto">
          Explorá la tienda y encontrá tu próximo outfit con actitud urbana.
        </p>
        <Link to="/productos">
          <Button>Explorá la colección</Button>
        </Link>
      </section>
    </div>
  )
}
