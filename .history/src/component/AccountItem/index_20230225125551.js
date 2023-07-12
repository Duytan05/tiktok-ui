import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="" alt="Hoaa" />
            <div className={cx('info')}>
                <P className={cx('name')}>
                    <span>Nguyễn Duy Tân</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </P>
                <span className={cx('username')}>nguyenduytan</span>
            </div>
        </div>
    );
}

export default AccountItem;
