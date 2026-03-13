import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/productos', label: 'Hombre' },
  { to: '/productos', label: 'Mujer' },
  { to: '/productos', label: 'Niños' },
  { to: '/productos', label: 'Calzado' },
  { to: '/quienes-somos', label: 'Quiénes somos' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 py-6 px-4 sm:px-6">
        <Link to="/" className="shrink-0" aria-label="Inicio">
          <img
            src="/assets/images/logo.webp"
            alt="Logo MeM"
            className="h-20 sm:h-22 w-auto block object-contain opacity-95 hover:opacity-100 transition"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6" aria-label="Enlaces">
          {navLinks.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className="text-sm text-gray-300 hover:text-white transition whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center shrink-0 pl-4 sm:pl-5 border-l border-white/10">
          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href="https://www.instagram.com/memstreetwear?igsh=OHJvZW9sbnVsanBh"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Instagram MeM Streetwear"
            >
              <img src="/assets/images/IconoInstagram.png" alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
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
          </div>
        </div>
      </div>
    </footer>
  )
}
