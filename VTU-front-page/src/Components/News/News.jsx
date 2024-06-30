import styles from './News.module.css';

import NewsImage1 from './../../assets/NewsImage1.jpeg'
import NewsImage2 from './../../assets/NewsImage2.jpeg'
import NewsImage3 from './../../assets/NewsImage3.jpeg'
import NewsImage4 from './../../assets/NewsImage4.png'
import {useTranslation} from "react-i18next";
import {useState} from "react";
import i18n from '../LanguageChange/LanguageChange.js';

function News() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }



    return (

        <div className={styles.newsSection}>
            <h2>{t("Новини")}</h2>
            <div className={styles.newsContainer}>
                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage1} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>{t("Китайска делегация посети Великотърновския университет")}</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage2} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>{t("Международен летен семинар по български език и култура")}</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage3} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>{t("ПРИЕМ МАГИСТЪР 2024 г.")}</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage4} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>{t("Придобиване на ПКС във Великотърновския университет")}</p>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default News;