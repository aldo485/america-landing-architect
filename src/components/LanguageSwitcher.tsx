import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Language, switchLanguage } from '@/lib/content';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  className = ''
}) => {
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    onLanguageChange(newLanguage);
    setIsOpen(false);
    
    // Save to localStorage
    localStorage.setItem('preferred-language', newLanguage);
    
    // Update document language
    document.documentElement.lang = newLanguage;
  };

  useEffect(() => {
    // Load preferred language from localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && savedLanguage !== currentLanguage) {
      onLanguageChange(savedLanguage);
    }
  }, [currentLanguage, onLanguageChange]);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇲🇽' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  if (isMobile) {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          <span>{currentLang?.flag}</span>
          <span className="hidden sm:inline">{currentLang?.name}</span>
        </Button>
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as Language)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 ${
                  lang.code === currentLanguage ? 'bg-primary/10 text-primary' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={lang.code === currentLanguage ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(lang.code as Language)}
          className="flex items-center gap-2"
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </Button>
      ))}
    </div>
  );
}; 