import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">
          {t('contact')}
        </h2>
        <div className="max-w-xl mx-auto grid gap-6">
          <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
            <Mail className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg text-foreground">{t('contactEmail')}</p>
              <a href="mailto:events@france-japan-business.com" className="text-muted-foreground hover:text-accent transition-colors">
                events@france-japan-business.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
            <Phone className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg text-foreground">{t('contactPhone')}</p>
              <a href="tel:+33123456789" className="text-muted-foreground hover:text-accent transition-colors">
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
