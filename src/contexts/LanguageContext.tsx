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
    siteDescription: "Connecting French and Japanese business communities through exclusive networking events and professional opportunities.",
    upcomingEvents: "Upcoming Events",
    newsletter: "Stay Updated",
    newsletterDescription: "Subscribe to receive updates about upcoming events and opportunities.",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    contact: "Contact Us",
    contactEmail: "Email",
    contactPhone: "Phone",
    copyright: "© 2025 France–Japan Business Events. All rights reserved.",
    register: "Register",
    eventDate: "Date",
    eventLocation: "Location",
    adSpace: "Advertisement Space",
  },
  ja: {
    siteTitle: "日仏ビジネスイベント",
    siteDescription: "フランスと日本のビジネスコミュニティを結ぶ、限定ネットワーキングイベントとプロフェッショナルな機会を提供します。",
    upcomingEvents: "今後のイベント",
    newsletter: "最新情報を受け取る",
    newsletterDescription: "今後のイベントや機会に関する最新情報を受け取るには、ご登録ください。",
    emailPlaceholder: "メールアドレスを入力",
    subscribe: "登録する",
    contact: "お問い合わせ",
    contactEmail: "メール",
    contactPhone: "電話",
    copyright: "© 2025 日仏ビジネスイベント All rights reserved.",
    register: "登録",
    eventDate: "日付",
    eventLocation: "場所",
    adSpace: "広告スペース",
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
