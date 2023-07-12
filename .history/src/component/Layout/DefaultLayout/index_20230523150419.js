import classNames from 'classnames/bind';
import Header from '~/component/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import { Sticky } from 'react-sticky';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <Sticky>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </Sticky>
    );
}
export default DefaultLayout;
