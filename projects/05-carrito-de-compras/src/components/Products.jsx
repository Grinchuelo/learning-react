import { AddToCartIcon } from './Icons.jsx'

export function Products({ products }) {
  return(
    <main>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="productData">
              <h3>{product.title}</h3>
              <div className="productData_bottom-c">
                <span className="price">${product.price}</span>
                <button>
                  <AddToCartIcon></AddToCartIcon>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}