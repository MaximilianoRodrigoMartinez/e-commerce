import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MarqueeBanner from './MarqueeBanner'

export default function Layout() {
  return (
    <>
      <Header />
      <MarqueeBanner />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
