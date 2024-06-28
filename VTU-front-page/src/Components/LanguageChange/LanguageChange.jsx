import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'

import bg from './Languages/bg.js'
import en from './Languages/en.js'

const resourses ={
    en: {
        translation: en,
    },
    bg: {
        translation: bg
    },
};

i18n.use(initReactI18next).init({
    resourses,
    lng: 'bg',
    interpolation: {
        escapeValue: false,
    },
});


export default i18n;