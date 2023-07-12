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

                <a href="/sua-tuoi">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/2386/bhx/sua-tuoi-202210311320147075.v202305171357.png"
                        alt="Sữa tươi"
                    />{' '}
                    <span>Sữa tươi</span>{' '}
                </a>
                <a href="/nuoc-ngot">
                    {' '}
                    <img
                        width="45"
                        height="45"
                        src="//cdn.tgdd.vn/Products/Images/2443/bhx/nuoc-ngot-202210311315510981.v202305171357.png"
                        alt="Nước ngọt"
                    />{' '}
                    <span>Nước ngọt</span>{' '}
                </a>
            </div>
        </div>
    );
}

export default Container;
