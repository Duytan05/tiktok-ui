import Banner from '~/component/Layout/components/Banner/Banner';
import Container from '~/component/Layout/components/Container/Container';

import Footer from '~/component/Layout/components/Footer/Footer';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Container />
            <Footer />
        </div>
    );
}

export default Home;
