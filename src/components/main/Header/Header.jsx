/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.css';
import casayaLogo from '../../../../src/images/CASAYA-VECTOR-white 1.png';
import vectorHeart from '../../../../src/images/VectorHeart.png';
import vectorBasket from '../../../../src/images/VectorBasket.png';
import rectangle1 from '../../../../src/images/Rectangle1.png';
import menu from '../../../../src/images/Menu.png';
import frame from '../../../../src/images/Frame 1.png';
import button1 from '../../../../src/images/Button1.png';
import ellipse from '../../../../src/images/Ellipse.png';
import ellipseBorder from '../../../../src/images/EllipseBorder.png';
import arrow from '../../../../src/images/ArrowDown.png';
import {
    NavLink
} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 65px' }}>
                <img src={casayaLogo} className={styles.casayaLogo} alt="cassayaLogo"/>
                <div className={styles.nav}>
                    <img src={vectorHeart} className={styles.vectorHeart} alt="vectorHeart"/>
                    <img src={vectorBasket} className={styles.vectorBasket} alt="vectorBasket"/>
                    <nav className={styles.dropdawnmenu}>
                        <ul>
                            <li>
                                <a href="#" className={styles.a}>
                                    <div className={styles.menu}>
                                        <img src={rectangle1} className={styles.rectangle1} alt="rectangle"/>
                                        <span className={styles.menuText}>
                                            Menu
                                        </span>
                                        <img src={menu} className={styles.menuIcon} alt="menuIcon"/>
                                    </div>
                                </a>
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
            <div className={styles.headline}>
                Welkom bij Casaya
            </div>
            <div className={styles.headline2}>Ontdek onze oase van rust</div>
            <div className={styles.buttons}>
                <button className={styles.button1}><img src={button1} alt="button1"/></button>
                <button className={styles.button2}><img src={frame} className={styles.button22} alt="frame"/></button>
            </div>
            <div className={styles.navigation}>
                <img src={arrow} className={styles.arrow} alt="arrow"/>
            </div>
            <div className={styles.ellipses}>
                <img src={ellipse} alt="ellipse"/>
                <div className={styles.ellipseBorder}>
                    <img src={ellipseBorder} className={styles.border} alt="border"/>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                </div>
                <img src={ellipse} alt="ellipse"/>
                <img src={ellipse} alt="ellipse"/>
            </div>
        </div>
    );
}

export default Header;