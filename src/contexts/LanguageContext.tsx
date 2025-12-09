"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الاتحاد',
    'nav.founders': 'المؤسسون',
    'nav.council': 'المجلس التنفيذي',
    'nav.committees': 'اللجان',
    'nav.accreditation': 'الاعتماد المهني',
    'nav.membership': 'العضوية',
    'nav.national_month': 'برنامج الشهر الوطني',
    'nav.events': 'الفعاليات',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'الاتحاد الدولي للمدربين والمستشارين ومهندسي التعليم والتكوين',
    'hero.subtitle': 'منارة التميز في التدريب والتعليم العالمي',
    'hero.cta.join': 'انضم إلينا',
    'hero.cta.learn': 'اعرف المزيد',
    
    // About Section
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون المرجع الدولي الرائد في تطوير معايير التدريب والاستشارات التعليمية، ونساهم في بناء جيل من المدربين والمستشارين المحترفين القادرين على إحداث تأثير إيجابي في مجتمعاتهم.',
    'about.mission.title': 'رسالتنا',
    'about.mission.text': 'تعزيز الجودة والاحترافية في مجال التدريب والاستشارات التعليمية من خلال وضع معايير دولية، وتقديم برامج اعتماد مهني، وتوفير منصة للتعاون الدولي وتبادل الخبرات.',
    
    // Founders
    'founders.title': 'الأعضاء المؤسسون',
    'founders.subtitle': 'قادة التميز في التعليم والتدريب العالمي',
    'founders.founder': 'المؤسس الرئيسي',
    'founders.cofounder': 'عضو مؤسس',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.hq': 'المقر الرئيسي',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.follow': 'تابعنا',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.founders': 'Founders',
    'nav.council': 'Executive Council',
    'nav.committees': 'Committees',
    'nav.accreditation': 'Accreditation',
    'nav.membership': 'Membership',
    'nav.national_month': 'National Month Program',
    'nav.events': 'Events',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'International Trainers and Consultants Educational Union',
    'hero.subtitle': 'A Beacon of Excellence in Global Training and Education',
    'hero.cta.join': 'Join Us',
    'hero.cta.learn': 'Learn More',
    
    // About Section
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the leading international reference in developing training and educational consulting standards, contributing to building a generation of professional trainers and consultants capable of making a positive impact in their communities.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To promote quality and professionalism in training and educational consulting through establishing international standards, providing professional accreditation programs, and offering a platform for international collaboration and knowledge exchange.',
    
    // Founders
    'founders.title': 'Founding Members',
    'founders.subtitle': 'Leaders of Excellence in Global Education and Training',
    'founders.founder': 'Founder & President',
    'founders.cofounder': 'Co-Founder',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hq': 'Headquarters',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.follow': 'Follow Us',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
