import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductosPage from './pages/ProductosPage'
import ProductoPage from './pages/ProductoPage'
import CarritoPage from './pages/CarritoPage'
import ContactoPage from './pages/ContactoPage'
import RegistroPage from './pages/RegistroPage'
import QuienesSomosPage from './pages/QuienesSomosPage'
import PresentacionPage from './pages/PresentacionPage'
import LegalesPage from './pages/LegalesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="productos" element={<ProductosPage />} />
        <Route path="productos/:id" element={<ProductoPage />} />
        <Route path="carrito" element={<CarritoPage />} />
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="registro" element={<RegistroPage />} />
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="legales" element={<LegalesPage />} />
        <Route path="presentacion" element={<PresentacionPage />} />
      </Route>
    </Routes>
  )
}
