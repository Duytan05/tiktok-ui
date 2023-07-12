import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import Category from './category';
const cx = classNames.bind(styles);

function Container() {
    return (
        <div>
            <Category />
        </div>
    );
}

export default Container;
