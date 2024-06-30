import styles from './UniversityAdditionalInfo.module.css';
import i18n from '../LanguageChange/LanguageChange.js';
import {useTranslation} from "react-i18next";
import {useState} from "react";

function UniversityAdditionalInfo() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }


    return (
        <>
            <div className={styles.universityInfoContainer}>

                <table>
                    <thead>
                    <tr>
                        <th>{t("За Университета")}</th>
                        <th>{t("Информационни Ресурси")}</th>
                        <th>{t("Студенти")}</th>
                        <th>{t("Преподаватели")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">{t("Ръководство")}</a></li>
                                <li><a href="#">{t("Акредитации и сертификати")}</a></li>
                                <li><a href="#">{t("Програма Еразъм+")}</a></li>
                                <li><a href="#">{t("Политики и декларации")}</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">{t("Електронни услуги")}</a></li>
                                <li><a href="#">{t("Електронно обучение")}</a></li>
                                <li><a href="#">{t("Университетска библиотека")}</a></li>
                                <li><a href="#">{t("Кариерен център")}</a></li>
                                <li><a href="#">{t("Инструкция за достъп")}</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">{t("Студентско кредитиране")}</a></li>
                                <li><a href="#">{t("Студентски стипендии")}</a></li>
                                <li><a href="#">{t("Студентски живот")}</a></li>
                                <li><a href="#">{t("Учебен отдел")}</a></li>
                                <li><a href="#">{t("Е-студент")}</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">{t("Научни издания")}</a></li>
                                <li><a href="#">{t("Проекти")}</a></li>
                                <li><a href="#">{t("Научна е-библиотека")}</a></li>
                                <li><a href="#">{t("Конкурси")}</a></li>
                                <li><a href="#">{t("Е-преподавател")}</a></li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default UniversityAdditionalInfo