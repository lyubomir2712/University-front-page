import styles from './UniversityAdditionalInfo.module.css';

function UniversityAdditionalInfo() {
    return (
        <>
            <div className={styles.universityInfoContainer}>

                <ul className={styles.universityInfoList}>
                    <h4>За Университета</h4>
                    <a href={"#"}><li>Ръководство</li></a>
                    <a href={"#"}><li>Акредитации и сертификати</li></a>
                    <a href={"#"}><li>Програма Еразъм+</li></a>
                    <a href={"#"}><li>Политики и декларации</li></a>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Информационни Ресурси</h4>
                    <a href={"#"}><li>Електронни услиги</li></a>
                    <a href={"#"}><li>Електронно обучение</li></a>
                    <a href={"#"}><li>Университетска библиотека</li></a>
                    <a href={"#"}><li>Кариерен център</li></a>
                    <a href={"#"}><li>Инструкция за достъп</li></a>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Студенти</h4>
                    <a href={"#"}><li>Студентско кредитиране</li></a>
                    <a href={"#"}><li>Студетски стипендии</li></a>
                    <a href={"#"}><li>Студентски живот</li></a>
                    <a href={"#"}><li>Учебен отдел</li></a>
                    <a href={"#"}><li>Е-студент</li></a>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Преподаватели</h4>
                    <a href={"#"}><li>Научни издания</li></a>
                    <a href={"#"}><li>Проекти</li></a>
                    <a href={"#"}><li>Научна е-библиотека</li></a>
                    <a href={"#"}><li>Конкурси</li></a>
                    <a href={"#"}><li>Е-преподавател</li></a>
                </ul>
            </div>
        </>
    )

}

export default UniversityAdditionalInfo