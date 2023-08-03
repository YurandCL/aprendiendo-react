import { useCart } from '../hooks/useCart'
import { RemoveFromCartIcon } from './Icons'

export function CartItem({ product }) {
  const { addToCart, removeFromCart } = useCart()
  return (
    <li>
      <header style={{position:'relative', width: '100%'}}>
        <button style={{position: 'absolute', right:0}} onClick={() => removeFromCart(product)}>
          <RemoveFromCartIcon />
        </button>
      </header>
      <img src={product.thumbnail} alt={product.description} />
      <div>
        <h5 style={{margin:0}}><strong>{product.title}</strong></h5>
        <p style={{margin:0}}>$ {product.price}</p>
      </div>

      <footer>
        <small>Qty: {product.quantity}</small>
        <button onClick={()=>addToCart(product)}>+</button>
      </footer>
    </li>
  )
}