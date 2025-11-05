import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🇫🇷</span>
            <span className="text-2xl font-bold text-primary">{t('siteTitle')}</span>
            <span className="text-3xl">🇯🇵</span>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
          className="flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          {language === 'en' ? '日本語' : 'English'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
