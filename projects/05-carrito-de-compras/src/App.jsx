import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { useState } from 'react'
import { CartProvider } from './components/cartContext'

function useFilters() {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 10
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice &&
        (
          filters.category == 'all' || 
          product.category == filters.category
        )
      )
    })
  }

  return { filterProducts, products, setFilters }
}
export function App() {
  const { filterProducts, products, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
    </>
  )
}