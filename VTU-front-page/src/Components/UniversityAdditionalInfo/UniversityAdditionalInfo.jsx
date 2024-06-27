import styles from './UniversityAdditionalInfo.module.css';

function UniversityAdditionalInfo() {
    return (
        <>
            <div className={styles.universityInfoContainer}>

                <ul className={styles.universityInfoList}>
                    <h4>За Университета</h4>
                    <li>Ръководство</li>
                    <li>Акредитации и сертификати</li>
                    <li>Програма Еразъм+</li>
                    <li>Политики и декларации</li>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Информационни Ресурси</h4>
                    <li>Електронни услиги</li>
                    <li>Електронно обучение</li>
                    <li>Университетска библиотека</li>
                    <li>Кариерен център</li>
                    <li>Инструкция за достъп</li>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Студенти</h4>
                    <li>Студентско кредитиране</li>
                    <li>Студетски стипендии</li>
                    <li>Студентски живот</li>
                    <li>Учебен отдел</li>
                    <li>Съобщения</li>
                </ul>
                <ul className={styles.universityInfoList}>
                    <h4>Преподаватели</h4>
                    <li>Научни издания</li>
                    <li>Проекти</li>
                    <li>Научна е-библиотека</li>
                    <li>Конкурси</li>
                    <li>Съобщения</li>
                </ul>
            </div>
        </>
    )

}

export default UniversityAdditionalInfo