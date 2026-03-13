import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MarqueeBanner from './MarqueeBanner'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <MarqueeBanner />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      {/* Wave fija antes del footer, panza hacia abajo */}
      <div className="text-black">
        <svg
          className="w-full h-8 md:h-12"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,213.3C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <Footer />
    </div>
  )
}
