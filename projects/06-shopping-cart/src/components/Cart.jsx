import './Cart.css'
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart} = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>

      <input type='checkbox' hidden id={cartCheckboxId} />

      <aside className='cart'>
        <ul>
          {cart.map(product =>
            <CartItem key={product.id} product={product}/>
          )}
        </ul>

        <section>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </section>
      </aside>
    </>
  )
}