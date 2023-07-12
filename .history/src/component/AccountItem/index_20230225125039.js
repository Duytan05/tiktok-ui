import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return <div className={cx('wrapper')}></div>;
}

export default AccountItem;
