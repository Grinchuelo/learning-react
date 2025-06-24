import { useState } from 'react'
import { useFilters } from './hooks/useFilters.js'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'

export function App() {
  const { products } = useFilters()
  console.log(products)
  return (
    <>
      <Header />
      <Products products={products}/>
    </>
  )
}
