import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm opacity-80">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
