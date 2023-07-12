import { useCart } from 'react-use-cart';
function Cart() {
    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
        useCart();
    if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;
    return (
        <div className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>
                        Cart ({totalUniqueItems}) total Items:({totalItems})
                    </h5>
                    <table className="table table-light table-hover m-0">
                        {items.map((item, index) => {
                            <tr key={index}>
                                <img src={item.img} style={{ height: '6rem' }} />
                            </tr>;
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
