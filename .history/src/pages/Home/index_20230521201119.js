import Banner from '~/component/Layout/components/Banner/Banner';
import Container from '~/component/Layout/components/Container/Container';
import ItemCart from '~/component/Layout/components/Itemcart/itemcart';
import data from '~/component/data/data';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Container />
            <div className={cx('item')}>
                {data.productData.map((item, index) => {
                    return (
                        <ItemCart
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            discount={item.discount}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
