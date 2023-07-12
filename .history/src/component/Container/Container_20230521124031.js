import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
    return (
        <div className={cx('groupcate')}>
            <div className={cx('namegroup')}>Sản phẩm hot</div>
            <div className={cx('listgroup')}>
            <a href="/thit-heo"> <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/8781/bhx/icon_8781.v202305171357.png" alt="Thịt heo"> <span>Thịt heo</span> </a>
            </div>
        </div>
    );
}

export default Container;
