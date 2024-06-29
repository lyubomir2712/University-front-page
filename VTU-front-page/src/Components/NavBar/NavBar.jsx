// src/components/NavBar.jsx
import Logo from './../../assets/LogoEdited.png'
import styles from './NavBar.module.css'
import LanguageIcon from './../../../public/LanguageIcon.svg'
import SearchIcon from './../../../public/SearchIcon.svg'
import { useTranslation } from "react-i18next";
import { useState } from "react";

import {Modal} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchModal from "../SearchModal/SearchModal.jsx";

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
            <h1 className={styles.heading}>Великотърновски университет &quot;Св. св. Кирил и Методий&quot;</h1>
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
                <li><SearchModal/></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;
