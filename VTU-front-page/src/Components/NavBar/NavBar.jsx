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

                <li><a href={"#"} className={styles.link}>{t('ВТУ')}</a>
                    <ul className={styles.dropdown}>
                        <li><a className={styles.test} href={"#"}>{t("Статут, мисия, академичен профил")}</a></li>
                        <li><a href={"#"}>{t("Акредитация и сертификати")}</a></li>
                        <li><a href={"#"}>{t("Ръководство на ВТУ")}</a></li>
                        <li><a href={"#"}>{t("Настоятелство на ВТУ")}</a></li>
                        <li><a href={"#"}>{t("Организационна структура")}</a></li>
                        <li><a href={"#"}>{t("Правилници и декларации")}</a></li>
                        <li><a href={"#"}>{t("Материална база")}</a></li>
                        <li><a href={"#"}>{t("Управление на качеството")}</a></li>
                        <li><a href={"#"}>{t("Почетни доктори")}</a></li>
                        <li><a href={"#"}>{t("Почетна книга")}</a></li>
                        <li><a href={"#"}>{t("Университетска библиотека")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Центрове')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Център по юридически науки")}</a></li>
                        <li><a href={"#"}>{t("Център по икономически и управлески науки")}</a></li>
                        <li><a href={"#"}>{t("Център по информатика и технически науки")}</a></li>
                        <li><a href={"#"}>{t("Център по хуманитарни науки")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Прием')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Бакалавърски програми")}</a></li>
                        <li><a href={"#"}>{t("Магистърски програми")}</a></li>
                        <li><a href={"#"}>{t("Докторски програми")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Студенти')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Електронни услуги")}</a></li>
                        <li><a href={"#"}>{t("Студентски такси")}</a></li>
                        <li><a href={"#"}>{t("Студентско кредитиране")}</a></li>
                        <li><a href={"#"}>{t("Студентски практики")}</a></li>
                        <li><a href={"#"}>{t("Студентски стипендии")}</a></li>
                        <li><a href={"#"}>{t("Конференция за студентско научно творчество")}</a></li>
                        <li><a href={"#"}>{t("Студентски съвет")}</a></li>
                        <li><a href={"#"}>{t("Студентски живот")}</a></li>
                        <li><a href={"#"}>{t("Съобщения за студентите")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Научна дейност')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Проекти")}</a></li>
                        <li><a href={"#"}>{t("Научни издания")}</a></li>
                        <li><a href={"#"}>{t("Научни прояви")}</a></li>
                        <li><a href={"#"}>{t("Научна е-библиотека")}</a></li>
                        <li><a href={"#"}>{t("Конкурси по ЗРАСРБ")}</a></li>
                        <li><a href={"#"}>{t("Съобщения за преподавателите")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Международна дейност')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Международни договори за сътрудничество")}</a></li>
                        <li><a href={"#"}>{t("Договори по програма Еразъм+")}</a></li>
                        <li><a href={"#"}>{t("Програма \"ЕРАЗЪМ+\"")}</a></li>
                        <li><a href={"#"}>{t("Катедра на ЮНЕСКО \"Права на човека и култура на мира\"")}</a></li>
                        <li><a href={"#"}>{t("Партньори по международни проекти")}</a></li>
                        <li><a href={"#"}>{t("Правилници и документи")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Кариери и завършили')}</a>
                    <ul className={styles.dropdown}>
                        <li><a href={"#"}>{t("Студентски център за кариера и развитие")}</a></li>
                        <li><a href={"#"}>{t("Реализация на завършилите студенти")}</a></li>
                    </ul>
                </li>
                <li><a href={"#"} className={styles.link}>{t('Контакти')}</a></li>
                <li className={styles.link} onClick={toggleLanguage}><img src={LanguageIcon} alt={"Language icon"}/>
                </li>
                <li className={styles.link}><AuthenticationModal/></li>
                <li className={styles.link}><SearchModal/></li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;
