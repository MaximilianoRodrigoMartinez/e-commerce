import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="px-4 sm:px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="shrink-0" aria-label="Inicio">
            <img
              src="/assets/images/logo.webp"
              alt="Logo MeM"
              className="h-20 sm:h-22 w-auto block object-contain opacity-95 hover:opacity-100 transition"
            />
          </Link>
          <div className="flex items-center shrink-0">
            <div className="flex items-center gap-1 sm:gap-3">
              <a
                href="https://www.instagram.com/memstreetwear?igsh=OHJvZW9sbnVsanBh"
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="mt-6 pt-5 border-t border-white/10 text-xs sm:text-sm text-gray-400 space-y-3">
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1" aria-label="Información legal">
            <Link to="/legales#terminos" className="hover:text-white transition">
              Términos y condiciones
            </Link>
            <span className="text-white/30" aria-hidden>
              ·
            </span>
            <Link to="/legales#privacidad" className="hover:text-white transition">
              Política de privacidad
            </Link>
            <span className="text-white/30" aria-hidden>
              ·
            </span>
            <a
              href="https://www.argentina.gob.ar/defensa-del-consumidor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Defensa del Consumidor
            </a>
          </nav>
          <p className="text-center sm:text-left text-gray-500">© {new Date().getFullYear()} MeM Streetwear. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
