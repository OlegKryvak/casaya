import styles from './Section2.module.css';
import yoga from '../images/Section2/yoga.png';
import gift from '../images/Section2/gift.png';
import arrow from '../images/Section2/arrow.png';

const Section2 = () => {
    return (
        <div>
            <div className={styles.home}>Home {'>'} Shop</div>
            <div className={styles.container} >
                <div className={styles.column1}>
                    <div className={styles.headline}>
                        <img src={yoga} alt="yoga"/>
                        <div>Ontdek de meest toepasselijke behandeling
                        </div>
                    </div>
                    <div className={styles.button1}>
                        <span>Ontdek het hier</span> <img src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className={styles.column2}>
                    <div className={styles.headline}>
                        <img src={gift} className={styles.gift} alt="gift"/>
                        <div>
                            Geef een geschenk dat een verschil maakt
                        </div>
                    </div>
                    <div className={styles.button2}>
                        <span>Cadeaubon bestellen</span> <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;