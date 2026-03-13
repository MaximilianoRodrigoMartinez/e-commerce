import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary text-white shadow-soft">
      <div className="flex items-center justify-between gap-4 px-4 py-3 max-w-page mx-auto">
        <div className="flex items-center shrink-0">
          <Link to="/">
            <img src="/assets/images/logo.webp" alt="Logo MeM" className="h-10 w-auto block" />
          </Link>
        </div>
        <nav className="flex-1 min-w-0 flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0 flex justify-center">
            <form action="#" className="flex items-center gap-2 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="search"
                placeholder="Buscar productos, marcas..."
                className="flex-1 min-w-0 h-9 px-3 rounded-full border border-gray-200 bg-white text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary h-9 px-4 text-sm shrink-0">Buscar</button>
            </form>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contacto" className="opacity-90 hover:opacity-100">
              <img src="/assets/images/correo-electronico.png" alt="Contacto" className="w-6 h-6" />
            </Link>
            <Link to="/registro" className="opacity-90 hover:opacity-100">
              <img src="/assets/images/usuario-de-perfil.png" alt="Perfil" className="w-6 h-6" />
            </Link>
            <Link to="/carrito" className="opacity-90 hover:opacity-100">
              <img src="/assets/images/carrito-de-compras.png" alt="Carrito" className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      </div>
      <nav className="flex justify-center items-center gap-6 py-2 px-4 border-t border-white/10">
        <Link to="/productos" className="text-gray-300 hover:text-white text-sm font-medium transition">Hombre</Link>
        <Link to="/productos" className="text-gray-300 hover:text-white text-sm font-medium transition">Mujer</Link>
        <Link to="/productos" className="text-gray-300 hover:text-white text-sm font-medium transition">Niños</Link>
        <Link to="/productos" className="text-gray-300 hover:text-white text-sm font-medium transition">Calzado</Link>
        <Link to="/quienes-somos" className="text-gray-300 hover:text-white text-sm font-medium transition">Quiénes somos</Link>
      </nav>
    </header>
  )
}
