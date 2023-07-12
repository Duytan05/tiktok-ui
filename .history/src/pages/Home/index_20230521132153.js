import Banner from '~/component/Layout/components/Banner/Banner';
import Container from '~/component/Layout/components/Container/Container';
import classNames from 'classnames/bind';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Container />
        </div>
    );
}

export default Home;
