import styles from './Section3.module.css';
import basic from '../images/Section3/basic.png';
import furterer from '../images/Section3/furterer.png';
import revolution from '../images/Section3/revolution.png';
import button from '../images/Section3/button.png';
import green from '../images/Section3/green.png';
import heart from '../images/Section3/heart.png';
import arrowLeft from '../images/Section3/arrowLeft.png';
import arrowRight from '../images/Section3/arrowRight.png';

const Section3 = () => {
    return (
        <div className={styles.container}>
            <h1>Producten die u wellicht interessant vindt</h1>
            <div className={styles.prices}>
                <img src={arrowLeft} className={styles.arrowLeft} alt="left" />
                <div className={styles.basic}>
                    <img src={basic} alt="basic" />
                    <h1>Basic Nature Facial Cream 250ml</h1>
                    <div className={styles.price}>€25.50</div>
                    <div className={styles.buttons}>
                        <button><img src={button} className={styles.button} alt="button1" /></button>
                        <button><img src={green} className={styles.green} alt="green" /><img src={heart} className={styles.vector} alt="vector" /></button>
                    </div>
                </div>
                <div className={styles.basic}>
                    <img src={furterer} alt="furterer" />
                    <h1>Furterer PARIS - Absolue Keratine 50ml</h1>
                    <div className={styles.price}>€9.50</div>
                    <div className={styles.buttons}>
                        <button><img src={button} alt="button1" /></button>
                        <button><img src={green} className={styles.green} alt="green1" /><img src={heart} className={styles.vector} alt="vector" /></button>
                    </div>
                </div>
                <div className={styles.basic}>
                    <img src={revolution} alt="revolution" />
                    <h1>Revolution skin-care Hydration boost night cream</h1>
                    <div className={styles.price}>€13.50</div>
                    <div className={styles.buttons}>
                        <button><img src={button} alt="button1" /></button>
                        <button><img src={green} className={styles.green} alt="green" /><img src={heart} className={styles.vector} alt="vector" /></button>
                    </div>
                </div>
                <div className={styles.circles}>
                    <div className={styles.black}></div>
                    <div className={styles.grey}></div>
                    <div className={styles.grey}></div>
                </div>
                <img src={arrowRight} className={styles.arrowRight} alt="right" />
            </div>
        </div>
    );
}

export default Section3;