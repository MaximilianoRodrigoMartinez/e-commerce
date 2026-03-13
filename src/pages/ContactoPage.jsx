import Card from '../components/Card'
import Button from '../components/Button'

export default function ContactoPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-secondary">Contacto</h1>
        <p className="text-muted mt-2">Envíanos tu consulta por medio de nuestro formulario. Te responderemos a la brevedad.</p>
      </div>
      <form action="#" className="card flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="destinatario" className="font-medium text-sm text-secondary">Destinatario</label>
        <select name="destinatario" id="destinatario" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="ventas">Ventas</option>
          <option value="soporte">Soporte</option>
          <option value="administracion">Administración</option>
        </select>
        <label htmlFor="nombre" className="font-medium text-sm text-secondary">Nombre</label>
        <input type="text" name="nombre" id="nombre" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="email" className="font-medium text-sm text-secondary">Email</label>
        <input type="email" name="email" id="email" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="telefono" className="font-medium text-sm text-secondary">Teléfono</label>
        <input type="tel" name="telefono" id="telefono" className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="asunto" className="font-medium text-sm text-secondary">Asunto</label>
        <input type="text" name="asunto" id="asunto" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="mensaje" className="font-medium text-sm text-secondary">Mensaje</label>
        <textarea name="mensaje" id="mensaje" rows={6} required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y" />
        <button type="submit" className="btn-primary w-full mt-2">Enviar</button>
      </form>
    </div>
  )
}
