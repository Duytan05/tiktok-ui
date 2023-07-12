import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/67508cadba202ad6da338e95d71cff4e~c5_100x100.jpeg?x-expires=1677474000&x-signature=7%2Fmkpn1EqBtD6jLJKKseMUPvAT4%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaaa</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenduytan</span>
            </div>
        </div>
    );
}

export default AccountItem;
