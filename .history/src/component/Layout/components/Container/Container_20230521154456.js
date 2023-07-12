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
            <div>
                <h1>All Products</h1>
                {data.productData.map((item, index) => {
                    return <ItemCart img="" title="title" desc="desc" />;
                })}
            </div>
        </div>
    );
}

export default Container;
