import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-items')} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
