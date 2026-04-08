import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'

export default function LegalesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location])

  return (
    <div className="max-w-page mx-auto px-4 py-10">
      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary">Información legal</h1>
        <p className="text-muted mt-3 max-w-2xl">
          Textos modelo para uso del sitio y tratamiento de datos personales conforme a la normativa aplicable en la
          República Argentina. No constituyen asesoramiento legal; podés consultar a un profesional para tu caso
          particular.
        </p>
      </header>

      <section id="terminos" className="scroll-mt-24 mb-12">
        <Card className="border-gray-200 bg-white">
          <h2 className="text-2xl font-heading font-semibold text-secondary mb-4">Términos y condiciones de uso</h2>
          <div className="space-y-4 text-secondary text-sm leading-relaxed">
            <p>
              El acceso y uso del sitio web de MeM Streetwear (en adelante, el &quot;Sitio&quot;) implica la aceptación de
              estos términos. Si no estás de acuerdo, te pedimos que no utilices el Sitio.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Uso del Sitio</h3>
            <p>
              El Sitio tiene fines informativos y de comercialización de productos. Te comprometés a utilizarlo de
              manera lícita, sin vulnerar derechos de terceros ni la seguridad de los sistemas. Nos reservamos el
              derecho de suspender o restringir el acceso ante usos indebidos.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Productos, precios y disponibilidad</h3>
            <p>
              Las descripciones, imágenes y precios publicados buscan ser precisos; no obstante, pueden existir errores
              u omisiones. En caso de discrepancia, nos pondremos en contacto para confirmar o cancelar el pedido. La
              disponibilidad de stock está sujeta a cambios sin previo aviso.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Compras, envíos y cambios</h3>
            <p>
              Las condiciones particulares de compra (medios de pago, plazos de entrega, costos de envío, política de
              cambios y devoluciones) se informan en el proceso de compra y en los canales de atención. Cualquier
              reclamo podés canalizarlo a través de{' '}
              <a href="mailto:hola@memstreetwear.com" className="text-primary font-medium hover:underline">
                hola@memstreetwear.com
              </a>{' '}
              o los medios indicados en la sección de contacto.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Propiedad intelectual</h3>
            <p>
              Los contenidos del Sitio (marcas, logotipos, textos, imágenes) están protegidos por la normativa vigente.
              Su reproducción no autorizada queda prohibida salvo autorización expresa.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Limitación de responsabilidad</h3>
            <p>
              En la medida en que lo permita la ley aplicable (incluida la Ley de Defensa del Consumidor N.º 24.240 y
              normas complementarias), el Sitio se ofrece &quot;tal cual&quot;; no garantizamos un funcionamiento
              ininterrumpido ni libre de errores. No seremos responsables por daños indirectos o lucro cesante derivados
              del uso del Sitio, salvo disposición legal en contrario.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Modificaciones</h3>
            <p>
              Podemos actualizar estos términos publicando la versión revisada en esta página. La fecha de la última
              actualización puede indicarse al final del documento.
            </p>
          </div>
        </Card>
      </section>

      <section id="privacidad" className="scroll-mt-24">
        <Card className="border-gray-200 bg-white">
          <h2 className="text-2xl font-heading font-semibold text-secondary mb-4">Política de privacidad</h2>
          <div className="space-y-4 text-secondary text-sm leading-relaxed">
            <p>
              En cumplimiento de la Ley N.º 25.326 de Protección de Datos Personales y su normativa complementaria, MeM
              Streetwear informa sobre el tratamiento de los datos personales que podamos recabar a través del Sitio, el
              formulario de contacto, el correo electrónico o, en su caso, el registro de usuario.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Responsable del tratamiento</h3>
            <p>
              El responsable del archivo de datos es el titular del sitio MeM Streetwear. Los datos identificatorios
              completos (razón social, CUIT, domicilio) pueden solicitarse en{' '}
              <a href="mailto:hola@memstreetwear.com" className="text-primary font-medium hover:underline">
                hola@memstreetwear.com
              </a>
              .
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Datos que podemos tratar</h3>
            <p>
              Por ejemplo: nombre y apellido, correo electrónico, teléfono, dirección de envío, historial de consultas
              enviadas por formulario, y datos necesarios para gestionar pedidos o responder reclamos.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Finalidad</h3>
            <p>
              Utilizamos los datos para responder consultas, procesar y entregar pedidos, gestionar cambios o reclamos,
              enviar comunicaciones relacionadas con tu relación con nosotros y, cuando corresponda, cumplir obligaciones
              legales.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Confidencialidad y seguridad</h3>
            <p>
              Adoptamos medidas razonables para proteger la información frente a accesos no autorizados. No vendemos ni
              alquilamos tus datos personales a terceros para fines de marketing ajeno a MeM Streetwear.
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Derechos del titular</h3>
            <p>
              Podés ejercer los derechos de acceso, rectificación, actualización o supresión de tus datos, o presentar
              reclamos ante la Dirección Nacional de Protección de Datos Personales, conforme a la Ley 25.326. Para
              consultas vinculadas a tus datos, escribinos a{' '}
              <a href="mailto:hola@memstreetwear.com" className="text-primary font-medium hover:underline">
                hola@memstreetwear.com
              </a>
              .
            </p>
            <h3 className="font-heading font-semibold text-secondary pt-2">Conservación</h3>
            <p>
              Conservamos los datos el tiempo necesario para las finalidades indicadas y para cumplir obligaciones
              legales o contractuales.
            </p>
            <p className="text-muted text-xs pt-2">Última actualización: abril de 2026.</p>
          </div>
        </Card>
      </section>
    </div>
  )
}
