import React from 'react';
import classNames from 'classnames/bind';
import banner1 from '~/assets/images/banner1.jpg';
import banner2 from '~/assets/images/banner2.jpg';
import banner3 from '~/assets/images/banner1.jpg';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Banner;
