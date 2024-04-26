import { useContext } from "react";
import { CartContext } from "../context/cart";

// crear nuestro custom hook

export const useCart= () => {
    const context = useContext(CartContext);

    if(context === undefined){
        throw new Error("useCart debe ser usado dentro de un cartProvider");
    }
    return context;
}