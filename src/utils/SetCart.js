import {
  useEffect, 
  useContext 
} from 'react';
import CartContext from '../context/cart/cartContext';

const SetCart = () => {
  const cartContext = useContext(CartContext);
  const { setCart } = cartContext;

  useEffect(() => {
    const cart = localStorage.getItem('expresso-cursos-cart');

    if (cart) setCart(JSON.parse(cart));
  }, []);
}

export default SetCart;