import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { productId: '1', name: 'Remera Oversize Negra', price: 9999, image: '/assets/images/RemeraOversizeNegra.jpg', talle: 'M', color: 'Negro', qty: 1 },
    { productId: '2', name: 'Remera Oversize Blanca', price: 9999, image: '/assets/images/promo3.jpg', talle: 'L', color: 'Blanco', qty: 1 },
  ])

  const addItem = (item) => setItems((prev) => [...prev, item])
  const removeItem = (index) => setItems((prev) => prev.filter((_, i) => i !== index))
  const updateQty = (index, delta) => {
    setItems((prev) => {
      const next = [...prev]
      const newQty = Math.max(0, (next[index].qty || 1) + delta)
      if (newQty === 0) return next.filter((_, i) => i !== index)
      next[index] = { ...next[index], qty: newQty }
      return next
    })
  }
  const subtotal = items.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0)
  const total = subtotal
  const isEmpty = items.length === 0

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, subtotal, total, isEmpty }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
