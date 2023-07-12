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
                <a href="/nuoc-giat">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/2464/bhx/icon_2464.v202305171357.png"
                        alt="Nước giặt"
                    />{' '}
                    <span>Nước giặt</span>{' '}
                </a>
                <a href="/mi">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/2565/bhx/mi-an-lien-202209301456432997.v202305171357.png"
                        alt="Mì ăn liền"
                    />{' '}
                    <span>Mì ăn liền</span>{' '}
                </a>
                <a href="/giay-ve-sinh">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/9081/bhx/giay-ve-sinh-202212051502079595.v202305171357.png"
                        alt="Giấy vệ sinh"
                    />{' '}
                    <span>Giấy vệ sinh</span>{' '}
                </a>
                <a href="/nuoc-mam">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/2289/bhx/nuoc-mam-202212051441046889.v202305171357.png"
                        alt="Nước mắm"
                    />{' '}
                    <span>Nước mắm</span>{' '}
                </a>
                <a href="/rau-cu-trai-cay">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/10298/bhx/rau-cu-trai-cay-202205261519146845.v202305171357.png"
                        alt="Rau, củ, nấm, trái cây"
                    />{' '}
                    <span>Rau, củ, nấm, trái cây</span>{' '}
                </a>
                <a href="/cha-gio"> <img width="45" height="45" src="//cdn.tgdd.vn/Products/Images/7171/bhx/cha-gio-cha-ram-202212051418336344.v202305171357.png" alt="Chả giò, chả ram"> <span>Chả giò, chả ram</span> </a>
            </div>
        </div>
    );
}

export default Container;
