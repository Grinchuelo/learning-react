import { products as initialProducts } from '../mocks/products.json'

export function useProducts() {
  const [products, setProducts] = useState(initialProducts)

  

}