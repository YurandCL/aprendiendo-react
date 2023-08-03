import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductInCart = (product) =>
    cart.some(item => item.id === product.id)

    return (
      <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div>
              <button style={{backgroundColor: isProductInCart?'red':'#09f'}} onClick={() =>
                isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product)
              }>
                {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}