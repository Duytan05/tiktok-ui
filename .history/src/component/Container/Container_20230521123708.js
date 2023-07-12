import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container() {
    return (
        <div className={cx('groupcate')}>
            <div className={cx('namegroup')}>Sản phẩm hot</div>
            <div className={cx('listgroup')}>
                <a></a>
            </div>
        </div>
    );
}

export default Container;
