/* icono carrito con numero al costado y ubicarlo en la navbar*/
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import {cartContext} from '../App';

function CartWidget() {

const context = useContext(cartContext);

return (

    <>
    <ShoppingCartIcon fontSize='large'/>
    <span> {context.cart.length} </span>
    </>
  );

}


export default CartWidget;