import { useId } from "react";
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { useCart } from "../hooks/useCart.jsx";

function CartItem({ thumbnail, title, price, quantity, addToCart, id }) {
 return (
   <li>
     <img src={thumbnail} alt={title} />
     <div>
       <strong>{title}</strong>
     </div>
     <div>
       <strong>${price}</strong>
     </div>
     <footer>
       <small>Qty: {quantity}</small>
       <button onClick={() => addToCart({ thumbnail, title, price, id })}>+</button>
     </footer>
   </li>
 );
}

export function Cart() {
 const cartCheckBoxId = useId();
 const { cart, clearCart, addToCart } = useCart();

 return (
   <>
     <label className="cart-button" htmlFor={cartCheckBoxId}>
       <CartIcon />
     </label>
     <input id={cartCheckBoxId} type="checkbox" hidden />
     <aside className="cart">
       <ul>
         {cart.map(product => (
           <CartItem
             key={product.id}
             addToCart={addToCart}
             {...product}
           />
         ))}
       </ul>
       <button style={{ backgroundColor: "#E36414" }} onClick={clearCart}>
         <ClearCartIcon />
       </button>
     </aside>
   </>
 );
}