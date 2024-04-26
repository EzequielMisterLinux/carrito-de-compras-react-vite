// Products.jsx
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";


export function Products({ products }) {
  const {addToCart, cart, RemoveFromCart} = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id) 
  };

  return (
    <main className="products">
      <ul>
        {
          products.slice(0, 9).map((product) => {

            const isProductInCart = checkProductInCart(product);

            return(
              
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong>
                  </div>
                  <div>
                    <strong>${product.price}</strong>
                  </div>
                  <div>
      
                    <button 
                      style={{backgroundColor : isProductInCart ? 'red': 'green'}}
                      onClick={() => {isProductInCart ? RemoveFromCart(product) : addToCart(product)}}>
                      {
                        isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon />
                      }
                    </button>
                  </div>
                </li>
              
            ); //fin return

          })// fin map
        }
      </ul>
    </main>
  );
}

export default Products;