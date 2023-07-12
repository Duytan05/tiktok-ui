import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import Category from './category';
import ItemCart from '../Itemcart/itemcart';
const cx = classNames.bind(styles);

function Container() {
    return (
        <div>
            <Category />
            <ItemCart />
        </div>
    );
}

export default Container;
