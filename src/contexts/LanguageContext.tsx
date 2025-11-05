import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    siteTitle: "France–Japan Business Events",
    siteDescription: "Connecting French and Japanese business and cultural communities through exclusive networking events and professional opportunities.",
    upcomingEvents: "Upcoming Events",
    newsletter: "Stay Updated",
    newsletterDescription: "Subscribe to receive updates about upcoming events and opportunities.",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    contact: "Contact Us",
    contactEmail: "Email",
    contactPhone: "Phone",
    copyright: "© 2025 France–Japan Business Events. All rights reserved.",
    register: "Event website",
    eventDate: "Date",
    eventLocation: "Location",
    adSpace: "Advertisement Space",
    filterAll: "All",
    filterFrance: "France",
    filterJapan: "Japan",
    filterBusiness: "Business",
    filterCultural: "Cultural",
    business: "Business",
    cultural: "Cultural",
  },
  ja: {
    siteTitle: "日仏ビジネスイベント",
    siteDescription: "フランスと日本のビジネスおよび文化コミュニティを結ぶ、限定ネットワーキングイベントとプロフェッショナルな機会を提供します。",
    upcomingEvents: "今後のイベント",
    newsletter: "最新情報を受け取る",
    newsletterDescription: "今後のイベントや機会に関する最新情報を受け取るには、ご登録ください。",
    emailPlaceholder: "メールアドレスを入力",
    subscribe: "登録する",
    contact: "お問い合わせ",
    contactEmail: "メール",
    contactPhone: "電話",
    copyright: "© 2025 日仏ビジネスイベント All rights reserved.",
    register: "イベントサイト",
    eventDate: "日付",
    eventLocation: "場所",
    adSpace: "広告スペース",
    filterAll: "すべて",
    filterFrance: "フランス",
    filterJapan: "日本",
    filterBusiness: "ビジネス",
    filterCultural: "文化",
    business: "ビジネス",
    cultural: "文化",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
