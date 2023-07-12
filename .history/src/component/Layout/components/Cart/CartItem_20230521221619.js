import { useCart } from 'react-use-cart';
function Cart() {
    const { items } = useCart();

    return <div>{console.warn(items)}</div>;
}

export default Cart;
