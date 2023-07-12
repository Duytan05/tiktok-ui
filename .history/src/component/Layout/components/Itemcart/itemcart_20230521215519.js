import React from 'react';
import classNames from 'classnames/bind';
import styles from './itemcart.module.scss';

import { useCart } from 'react-use-cart';

const cx = classNames.bind(styles);
function ItemCart(props) {
    const { addItem } = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className={cx('')} />
                <div class="card-body text-center">
                    <h3 class="card-title">{props.title}</h3>
                    <h3 class="card-title">
                        {props.price} {props.discount}
                    </h3>
                    <p class="card-text">{props.desc}</p>
                    <button class="btn btn-success" onClick={() => addItem(props.item)}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>

        // <div>
        //     <a to="/Ca-ngu" title={props.title}>
        //         <div class="boximg" title={props.title}>
        //             <img width="160" height="160" src={props.img} />
        //         </div>
        //         <h3 class="product-name">Cá ngừ nướng 300g</h3>
        //         <div class="price">
        //             <strong>35.000₫</strong>
        //             <span>55.000₫</span>
        //             <label>-36%</label>
        //         </div>
        //     </a>

        //     <a class="buy ">Chọn mua</a>
        //     <div class="updown ">
        //         <div class="down">
        //             <span></span>
        //         </div>
        //         {/* <input
        //             class="number"
        //             value="0"
        //             maxlength="50"
        //             pattern="[0-9]*"
        //             type="number"
        //             oninput="this.value = this.value > 50 ? 50 : Math.abs(this.value)"
        //         /> */}
        //         <div class="up">
        //             <span></span>
        //             <span></span>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ItemCart;
