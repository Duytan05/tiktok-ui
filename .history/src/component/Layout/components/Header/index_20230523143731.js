import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCartShopping,
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faShoppingCart,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/component/Popper/Menu';
import { MessengerIcon, InboxIcon } from '~/component/icons';
import Image from '~/component/Images';
import Search from '../Search';
import Cart from '~/pages/Cart/Cart';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        // icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'GẠO, BỘT, ĐỒ KHÔ GẠO',
        children: {
            title: 'Gạo, bột, đồ khô',
            data: [
                {
                    type: 'Gạo, bột, đồ khô',
                    title: 'Gạo các loại',
                },
                {
                    type: 'Gạo, bột, đồ khô',
                    title: 'Bột các loại',
                },
                {
                    type: 'Gạo, bột, đồ khô',
                    title: 'Xúc xính, lạp xưởng',
                },
            ],
        },
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'MÌ, MIẾN, CHÁO, PHỞ',
        children: {
            title: 'loại',
            data: [
                {
                    type: 'loại',
                    code: 'en',
                    title: 'Mì ăn liền',
                },
                {
                    type: 'loại',
                    code: 'vi',
                    title: 'Hủ tiếu, miến',
                },
            ],
        },
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'BIA, NƯỚC GIẢI KHÁT',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'SỮA CÁC LOẠI',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'BÁNH KEM CÁC LOẠI',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'CHĂM SÓC CÁ NHÂN',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'SỮA CÁC LOẠI',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'SẢN PHẨM CHO MẸ VÀ BÉ',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'VỆ SINH NHÀ CỬA ',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'ĐỒ DÙNG GIA ĐÌNH',
        separate: true,
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'CHĂM SÓC THÚ CƯNG',
        separate: true,
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };
    const returnCart = (Cart) => {
        return <Cart />;
    };
    const userMenu = [
        {
            // icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'THỊT, CÁ, TRỨNG HẢI SẢN',
            children: {
                title: 'loại',
                data: [
                    {
                        type: 'loại',
                        code: 'en',
                        title: 'Thịt các loại',
                    },
                    {
                        type: 'loại',
                        code: 'vi',
                        title: 'Cá hải sản',
                    },
                ],
            },
            separate: true,
        },
        {
            // icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'RAU, CỦ, NẤM, TRÁI CÂY ',
            separate: true,
        },
        {
            // icon: <FontAwesomeIcon icon={faGear} />,
            title: 'DẦU ĂN, GIA VỊ',
            separate: true,
        },
        {
            // icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'KEM, THỰC PHẨM ĐÔNG ',
            separate: true,
        },
        ...MENU_ITEMS,
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div className={cx('category')}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
                            </button>
                        )}
                    </Menu>
                </div>
                <div className={cx('font')}>
                    <h2>Danh mục</h2>
                </div>

                <div className={cx('logo')}>
                    Minimart
                    {/* <img src={images.logo} alt="Minimart" /> */}
                </div>
                <div className={cx('map')}>
                    <button>hi</button>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <h2 className={cx('cart')}> Giỏ hàng</h2>
                            <Link to="/cart">
                                <Tippy delay={[0, 200]} content="Không có sản phẩm nào ">
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </Tippy>
                            </Link>
                            {/* <Tippy delay={[0, 200]} content="Messenger">
                                <button className={cx('action-btn')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button outline>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-1/150974224_952087568662287_5984013307778399862_n.jpg?stp=dst-jpg_p240x240&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=u4lMAaiw6TAAX-odUgu&_nc_ht=scontent.fdad3-6.fna&oh=00_AfBUJRRRC8g_SBR02wp9-YY0TuGQzrEHaPRoPmDXD2u9qA&oe=6436BB5B"
                                alt="Nguyen Duy Tan"
                                fallback="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/311334752_809752306938632_8892506977697071182_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c5j96XV44O4AX97p_ca&_nc_ht=scontent.fdad3-6.fna&oh=00_AfD0DEI9bPBowkqAfO6cPP2YKK8KH7ifb-G1q4WDXZXlOw&oe=6415753F"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
