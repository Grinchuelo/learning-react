import { useState, createContext, useContext } from "react"
import { products as initialProducts } from '../mocks/products.json'

export function useFilters() {
  const FiltersContext = createContext(null)
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 50
  })
  const [products, setProducts] = useState(initialProducts.slice(0, 10))

  const filterProducts = (products) => {
    return (
      products.slice(0, 10).filter(product => {
        return (
          product.price <= filters.maxPrice &&
          (
            filters.category === 'all' || 
            product.category === filters.category
          ) 
        )   
      })
    )
  }

  const handlePrice = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      maxPrice: Number(e.target.value)
    }))

    setProducts(filterProducts(products))
  }

  return (
    <FiltersContext value={{ products, filters, setFilters, handlePrice }}></FiltersContext>
  )
  
  /* {  } */
}