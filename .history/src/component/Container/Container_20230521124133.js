import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
    return (
        <div className={cx('groupcate')}>
            <div className={cx('namegroup')}>Sản phẩm hot</div>
            <div className={cx('listgroup')}>
                <a href="/thit-heo">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/8781/bhx/icon_8781.v202305171357.png"
                        alt="Thịt heo"
                    />{' '}
                    <span>Thịt heo</span>{' '}
                </a>
                <a href="/kem">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/7462/bhx/kem-cay-kem-hop-202212151650258532.v202305171357.png"
                        alt="Kem cây, kem hộp"
                    />{' '}
                    <span>Kem cây, kem hộp</span>{' '}
                </a>
            </div>
        </div>
    );
}

export default Container;
