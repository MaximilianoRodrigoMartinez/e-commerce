export default function PresentacionPage() {
  return (
    <div className="max-w-page mx-auto px-4 py-10">
      <h1 className="text-2xl font-heading font-bold text-secondary mb-4">Sobre este proyecto</h1>
      <p className="text-secondary mb-6">
        Este ecommerce estático de ejemplo fue creado para el trabajo práctico de Aule. El foco está puesto en la estética visual, el uso de Tailwind CSS y una experiencia simple de exploración, carrito y contacto. Desarrollado con React + Vite para el portfolio.
      </p>
      <h2 className="text-xl font-heading font-semibold text-secondary mb-3">Tecnologías utilizadas</h2>
      <ul className="list-disc list-inside text-secondary space-y-1 mb-6">
        <li>React 18</li>
        <li>Vite</li>
        <li>React Router</li>
        <li>Tailwind CSS (utilidades y diseño consistente)</li>
      </ul>
      <h2 className="text-xl font-heading font-semibold text-secondary mb-3">Secciones clave</h2>
      <ul className="list-disc list-inside text-secondary space-y-1">
        <li>Home con hero, destacados y marcas.</li>
        <li>Listado de productos con filtros y cards.</li>
        <li>Detalle de producto con layout claro y CTA.</li>
        <li>Carrito y resumen en dos columnas.</li>
        <li>Páginas de contacto, registro y quiénes somos.</li>
      </ul>
    </div>
  )
}
