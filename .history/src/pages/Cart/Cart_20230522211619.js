import CartItem from '~/component/Layout/components/Cart/CartItem';
import Container from '~/component/Layout/components/Container/Container';
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
