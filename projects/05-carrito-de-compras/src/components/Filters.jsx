import { useEffect, useState } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
  const { filters, handlePrice } = useFilters()

  return (
    <div className="filters-c">
      <div className="filters-c_price-c">
        <input type="range" name="price" id="input_price" max={150} value={filters.maxPrice} onChange={(e) => {handlePrice(e)}} />
        <span className="price">${filters.maxPrice}</span>
      </div>
      <select name="" id="">
        <option value="beauty">Beauty</option>
        <option value="fragrances">fragrances</option>
      </select>
    </div>
  )
}