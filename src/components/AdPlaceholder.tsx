import { useLanguage } from "@/contexts/LanguageContext";

const AdPlaceholder = () => {
  const { t } = useLanguage();
  
  return (
    <aside className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-card">
            <p className="text-muted-foreground text-sm font-medium">
              {t('adSpace')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {/* Placeholder for future ad code or affiliate links */}
              728 x 90
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdPlaceholder;
