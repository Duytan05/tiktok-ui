import CartItem from '~/component/Layout/components/Cart/CartItem';
import { CartProvider } from 'react-use-cart';
function Cart() {
    return (
        <>
            <CartProvider>
                <CartItem />
            </CartProvider>
        </>
    );
}

export default Cart;
