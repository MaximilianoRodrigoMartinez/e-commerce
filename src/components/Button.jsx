const variantClasses = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

export default function Button({ variant = 'primary', className = '', type = 'button', children, ...props }) {
  const base = variantClasses[variant] || variantClasses.primary
  return (
    <button type={type} className={`${base} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
