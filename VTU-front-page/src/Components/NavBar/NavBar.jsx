// src/components/NavBar.jsx
import Logo from './../../assets/LogoEdited.png'
import styles from './NavBar.module.css'
import LanguageIcon from './../../../public/LanguageIcon.svg'
import SearchIcon from './../../../public/SearchIcon.svg'
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavBar() {
    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }

    return (
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
                <li onClick={toggleLanguage}><img src={LanguageIcon} alt={"Language icon"} /></li>
                <li><a href={"#"} ><img src={SearchIcon} alt={"Search icon"} /></a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
