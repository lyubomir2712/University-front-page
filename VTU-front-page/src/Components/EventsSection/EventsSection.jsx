import React from 'react';
import { styled } from '@mui/system';
import CalendarIcon from './../../../public/CalendarIcon.svg'
import ClockIcon from './../../../public/ClockIcon.svg'
import PinIcon from './../../../public/PinIcon.svg'

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
});

const Event = styled('div')({
    display: 'flex',
    marginBottom: '20px',
    padding: '20px',
    borderBottom: '1px solid #ddd',
    '&:last-child': {
        borderBottom: 'none',
    },
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
    return (
        <EventsSectionContainer>
            <Heading>Събития</Heading>
            <Event>
                <EventDate>
                    <div>
                        <EventDateSpan>НАЧАЛО</EventDateSpan>
                        <EventDateSpanBold>25</EventDateSpanBold>
                        <EventDateSpan>ЮНИ <hr/></EventDateSpan>
                    </div>
                    <div>
                        <EventDateSpan>КРАЙ</EventDateSpan>
                        <EventDateSpanBold>28</EventDateSpanBold>
                        <EventDateSpan>ЮНИ</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>Академия по предприемачество в земеделието</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 25 ЮНИ 2024 - 28 ЮНИ 2024 | <img
                        src={PinIcon} alt={"pin icon"}/> ВЕЛИКОТЪРНОВСКИ
                        УНИВЕРСИТЕТ - &quot; СВ. СВ. КИРИЛ И МЕТОДИЙ &quot;</p>
                    <p>Първото издание ще се проведе от 25 до 28 юни 2024 година - град Велико Търново във Великотърноски университет - &quot; Св. св. Кирил и Методий &quot;</p>
                </EventDetails>
            </Event>
            <Event>
                <EventDate>
                    <div>
                        <EventDateSpanBold>02</EventDateSpanBold>
                        <EventDateSpan>ЮЛИ</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>Публична защита на дисертационен труд</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 02 ЮЛИ 2024 | <img src={ClockIcon}
                                                                                          alt={"clock icon"}/> 13:00
                        - 15:00 | <img src={PinIcon} alt={"calendar icon"}/> ЗАЛА 320</p>
                </EventDetails>
            </Event>
            <Event>
                <EventDate>
                    <div>
                        <EventDateSpanBold>02</EventDateSpanBold>
                        <EventDateSpan>ЮЛИ</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>Публична защита на дисертационен труд</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 02 ЮЛИ 2024 | <img src={ClockIcon}
                                                                                          alt={"clock icon"}/> 14:00
                        - 16:00 | <img src={PinIcon} alt={"pin icon"}/> ЗАЛА 205</p>
                </EventDetails>
            </Event>
            <Event>
                <EventDate>
                    <div>
                        <EventDateSpanBold>18</EventDateSpanBold>
                        <EventDateSpan>ОКТ</EventDateSpan>
                    </div>
                </EventDate>
                <EventDetails>
                    <h3>Конференция на тема Правото и бизнесът в съвременното общество</h3>
                    <p><img src={CalendarIcon} alt={"calendar icon"}/> 18 ОКТ 2024 | <img src={CalendarIcon}
                                                                                          alt={"clock icon"}/> 09:30
                        - 13:00 | <img src={PinIcon} alt={"pin icon"}/> ЗАЛА 1</p>
                </EventDetails>
            </Event>
            <ViewAllBtn>Виж всички</ViewAllBtn>
        </EventsSectionContainer>
    );
}

export default EventsSection;
