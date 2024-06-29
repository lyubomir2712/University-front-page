import styles from './UniversityAdditionalInfo.module.css';

function UniversityAdditionalInfo() {
    return (
        <>
            <div className={styles.universityInfoContainer}>

                <table>
                    <thead>
                    <tr>
                        <th>За Университета</th>
                        <th>Информационни Ресурси</th>
                        <th>Студенти</th>
                        <th>Преподаватели</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">Ръководство</a></li>
                                <li><a href="#">Акредитации и сертификати</a></li>
                                <li><a href="#">Програма Еразъм+</a></li>
                                <li><a href="#">Политики и декларации</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">Електронни услуги</a></li>
                                <li><a href="#">Електронно обучение</a></li>
                                <li><a href="#">Университетска библиотека</a></li>
                                <li><a href="#">Кариерен център</a></li>
                                <li><a href="#">Инструкция за достъп</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">Студентско кредитиране</a></li>
                                <li><a href="#">Студентски стипендии</a></li>
                                <li><a href="#">Студентски живот</a></li>
                                <li><a href="#">Учебен отдел</a></li>
                                <li><a href="#">Е-студент</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul className={styles.universityInfoList}>
                                <li><a href="#">Научни издания</a></li>
                                <li><a href="#">Проекти</a></li>
                                <li><a href="#">Научна е-библиотека</a></li>
                                <li><a href="#">Конкурси</a></li>
                                <li><a href="#">Е-преподавател</a></li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>


                {/*<ul className={styles.universityInfoList}>*/}
                {/*    <h4>За Университета</h4>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Ръководство</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Акре дитации и сертификати</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Програма Еразъм+</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Политики и декларации</li>*/}
                {/*    </a>*/}
                {/*</ul>*/}
                {/*<ul className={styles.universityInfoList}>*/}
                {/*    <h4>Информационни Ресурси</h4>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Електронни услиги</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Електронно обучение</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Университетска библиотека</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Кариерен център</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Инструкция за достъп</li>*/}
                {/*    </a>*/}
                {/*</ul>*/}
                {/*<ul className={styles.universityInfoList}>*/}
                {/*    <h4>Студенти</h4>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Студентско кредитиране</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Студетски стипендии</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Студентски живот</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Учебен отдел</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Е-студент</li>*/}
                {/*    </a>*/}
                {/*</ul>*/}
                {/*<ul className={styles.universityInfoList}>*/}
                {/*    <h4>Преподаватели</h4>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Научни издания</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Проекти</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Научна е-библиотека</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Конкурси</li>*/}
                {/*    </a>*/}
                {/*    <a href={"#"}>*/}
                {/*        <li>Е-преподавател</li>*/}
                {/*    </a>*/}
                {/*</ul>*/}
            </div>
        </>
    )

}

export default UniversityAdditionalInfo