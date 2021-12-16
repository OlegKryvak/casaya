/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../images/CASAYA.png';
import heart from '../images/heart.png';
import basket from '../images/basket.png';
import gift from '../images/gift.png';
import menu from '../images/menu.png';
import styles from './Header.module.css';
import {
    NavLink
} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo"/>
            <div className={styles.nav}>
                <img src={gift} className={styles.gift} alt="gift"/>
                <img src={heart} className={styles.heart} alt="heart"/>
                <img src={basket} className={styles.basket} alt="basket"/>
                <nav className={styles.dropdawnmenu}>
                    <ul>
                        <li>
                            <a href="#"><img src={menu} className={styles.menu} alt="menu"/></a>
                            <ul className={styles.submenu}>
                                <li>
                                    <NavLink to="/">Main</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop2">Shop2</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/single">Single Product</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;