import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ changeFilters }) {
  const [maxPrice, setMaxPrice] = useState(100)
  const [category, setCategory] = useState('all')
  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value)

    changeFilters(prevFilters => ({
      ...prevFilters,
      maxPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value)

    changeFilters(prevFilters => ({
      ...prevFilters,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Precio máximo</label>
        <input 
          type="range" 
          id={maxPriceFilterId} 
          value={maxPrice}
          min="0"
          max="150"
          onChange={handleChangeMaxPrice}
        />
        <span>${maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} value={category} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Comida</option>
        </select>
      </div>
    </section>
  )
}