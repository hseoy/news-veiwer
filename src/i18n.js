import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    // English
    translation: {
      all: 'ALL',
      business: 'BUSINESS',
      entertainment: 'ENTERTAINMENT',
      health: 'HEALTH',
      science: 'SCIENCE',
      sports: 'SPORTS',
      technology: 'TECH',
    },
  },
  ko: {
    // Korean
    translation: {
      all: '전체',
      business: '비즈니스',
      entertainment: '엔터테인먼트',
      health: '건강',
      science: '과학',
      sports: '스포츠',
      technology: '기술',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
});

export default i18n;
