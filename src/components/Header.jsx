import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { to: '/productos', label: 'Hombre' },
  { to: '/productos', label: 'Mujer' },
  { to: '/productos', label: 'Niños' },
  { to: '/productos', label: 'Calzado' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
      {/* Fila principal: logo, búsqueda a un lado, iconos ordenados */}
      <div className="flex items-center justify-between h-20 sm:h-22 gap-4 px-4 sm:px-6 py-5 sm:py-6">
        <div className="flex items-center gap-4 min-w-0">
          <Link to="/" className="shrink-0 flex items-center" aria-label="Inicio">
            <img
              src="/assets/images/logo.webp"
              alt="Logo MeM"
              className="h-20 sm:h-22 w-auto block object-contain"
            />
          </Link>
          {/* Búsqueda: no centrada, al lado del logo en desktop */}
          <form
            className="hidden md:flex items-center gap-2 flex-1 min-w-0 max-w-xs"
            onSubmit={(e) => {
              e.preventDefault()
              const q = searchQuery.trim()
              navigate(q ? `/productos?q=${encodeURIComponent(q)}` : '/productos')
            }}
          >
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar..."
              className="flex-1 min-w-0 h-9 px-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="h-9 px-4 rounded-full text-sm font-semibold shrink-0 bg-primary hover:bg-indigo-600 text-white transition"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Iconos: bloque agrupado con separador */}
        <div className="flex items-center shrink-0 pl-4 sm:pl-5 border-l border-white/10">
          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              to="/contacto"
              className="p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Contacto"
            >
              <img src="/assets/images/correo-electronico.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
            </Link>
            <Link
              to="/registro"
              className="p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Perfil"
            >
              <img src="/assets/images/usuario-de-perfil.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
            </Link>
            <Link
              to="/carrito"
              className="p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Carrito"
            >
              <img src="/assets/images/carrito-de-compras.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Barra de navegación: pegada al margen izquierdo en desktop */}
      <nav
        className="border-t border-white/10 px-4 sm:px-6"
        aria-label="Principal"
      >
        <div className="hidden md:flex items-center gap-6 py-2.5 -mb-px">
          {navLinks.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-300 hover:text-white text-sm font-medium transition whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menú móvil (hamburguesa) - overlay deslizante */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-30"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 z-40 transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full border-t border-white/10 bg-black px-4 py-4 flex flex-col gap-4 overflow-y-auto">
          {/* Búsqueda en móvil */}
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault()
              const q = searchQuery.trim()
              navigate(q ? `/productos?q=${encodeURIComponent(q)}` : '/productos')
              setMenuOpen(false)
            }}
          >
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar productos, marcas..."
              className="flex-1 min-w-0 h-10 px-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="h-10 px-4 rounded-full text-sm font-semibold shrink-0 bg-primary hover:bg-indigo-600 text-white transition"
            >
              Buscar
            </button>
          </form>
          <nav className="flex flex-col gap-2 mt-2" aria-label="Navegación móvil">
            {navLinks.map(({ to, label }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white py-2 text-base font-medium transition border-b border-white/5"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
