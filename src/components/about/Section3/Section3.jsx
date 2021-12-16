import green from '../images/Section3/green.png';
import styles from './Section3.module.css';

const Section3 = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.textBlock}>
                <img src={green} alt="green"/>
                <div className={styles.citates}>
                    “The future belongs to those who believe in the beauty of their dreams”.
                </div>
                <div className={styles.line}></div>
                <div className={styles.author}>Eleanor Roosevelt</div>
                <div className={styles.president}>Voormalig presidentsvrouw van de Verenigde Staten</div>
            </div>
        </div>
    );
}

export default Section3;