import styles from './Footer.module.css';
import logo from '../../../../src/images/CASAYA-VECTOR-white 1.png';
import social from '../../../../src/images/Footer/Social.png';




const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column1}>
                    <img src={logo} alt="logo"/>
                    <div className={styles.text}>
                        Sint-Elisabethstraat 15 9120 Melsele<br />Tel: +32 (0)3/775.99.92<br />
                        Mob: +32 (0)498/69.54.57 <br /> BTW: BE0684 394 287
                    </div>
                </div>
                <div className={styles.column2}>
                    <span className={styles.algemeen}>ALGEMEEN</span>
                    <div>
                        Home<br />
                        Onze producten<br />
                        Onze behandelingen<br />
                        Over Casaya
                    </div>
                </div>
                <div className={styles.column3}>
                    <span className={styles.shop}>SHOP</span>
                    <div>
                        Mijn Account<br />
                        Winkelwagen<br />
                        Verlanglijst<br />
                        Aanmelden<br />
                        Registreren
                    </div>
                </div>
                <div className={styles.column4}>
                    <div className={styles.volg}>VOLG ONS VIA SOCIAL MEDIA</div>
                    <img src={social} className={styles.social} alt="social"/>
                    <div className={styles.line}></div>
                    <div className={styles.werkuren}>WERKUREN</div>
                    <div className={styles.schedule}>
                        <div className={styles.maandag}>
                            Maandag<br />
                            Dinsdag<br />
                            Woensdag<br />
                            Donderdag<br />
                            Vrijdag<br />
                            Zaterdag<br />
                            Zondag
                        </div>
                        <div className={styles.hours}>
                            09:18:30<br />
                            09:18:30<br />
                            09:21:00<br />
                            Gesloten<br />
                            09:17:30<br />
                            09:16:00<br />
                            Gesloten
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerLine}></div>
            <div className={styles.rightsContainer}>
                <div>Casaya 2020. All rights reserved</div>
                <div className={styles.privacy}>Privacy Policy</div>
                <div className={styles.terms}>Terms of use</div>
                <div>Designed & Developed by Digital Farmers</div>
            </div>
        </div>
    );
}

export default Footer;