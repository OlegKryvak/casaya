import photo from '../images/Section2/photo.png';
import styles from './Section2.module.css';

const Section2 = () => {
    return (
        <div >
            <div><span className={styles.home}>Home  {'>'} Over ons</span></div>
            <div className={styles.container}>
                <div className={styles.photoHead}>
                    <div className={styles.headline}>
                        Ons verhaal
                    </div>
                    <img src={photo} alt="photo1"/>
                </div>
                <div className={styles.text}>
                    Ons hart en ziel ligt bij iedereen die komt beleven en herbeleven. Alle medewerkers worden persoonlijk begeleid
                    met de nieuwste ontwikkelingen in gezondheid en high touch. <br /><br />Onze dagelijkse focus ligt in het schenken
                    van kwaliteit, hygiëne en persoonlijke aandacht in een sfeervolle en rustgevende omgeving.
                    Een totaal beleving waar de gezondheid van de mens, met de “know-how” van de wetenschap uit de natuur. <br /><br />
                    De kracht van bloemen & planten.
                </div>
            </div>
        </div>
    );
}

export default Section2;