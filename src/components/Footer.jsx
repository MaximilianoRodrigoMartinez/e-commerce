import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white py-6 px-4 mt-12">
      <div className="max-w-page mx-auto flex flex-wrap items-center justify-end gap-6">
        <nav className="flex gap-4">
          <Link to="/productos" className="text-sm text-gray-300 hover:text-white transition">Hombre</Link>
          <Link to="/productos" className="text-sm text-gray-300 hover:text-white transition">Mujer</Link>
          <Link to="/productos" className="text-sm text-gray-300 hover:text-white transition">Niños</Link>
          <Link to="/productos" className="text-sm text-gray-300 hover:text-white transition">Calzado</Link>
          <Link to="/quienes-somos" className="text-sm text-gray-300 hover:text-white transition">Quiénes somos</Link>
        </nav>
        <div className="flex gap-4">
          <Link to="/contacto">
            <img src="/assets/images/correo-electronico.png" alt="Contacto" className="w-6 h-6 opacity-90 hover:opacity-100" />
          </Link>
          <Link to="/registro">
            <img src="/assets/images/usuario-de-perfil.png" alt="Perfil" className="w-6 h-6 opacity-90 hover:opacity-100" />
          </Link>
          <Link to="/carrito">
            <img src="/assets/images/carrito-de-compras.png" alt="Carrito" className="w-6 h-6 opacity-90 hover:opacity-100" />
          </Link>
        </div>
        <Link to="/">
          <img src="/assets/images/logo.webp" alt="Logo MeM" className="h-8 w-auto opacity-95" />
        </Link>
      </div>
    </footer>
  )
}
