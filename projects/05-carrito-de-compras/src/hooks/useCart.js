import { useContext } from "react"
import { CartContext } from "../components/cartContext.jsx"

export function useCart() {
  const cartContext = useContext(CartContext)

  if (cartContext === undefined) {
    throw new Error('Te olvidaste de encerrarlo con el provider capoo')
  }

  return cartContext
}