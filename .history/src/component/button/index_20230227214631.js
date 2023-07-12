import classNames from 'classnames/bind';

import style from 'Button.module.scss';
import { Children } from 'react';

const cx = classNames.bind(style);

function Button({ to, href, chilren, onclick }) {
    let Comp = 'button';
    const classes = cx('wrapper');
    return (
        <Comp classNames={classes}>
            <span>{Children}</span>
        </Comp>
    );
}

export default Button;
