# MeM — E-commerce de fantasía

Sitio de e-commerce de ropa urbana desarrollado como trabajo práctico. La marca **MeM** es real (proyecto de mi hermano); el sitio es una maqueta funcional para fines educativos y de portfolio.

## Qué incluye

- **Home**: hero, destacados por categoría, marcas.
- **Catálogo**: listado de productos con filtros por categoría y precio.
- **Detalle de producto**: ficha con imagen, precio, descripción y CTAs.
- **Carrito**: ítems, cantidades, resumen y botón finalizar compra.
- **Contacto y registro**: formularios con estilos consistentes.
- **Quiénes somos**: presentación de la empresa y valores.

## Cómo levantar el proyecto

1. Clonar o descargar el repo.
2. Instalar dependencias: `npm install`
3. Desarrollo con recarga en caliente: `npm run dev` (abre http://localhost:5173)
4. Build para producción: `npm run build` (genera la carpeta `dist/`)

## Deploy en Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA: el archivo `public/_redirects` redirige todas las rutas a `index.html` para React Router.
- No se requiere backend.

## Stack

- **React 18** + **Vite**
- **React Router** (rutas: /, /productos, /productos/:id, /carrito, /contacto, /registro, /quienes-somos, /presentacion)
- **Tailwind CSS** (paleta y componentes en `tailwind.config.js` y `src/index.css`)
- **Google Fonts**: Roboto, Open Sans

## Estructura

- `index.html` — Punto de entrada de Vite
- `src/main.jsx` — Bootstrap de la app (React + Router + CartProvider)
- `src/App.jsx` — Rutas
- `src/components/` — Layout, Header, Footer, MarqueeBanner, Button, Card, ProductCard
- `src/pages/` — HomePage, ProductosPage, ProductoPage, CarritoPage, ContactoPage, RegistroPage, QuienesSomosPage, PresentacionPage
- `src/data/products.js` — Datos de productos y categorías destacadas
- `src/context/CartContext.jsx` — Estado del carrito
- `public/assets/images/` — Imágenes y logo (se sirven en /assets/images/...)
