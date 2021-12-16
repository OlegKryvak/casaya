import green from '../images/Section5/green.png';
import styles from './Section5.module.css';

const Section5 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <img src={green} alt="green"/>
                <div className={styles.citates}>
                    “If you want to be happy, do not dwell in the past, do not worry about the future, focus on
                    living fully in the present.”
                </div>
                <div className={styles.author}>
                    Roy T. Bennett
                </div>
                <div className={styles.who}>
                    Inspirerende auteur
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Section5;