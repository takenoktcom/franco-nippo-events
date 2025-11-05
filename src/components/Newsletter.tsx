import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter signup
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 text-gold" />
          <h2 className="text-4xl font-bold mb-4">{t('newsletter')}</h2>
          <p className="text-lg mb-8 opacity-90">
            {t('newsletterDescription')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background text-foreground"
            />
            <Button type="submit" variant="secondary" className="sm:w-auto">
              {t('subscribe')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
