import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('nexamart-cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('nexamart-cart', JSON.stringify(cartItems))
    } catch {}
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    if (!product?.id) return

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product?.id === product.id
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.product?.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      }

      return [
        ...currentItems,
        {
          product,
          quantity,
        },
      ]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product?.id !== productId)
    )
  }

  const increaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product?.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  const decreaseQuantity = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product?.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + (Number(item.quantity) || 0),
        0
      ),
    [cartItems]
  )

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          (Number(item.product?.price) || 0) *
            (Number(item.quantity) || 0),
        0
      ),
    [cartItems]
  )

  const deliveryFee = subtotal === 0 || subtotal >= 499 ? 0 : 49
  const total = subtotal + deliveryFee

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
    subtotal,
    deliveryFee,
    total,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}

export { CartProvider, useCart }