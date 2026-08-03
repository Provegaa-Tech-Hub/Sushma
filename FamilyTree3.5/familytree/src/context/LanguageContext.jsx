import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    appTitle: "Family Tree",
    addMember: "Add Member",
    edit: "Edit",
    delete: "Delete",
    addChild: "Add Child",
    addSpouse: "Add Spouse",
    properties: "Properties",
    uploadPhoto: "Upload Photo",
    save: "Save",
    cancel: "Cancel",
    search: "Search",
    noMembers: "No Family Members",
  },

  hi: {
    appTitle: "परिवार वृक्ष",
    addMember: "सदस्य जोड़ें",
    edit: "संपादित करें",
    delete: "हटाएं",
    addChild: "बच्चा जोड़ें",
    addSpouse: "जीवनसाथी जोड़ें",
    properties: "गुण",
    uploadPhoto: "फोटो अपलोड करें",
    save: "सहेजें",
    cancel: "रद्द करें",
    search: "खोजें",
    noMembers: "कोई सदस्य नहीं",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}