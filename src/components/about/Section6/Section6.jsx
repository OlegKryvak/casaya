import button from '../images/Section6/Button.png';
import photo1 from '../images/Section6/Photo1.png';
import photo2 from '../images/Section6/Photo2.png';
import photo3 from '../images/Section6/Photo3.png';
import photo4 from '../images/Section6/Photo4.png';
import button2 from '../images/Section6/Button2.png';
import back from '../images/Section6/back.png';
import styles from './Section6.module.css';

const Section6 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <div>
                    <img src={photo1} alt="photo1"/>
                    <img src={photo2} alt="photo2"/>
                </div>
                <div>
                    <img src={photo3} alt="photo3"/>
                    <img src={photo4} alt="photo4"/>
                </div>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.smallHeadline}>
                    Blijf op de hoogte
                </div>
                <div className={styles.headline}>
                    Volg ons via onze sociale kanalen
                </div>
                <div className={styles.text}>
                    Welkom bij Casaya Spa, op slechts 10 minuten van Antwerpen. Gun u zelf de gelegenheid om te ervaren
                    wat onze passie en behandelingen voor u kunnen betekenen! In een omgeving die luxe, rust en schoonheid
                    uitstraalt!<br /> We zijn er voor u met o.a persoonlijke verzorgingen,Spa Arrangementen,Personal coaching,
                    privé verhuur sauna, de hammam en het binnenzwembad. Wij hopen u snel te begroeten in onze prachtige spa!
                </div>
                <button className={styles.button}><img src={button} alt="button"/></button>
            </div>
            <div className={styles.inv}>
                <img src={back} className={styles.back} alt="back"/>
                <img src={button2} className={styles.button2} alt="button2"/>
            </div>
        </div>
    );
}

export default Section6;