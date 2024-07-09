import styles from './Footer.module.css'
import FacebookLogo from '../../../public/FacebookIcon.svg'
import InstagramLogo from '../../../public/InstagramIcon.svg'
import XLogo from '../../../public/XIcon.svg'
import YoutubeLogo from '../../../public/YoutubeIcon.svg'
import LinkedIn from '../../../public/LinkedInIcon.svg'



import BankLogo from '../../../public/BankIcon.svg'
import TelephoneLogo from '../../../public/TelephoneIcon.svg'
import EmailLogo from '../../../public/EmailIcon.svg'
import MapLogo from '../../../public/MapIcon.svg'
import i18n from '../LanguageChange/LanguageChange.js';
import {useTranslation} from "react-i18next";
import {useState} from "react";


function Footer() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }


    return (
        <div className={styles.footer}>
            <div className={styles.upperFooter}>
                <ul className={styles.upperFooterList}>
                    <li><a href={"#"}><img src={FacebookLogo} alt={"Facebook logo"}></img> Facebook</a></li>
                    <li><a href={"#"}><img src={XLogo} alt={"X logo"}></img> X</a></li>
                    <li><a href={"#"}><img src={InstagramLogo} alt={"Instagram logo"}></img> Instagram</a></li>
                    <li><a href={"#"}><img src={LinkedIn} alt={"LinkedIn logo"}></img> LinkedIn</a></li>
                    <li><a href={"#"}><img src={YoutubeLogo} alt={"Youtube logo"}></img> Youtube</a></li>
                </ul>
            </div>


            <div className={styles.lowerFooter}>
                <div className={styles.Container}>
                    <table className={styles.Contacts}>
                        <tr>
                            <td><img src={BankLogo}
                                     alt={"Bank logo"}/> {t("Ул. „Теодосий Търновски“ №2, Велико Търново 5003")}
                            </td>
                        </tr>
                        <tr>
                            <td><img src={TelephoneLogo} alt={"Telephone logo"}/> О62 / 618 206</td>
                        </tr>
                        <tr>
                            <td><img src={EmailLogo} alt={"Email logo"}/> rector@live.uni-vt.bg</td>
                        </tr>
                        <tr>
                            <td><img src={MapLogo} alt={"Map logo"}/> {t("Карта")}</td>
                        </tr>
                    </table>

                    <ul>
                        <li><a href={"#"} className={styles.link}>{t("ВТУ")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Центрове")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Прием")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Студенти")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Научна дейност")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Международна дейност")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Кариери и завършили")}</a></li>
                        <li><a href={"#"} className={styles.link}>{t("Контакти")}</a></li>
                    </ul>
                </div>
                <p className={styles.AdditionsText}>© 2024 {t("Великотърновски университет Св. св. Кирил и Методий")};
                    | &nbsp; <a href={"#"}> {t("Всички права запазени Поверителност и Бисквитки")}</a> &nbsp; | &nbsp;
                    <a href={"#"}>{t("Карта на сайта.")}</a></p>
            </div>

        </div>
    )
}

export default Footer