import styles from './Form.module.css';
import letter from '../../../../src/images/Form/Letter.png';
import button from '../../../../src/images/Form/Button.png';




const Form = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.abonnerContainer}>
                <img src={letter} className={styles.letter} alt="letter"/>
                <span className={styles.text}>Abonneer je op onze nieuwsbrief</span>
            </div>
            <div className={styles.form}>
                <input className={styles.input} placeholder="Je e-mailadres"/>
                <button className={styles.button}><img src={button} alt="button1"/></button>
            </div>
        </div>
    );
}

export default Form;