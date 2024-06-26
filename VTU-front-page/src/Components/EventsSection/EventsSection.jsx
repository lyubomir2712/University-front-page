import React, {useState} from 'react';
import { styled } from '@mui/system';
import CalendarIcon from './../../../public/CalendarIcon.svg'
import ClockIcon from './../../../public/ClockIcon.svg'
import PinIcon from './../../../public/PinIcon.svg'
import i18n from '../LanguageChange/LanguageChange.js';
import {useTranslation} from "react-i18next";

const EventsSectionContainer = styled('div')({
    backgroundColor: 'white',
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Heading = styled('h2')({
    fontSize: '24px',
    marginBottom: '20px',
    // paddingLeft: '20px',
});

const Event = styled('a')({
    display: 'flex',
    marginBottom: '20px',
    padding: '20px',
    borderBottom: '1px solid #ddd',
    '&:last-child': {
        borderBottom: 'none',
    },
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        backgroundColor: '#f9f9f9',},

});

const EventDate = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px',
    marginRight: '20px',
    borderRadius: '4px',
});

const EventDateSpan = styled('span')({
    display: 'block',
    fontSize: '16px',
    textAlign: 'center',
});

const EventDateSpanBold = styled(EventDateSpan)({
    fontSize: '24px',
    fontWeight: 'bold',
});

const EventDetails = styled('div')({
    h3: {
        margin: '0',
        fontSize: '20px',
        color: '#333',
    },
    p: {
        margin: '5px 0',
        color: '#666',
    },
});

const ViewAllBtn = styled('button')({
    display: 'block',
    margin: '0 auto',
    padding: '10px 20px',
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: 'purple',
        filter: "brightness(0.8)",
    },
});

function EventsSection() {
    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }


    return (
        <EventsSectionContainer>
            <Heading>{t("Събития")}</Heading>
            <Event href = "#">
                <EventDate>
                    <div>
                        <EventDateSpan>{t("НАЧАЛО")}</EventDateSpan>
                        <EventDateSpanBold>25</EventDateSpanBold>
                        <EventDateSpan>{t("ЮНИ")}<hr/></EventDateSpan>
                    </div>
                    <div>
                        <EventDateSpan>{t("КРАЙ")}</EventDateSpan>
                        <EventDateSpanBold>28</EventDateSpanBold>
                        <EventDateSpan>{t("ЮНИ")}</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>{t("Академия по предприемачество в земеделието")}</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> {t("25 ЮНИ 2024 - 28 ЮНИ 2024")} | <img
                        src={PinIcon} alt={"pin icon"}/> {t('ВЕЛИКОТЪРНОВСКИ УНИВЕРСИТЕТ -  "СВ. СВ. КИРИЛ И МЕТОДИЙ"')}</p>
                    <p>{t('Първото издание ще се проведе от 25 до 28 юни 2024 година - град Велико Търново във Великотърноски университет - "Св. св. Кирил и Методий"')}</p>
                </EventDetails>
            </Event>
            <Event href={"#"}>
                <EventDate>
                    <div>
                        <EventDateSpanBold>02</EventDateSpanBold>
                        <EventDateSpan>{t("ЮЛИ")}</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>{t("Публична защита на дисертационен труд")}</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 02 {t("ЮЛИ")} 2024 | <img src={ClockIcon}
                                                                                          alt={"clock icon"}/> 13:00
                        - 15:00 | <img src={PinIcon} alt={"calendar icon"}/> {t("ЗАЛА")} 320</p>
                </EventDetails>
            </Event>
            <Event href={"#"}>
                <EventDate>
                    <div>
                        <EventDateSpanBold>02</EventDateSpanBold>
                        <EventDateSpan>{t("ЮЛИ")}</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>{t("Публична защита на дисертационен труд")}</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 02 {t("ЮЛИ")} 2024 | <img src={ClockIcon}
                                                                                          alt={"clock icon"}/> 14:00
                        - 16:00 | <img src={PinIcon} alt={"pin icon"}/> {t("ЗАЛА")} 205</p>
                </EventDetails>
            </Event>
            <Event href={"#"}>
                <EventDate>
                    <div>
                        <EventDateSpanBold>18</EventDateSpanBold>
                        <EventDateSpan>{t("ОКТ")}</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>{t("Конференция на тема Правото и бизнесът в съвременното общество")}</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 18 {t("ОКТ")} 2024 | <img src={CalendarIcon}
                                                                                          alt={"clock icon"}/> 09:30
                        - 13:00 | <img src={PinIcon} alt={"pin icon"}/> {t("ЗАЛА")} 1</p>
                </EventDetails>
            </Event>
            <ViewAllBtn>{t("Виж всички")}</ViewAllBtn>
        </EventsSectionContainer>
    );
}

export default EventsSection;
