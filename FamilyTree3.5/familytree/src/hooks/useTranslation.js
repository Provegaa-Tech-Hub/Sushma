import { useLanguage } from "../context/LanguageContext";

export default function useTranslation() {
  const { language, setLanguage, t, translations } = useLanguage();

  // Translate text
  const translate = (key) => {
    return t(key);
  };

  // Check current language
  const isEnglish = language === "en";
  const isHindi = language === "hi";

  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Get available languages
  const availableLanguages = Object.keys(translations);

  return {
    language,
    translate,
    t: translate,

    changeLanguage,
    setLanguage,

    isEnglish,
    isHindi,

    translations,
    availableLanguages,
  };
}
