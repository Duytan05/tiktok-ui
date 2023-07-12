import { useCart } from 'react-use-cart';
function Cart() {
    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
        useCart();

    return <div></div>;
}

export default Cart;
