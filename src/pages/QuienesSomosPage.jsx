import Card from '../components/Card'

export default function QuienesSomosPage() {
  return (
    <div className="max-w-page mx-auto px-4 py-10">
      <section
        className="text-center py-12 rounded-xl mb-12 bg-secondary text-white bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url('/assets/images/logo.webp')",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-heading font-bold">MeM</h1>
        <p className="text-gray-300 mt-2 text-base md:text-lg">Actitud urbana para todos los días</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <h2 className="text-xl font-heading font-semibold text-primary mb-4">La empresa</h2>
          <p className="text-secondary">
            Somos una marca de streetwear pensada para el día a día, con prendas cómodas y cancheras que combinan estilo y funcionalidad.
          </p>
        </Card>
        <Card>
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
    </div>
  )
}
