import './Footer.css';
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart';


export function Footer (){
    const {filters} = useFilters();

    const {cart} = useCart();

    return(
        <footer className="footer">

                <h4><span>Ezequiel Campos</span></h4>
                <h5>tienda insana online</h5>

        </footer>
    )
}