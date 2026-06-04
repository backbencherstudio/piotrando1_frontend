// types/translations.d.ts
import en from '../public/locales/en/common.json';

type Translations = typeof en;

declare module '*.json' {
  const value: Translations;
  export default value;
}