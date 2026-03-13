import Card from '../components/Card'

export default function RegistroPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-secondary">Regístrate</h1>
        <p className="text-muted mt-2">Únete para disfrutar de una experiencia de compra personalizada y ofertas exclusivas.</p>
      </div>
      <form action="#" method="POST" className="card flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nombre" className="font-medium text-sm text-secondary">Nombre</label>
        <input type="text" name="nombre" id="nombre" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="apellido" className="font-medium text-sm text-secondary">Apellido</label>
        <input type="text" name="apellido" id="apellido" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="email" className="font-medium text-sm text-secondary">Email</label>
        <input type="email" name="email" id="email" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="number" className="font-medium text-sm text-secondary">Teléfono</label>
        <input type="tel" name="number" id="number" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="password" className="font-medium text-sm text-secondary">Contraseña</label>
        <input type="password" name="password" id="password" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="repeat-password" className="font-medium text-sm text-secondary">Repetir contraseña</label>
        <input type="password" name="repeat-password" id="repeat-password" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="direccion" className="font-medium text-sm text-secondary">Dirección</label>
        <input type="text" name="direccion" id="direccion" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="provincia" className="font-medium text-sm text-secondary">Provincia</label>
        <input type="text" name="provincia" id="provincia" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <label htmlFor="ciudad" className="font-medium text-sm text-secondary">Ciudad</label>
        <input type="text" name="ciudad" id="ciudad" required className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        <button type="submit" className="btn-primary w-full mt-2">Registrarse</button>
      </form>
    </div>
  )
}
