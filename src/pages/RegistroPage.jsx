import Card from '../components/Card'
import Button from '../components/Button'

export default function RegistroPage() {
  return (
    <div className="max-w-page mx-auto px-4 py-10">
      {/* Hero */}
      <section className="text-center md:text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
          Sumate a MeM
        </h1>
        <p className="text-muted mt-3 max-w-2xl mx-auto md:mx-0">
          Creá tu cuenta para recibir ofertas exclusivas, seguir tus pedidos y guardar tu dirección
          para comprar más rápido. Sin compromiso, solo beneficios.
        </p>
      </section>

      {/* Beneficios de registrarse */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Ventajas</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Ofertas y novedades</h2>
          <p className="text-sm text-secondary">
            Enterate primero de lanzamientos, promos y descuentos exclusivos para la comunidad MeM.
          </p>
        </Card>
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Tu historial</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Seguí tus pedidos</h2>
          <p className="text-sm text-secondary">
            Cuando esté disponible, vas a poder ver el estado de tus envíos y el historial de compras.
          </p>
        </Card>
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Más rápido</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Compras más rápidas</h2>
          <p className="text-sm text-secondary">
            Guardá tu dirección y datos para no completar todo cada vez que quieras comprar.
          </p>
        </Card>
      </section>

      {/* Formulario */}
      <section className="max-w-2xl mx-auto">
        <Card className="bg-white">
          <h2 className="text-xl font-heading font-semibold text-secondary mb-2">
            Creá tu cuenta
          </h2>
          <p className="text-sm text-muted mb-4">
            Completá tus datos para comprar más rápido y recibir ofertas.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="font-medium text-sm text-secondary">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="font-medium text-sm text-secondary">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  id="apellido"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="font-medium text-sm text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="number" className="font-medium text-sm text-secondary">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="font-medium text-sm text-secondary">
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="repeat-password" className="font-medium text-sm text-secondary">
                  Repetir contraseña
                </label>
                <input
                  type="password"
                  name="repeat-password"
                  id="repeat-password"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="direccion" className="font-medium text-sm text-secondary">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="provincia" className="font-medium text-sm text-secondary">
                  Provincia
                </label>
                <input
                  type="text"
                  name="provincia"
                  id="provincia"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="ciudad" className="font-medium text-sm text-secondary">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-2">
              Crear mi cuenta
            </Button>
          </form>
        </Card>
      </section>
    </div>
  )
}
