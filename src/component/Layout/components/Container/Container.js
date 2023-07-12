import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import Category from './category';
import ItemCart from '../Itemcart/itemcart';

import data from '~/component/data/data';

const cx = classNames.bind(styles);

function Container() {
    return (
        <div>
            <Category />
            <h3 className={cx('product')}>SẢN PHẨM KHUYẾN MÃI</h3>
            <div className={cx('item')}>
                {data.productData.map((item, index) => {
                    return (
                        <ItemCart
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            discount={item.discount}
                            item={item}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Container;
