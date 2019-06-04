// import NextI18Next from 'next-i18next';
const NextI18Next = require('next-i18next/dist/commonjs');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['nl'],
  localeSubpaths: 'all'
});

module.exports.default = NextI18NextInstance;
module.exports.appWithTranslation = NextI18NextInstance.appWithTranslation;
module.exports.withNamespaces = NextI18NextInstance.withNamespaces;
module.exports.Link = NextI18NextInstance.Link;
module.exports.i18n = NextI18NextInstance.i18n;
