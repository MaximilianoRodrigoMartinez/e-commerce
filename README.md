# MeM — E-commerce de fantasía

Sitio de e-commerce de ropa urbana desarrollado como trabajo práctico. La marca **MeM** es real (proyecto de mi hermano); el sitio es una maqueta funcional para fines educativos y de portfolio.

## Qué incluye

- **Home**: hero, destacados por categoría, marcas.
- **Catálogo**: listado de productos con filtros por categoría y precio.
- **Detalle de producto**: ficha con imagen, precio, descripción y CTAs.
- **Carrito**: ítems, cantidades, resumen y botón finalizar compra.
- **Contacto**: formulario con destinatario, datos y mensaje.
- **Quiénes somos**: presentación de la empresa y valores.

## Cómo levantar el proyecto

1. Clonar o descargar el repo.
2. Instalar dependencias: `npm install`
3. Compilar estilos: `npm run build:css`
4. Abrir `index.html` en el navegador (por ejemplo con Live Server en VS Code) o servir la carpeta con cualquier servidor estático.

Para desarrollar con recarga de estilos al guardar:

```bash
npm run watch:css
```

## Stack

- **HTML5** (páginas estáticas, semánticas)
- **SCSS** (variables, mixins, componentes, layout por página)
- **CSS compilado** en `css/main.css`
- **Bootstrap 5** solo en la home (opcional, para grillas/carousel si se desea)
- **Google Fonts**: Roboto, Open Sans

## Estructura

- `index.html` — Home
- `pages/` — Productos, producto, carrito, contacto, quiénes somos, registro
- `scss/` — Estilos modulares (abstracts, base, components, layout, pages)
- `css/main.css` — Salida compilada
- `assets/images/` — Imágenes y logo

## Notas

- El carrito y el catálogo son estáticos (sin backend). Para ver el **estado vacío del carrito**, agregar la clase `carrito-vacio` al `<main class="carrito-container">` en `pages/carrito.html`.
