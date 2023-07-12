import React from 'react';
function ItemCart(props) {
    return (
        // <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        //     <div class="card p-0 overflow-hidden h-100 shadow">
        //         <img src={props.img} class="card-img-top img-fluid" />
        //         <div class="card-body text-center">
        //             <h5 class="card-title">{props.title}</h5>
        //             <h5 class="card-title">{props.price}</h5>
        //             <p class="card-text">{props.desc}</p>
        //             <a href="#" class="btn btn-success">
        //                 Add to cart
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <div>
            <a to="/Ca-ngu" title={props.title}>
                <div class="boximg" title={props.title}>
                    <img
                        width="160"
                        height="160"
                        src="https://cdn.tgdd.vn/Products/Images/8782/279674/bhx/ca-ngu-nuong-300g-202305050818274118_300x300.jpg"
                        alt="Cá ngừ nướng 300g"
                    />
                </div>
                <h3 class="product-name">Cá ngừ nướng 300g</h3>
                <div class="price">
                    <strong>35.000₫</strong>
                    <span>55.000₫</span>
                    <label>-36%</label>
                </div>
            </a>

            <a class="buy ">Chọn mua</a>
            <div class="updown ">
                <div class="down">
                    <span></span>
                </div>
                {/* <input
                    class="number"
                    value="0"
                    maxlength="50"
                    pattern="[0-9]*"
                    type="number"
                    oninput="this.value = this.value > 50 ? 50 : Math.abs(this.value)"
                /> */}
                <div class="up">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
