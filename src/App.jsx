import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products";
import Header from './components/Header';
import { Footer } from "./components/Footer";
import { IS_DEVOPMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";


function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;