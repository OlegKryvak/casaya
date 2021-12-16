import photo1 from '../images/Section4/photo1.png';
import photo2 from '../images/Section4/photo2.png';
import styles from './Section4.module.css';

const Section4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.smallHeadline}>
                    Leer ons beter kennen
                </div>
                <div className={styles.headline}>
                    Over de zaakvoerders
                </div>
                <div className={styles.text1}>
                    Katrien is vooruitstrevend, innovatief en actief bezig met nieuwe technieken en ontwikkelingen voor
                    alle behandelingen, waar we de holistische/ cosmetische wereld en het medische aspect dichter bij
                    elkaar brengen. Als 2de generatie en met +20 jaar ervaring als therapeut in de fythotherapie,
                    huidverbetering, beweging & gezondheid geef ik graag mijn passie en kennis door.
                </div>
                <div className={styles.text2}>
                    Gilian zijn persoonlijke en dynamisch karakter zal jou bijstaan met kracht en daad om je fit en gezonder 
                    te voelen. Het One-to-One contact. “Geloof in jezelf keep the spirit. Samen fit & gezond.”
                </div>
            </div>
            <div className={styles.images}>
                <img src={photo1} alt="photo1"/>
                <img src={photo2} alt="photo2"/>
            </div>
        </div>
    );
}

export default Section4;