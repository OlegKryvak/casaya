import styles from './Section3.module.css';
import menu from '../images/Section3/menu.png';
import menu2 from '../images/Section3/Menu2.png';
import filters from '../images/Section3/filters.png';
import photo from '../images/Section3/photo.png';
import basic from '../images/Section3/BasicPhoto.png';
import calm from '../images/Section3/CalmPhoto.png';
import acne from '../images/Section3/AcnePhoto.png';
import firm from '../images/Section3/FirmPhoto.png';
import men from '../images/Section3/MenPhoto.png';
import renew from '../images/Section3/RenewPhoto.png';
import mountains from '../images/Section3/Mountains.png';
import infinity from '../images/Section3/Infinity.png';
import water from '../images/Section3/Water.png';
import fire from '../images/Section3/Fire.png';
import arrow from '../images/Section3/Arrow.png';
import button from '../images/Section3/button.png';
import heart from '../images/Section3/heart.png';
import Vectorheart from '../images/Section3/VectorHeart.png';
import Select from 'react-select';


const Section3 = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button className={styles.over}>
                    <img src={menu2} alt="menu2"/>
                    <span>Overzicht categoriën</span>
                </button>
                <button className={styles.filters}>
                    <img src={filters} alt="filters"/>
                </button>
            </div>
            <div className={styles.menu}>
                <div>Overzicht Categoriën</div>
                <img src={menu} alt="menu"/>
            </div>
            <div className={styles.content}>
                <div className={styles.selects}>
                    <Select options={options} />
                    <Select options={options} />
                    <Select options={options} />
                </div>
                <img src={photo} className={styles.photo} alt="photo1"/>
                <div className={styles.prices}>
                    <div className={styles.mobile}>
                        <div >
                            <div className={styles.basic}>
                                <img src={basic} alt="basic"/>
                                <h3>Basic facial</h3>
                                <div className={styles.images}>
                                    <img src={mountains} alt="mountains"/>
                                    <img src={infinity} alt="infinity"/>
                                </div>
                                <span>110 minuten</span>
                                <h1>€25.50</h1>
                                <div>
                                    <button className={styles.button}><img src={button} alt="button"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                            <div className={styles.basic}>
                                <img src={calm} alt="calm"/>
                                <h3>Calm Facial</h3>
                                <div className={styles.images}>
                                    <img src={water} alt="water"/>
                                    <img src={fire} alt="fire"/>
                                    <img src={arrow} alt="arrow"/>
                                </div>
                                <span>110 minuten</span>
                                <h1>€9.50</h1>
                                <div>
                                    <button className={styles.button}><img src={button} alt="button"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.basic}>
                                <img src={acne} alt="acne"/>
                                <h3>Acné relief facial</h3>
                                <div className={styles.images}>
                                    <img src={mountains} alt="mountains"/>
                                    <img src={water} alt="water"/>
                                    <img src={fire} alt="fire"/>
                                </div>
                                <span>110 minuten</span>
                                <h1>€110</h1>
                                <div>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                            <div className={styles.basic}>
                                <img src={firm} alt="firm"/>
                                <h3>Firm Facial</h3>
                                <div className={styles.images}>
                                    <img src={arrow} alt="arrow"/>
                                    <img src={infinity} alt="infinity"/>
                                </div>
                                <span>110 minuten</span>
                                <h1>€25.50</h1>
                                <div>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '26px' }} >
                        <div className={`${styles.basic} ${styles.hidden}`}>
                            <img src={men} alt="men"/>
                            <h3>Men’s facial</h3>
                            <div className={styles.images}>
                                <img src={water} alt="water"/>
                                <img src={fire} alt="fire"/>
                                <img src={infinity} alt="infinity"/>
                            </div>
                            <span>50 minuten</span>
                            <h1>€11.00</h1>
                            <div>
                                <button className={styles.button}><img src={button} alt="button1"/></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                            </div>
                        </div>
                        <div className={`${styles.basic} ${styles.hidden}`}>
                            <img src={renew} alt="renew"/>
                            <h3>Renew Facial</h3>
                            <div className={styles.images}>
                                <img src={arrow} alt="arrow"/>
                            </div>
                            <span>30 minuten</span>
                            <h1>€13.00</h1>
                            <div>
                                <button className={styles.button}><img src={button} alt="button1"/></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;