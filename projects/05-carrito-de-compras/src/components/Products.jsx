import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart.js'

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  
  
  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          const btnCartClassname = isProductInCart ? 'bg-isInCart' : ''

        return (
          <li key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title} 
            />
            <div>
              <strong>{product.title}</strong> - <span>${product.price}</span>
            </div>
            <div className='btn-c'>
              <button className={btnCartClassname} onClick={() => {
                if (isProductInCart) {
                  removeFromCart(product)
                } else {
                  addToCart(product)
                }
              }}>
                { isProductInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
                }
              </button>
            </div>
          </li>
          )
        })}
      </ul>
    </main>
  )
}