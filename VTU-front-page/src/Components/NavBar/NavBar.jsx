// src/components/NavBar.jsx
import Logo from './../../assets/LogoEdited.png'
import styles from './NavBar.module.css'
import LanguageIcon from './../../../public/LanguageIcon.svg'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal.jsx";
import AuthenticationModal from "../AuthenticationModal/AuthenticationModal.jsx";
import i18n from '../LanguageChange/LanguageChange.js';

function NavBar() {
    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }

    return (
        <>
            <h1 className={styles.heading}>{t('Великотърновски университет "Св. св. Кирил и Методий"')}</h1>
        <nav>
            <ul>
                <li><a href={"#"}>
                    <img className={styles.logo} alt="logo image" src={Logo} /></a></li>

                <li><a href={"#"} className={styles.link}>{t('ВТУ')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Центрове')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Прием')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Студенти')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Научна дейност')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Международна дейност')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Кариери и завършили')}</a></li>
                <li><a href={"#"} className={styles.link}>{t('Контакти')}</a></li>
                <li className={styles.link}  onClick={toggleLanguage}><img src={LanguageIcon} alt={"Language icon"} /></li>
                <li className={styles.link}> <AuthenticationModal/></li>
                <li className={styles.link}> <SearchModal/></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;
