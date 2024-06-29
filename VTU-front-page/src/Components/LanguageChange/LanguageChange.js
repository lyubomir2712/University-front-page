// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "ВТУ": "VTU",
            "Центрове": "Centers",
            "Прием": "Admission",
            "Студенти": "Students",
            "Научна дейност": "Research",
            "Международна дейност": "International Activities",
            "Кариери и завършили": "Careers and Alumni",
            "Контакти": "Contacts",
            'Великотърновски университет "Св. св. Кирил и Методий"':'Veliko Tarnovo University "St. st. Cyril and Methodius"',
        }
    },
    bg: {
        translation: {
            "ВТУ": "ВТУ",
            "Центрове": "Центрове",
            "Прием": "Прием",
            "Студенти": "Студенти",
            "Научна дейност": "Научна дейност",
            "Международна дейност": "Международна дейност",
            "Кариери и завършили": "Кариери и завършили",
            "Контакти": "Контакти",
            'Великотърновски университет "Св. св. Кирил и Методий"': 'Великотърновски университет "Св. св. Кирил и Методий"',
        }
    }
};

i18n
    .use(LanguageDetector) // detects the user language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
