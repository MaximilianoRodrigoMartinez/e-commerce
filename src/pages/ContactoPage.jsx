import Card from '../components/Card'
import Button from '../components/Button'

export default function ContactoPage() {
  return (
    <div className="max-w-page mx-auto px-4 py-10">
      {/* Hero de contacto */}
      <section className="text-center md:text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
          Hablemos de tu próximo outfit
        </h1>
        <p className="text-muted mt-3 max-w-2xl mx-auto md:mx-0">
          ¿Tenés dudas sobre talles, envíos, cambios o un pedido en curso? Completá el formulario
          o escribinos por los canales que prefieras. Siempre hay alguien del equipo MeM del otro lado.
        </p>
      </section>

      {/* Canales rápidos de contacto */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Card className="border-gray-200 bg-white">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Consulta rápida</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">WhatsApp</h2>
          <p className="text-sm text-secondary mb-3">
            Escribinos por WhatsApp para dudas rápidas sobre productos, talles o envíos.
          </p>
          <a
            href="https://wa.me/5491122376897"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            +54 9 11 2237-6897
          </a>
          <p className="text-xs text-muted mt-2">
            También podés escribirnos por Instagram en{' '}
            <a
              href="https://www.instagram.com/memstreetwear?igsh=OHJvZW9sbnVsanBh"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-primary"
            >
              @memstreetwear
            </a>
            .
          </p>
        </Card>

        <Card className="border-gray-200">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Consultas generales</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Email</h2>
          <p className="text-sm text-secondary mb-2">
            Para consultas más largas, cambios o reclamos sobre pedidos.
          </p>
          <p className="text-sm font-semibold text-primary break-all">
            hola@memstreetwear.com
          </p>
        </Card>

        <Card className="border-gray-200">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">Cambios y retiros</p>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-1">Sucursal MeM</h2>
          <p className="text-sm text-secondary mb-1">
            Podés coordinar cambios sin costo o retirar tu compra.
          </p>
          <p className="text-xs text-muted">
            Consultar direcciónes y horarios disponibles.
          </p>
        </Card>
      </section>

      {/* Formulario principal - integrado con Netlify */}
      <section className="max-w-2xl mx-auto">
        <Card className="bg-white">
          <h2 className="text-xl font-heading font-semibold text-secondary mb-2">
            Escribinos tu consulta
          </h2>
          <p className="text-sm text-muted mb-4">
            Completá los datos y contanos qué necesitás. Te vamos a responder dentro de las próximas
            24/48 hs hábiles.
          </p>

          <form
            name="contacto-mem"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="contacto-mem" />
            <p className="hidden">
              <label>
                No completar este campo:{' '}
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="font-medium text-sm text-secondary">
                  Nombre y apellido
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="telefono" className="font-medium text-sm text-secondary">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  name="telefono"
                  id="telefono"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="tipo" className="font-medium text-sm text-secondary">
                  ¿Sobre qué es tu consulta?
                </label>
                <select
                  name="tipo"
                  id="tipo"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="pedido">Compras y pedidos</option>
                  <option value="cambios">Cambios y devoluciones</option>
                  <option value="mayorista">Mayorista</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="font-medium text-sm text-secondary">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                rows={6}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-y"
              />
              <p className="text-xs text-muted mt-1">
                Si tu consulta es por un pedido, incluí el número así podemos ayudarte más rápido.
              </p>
            </div>

            <Button type="submit" className="w-full mt-2">
              Enviar mi consulta
            </Button>
          </form>
        </Card>
      </section>
    </div>
  )
}
