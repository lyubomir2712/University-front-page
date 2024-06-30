import styles from "./DegreeCard.module.css";
import PhDhat from "../../assets/PhD-yellow-hat.png"
import MastersHat from './../../assets/Masters-purple-hat.png'
import BachelorHat from './../../assets/Bachelor-hat-blue.png'
import Laptop from "../../assets/Laptop-logo.png"
import i18n from '../LanguageChange/LanguageChange.js';
import {useTranslation} from "react-i18next";
import {useState} from "react";

function DegreeCard() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }


    return (<div className={styles.cardContainer}>
            <div className={styles.card}>
                <a href={"#"}><img className={styles.cardImage} src={BachelorHat} alt="degree picture"></img></a>
                <hr/>
                <br/>
                <a href={"#"}><h2 className={styles.cardTitle}>Бакалавърски програми</h2></a>
                {/*<p className={styles.cardText}>4 години</p>*/}
            </div>

            <div className={styles.card}>
                <a href={"#"}><img className={styles.cardImage} src={MastersHat} alt="degree picture"></img></a>
                <hr/>
                <br/>
                <a href={"#"}><h2 className={styles.cardTitle}>Магистърски програми</h2></a>
                {/*<p className={styles.cardText}>1.5 години</p>*/}
            </div>

            <div className={styles.card}>
                <a href={"#"}><img className={styles.cardImage} src={PhDhat} alt="degree picture"></img></a>
                <hr/>
                <br/>
                <a href={"#"}><h2 className={styles.cardTitle}>Докторски програми</h2></a>

                {/*<p className={styles.cardText}>3 години</p>*/}
            </div>

            <div className={styles.card}>
                <a href={"#"}><img className={styles.cardImage} src={Laptop} alt="degree picture"></img></a>
                <hr/>
                <br/>
                <a href={"#"}><h2 className={styles.cardTitle}>Дистанционно обучение</h2></a>
                {/*<p className={styles.cardText}>4 години</p>*/}
            </div>
        </div>
    )
}

export default DegreeCard;