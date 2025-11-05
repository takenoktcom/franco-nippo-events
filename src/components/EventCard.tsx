import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface EventCardProps {
  title: string;
  date: string;
  city: string;
  description: string;
  registrationLink: string;
  location: 'france' | 'japan';
  type: 'business' | 'cultural';
}

const EventCard = ({ title, date, city, description, registrationLink, location, type }: EventCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <CardHeader>
        <div className="flex gap-2 mb-3">
          <Badge variant={location === 'france' ? 'default' : 'secondary'} className="text-sm">
            {location === 'france' ? '🇫🇷' : '🇯🇵'} {location === 'france' ? 'France' : 'Japan'}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {t(type)}
          </Badge>
        </div>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2 text-foreground">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="font-medium">{city}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            {t('register')}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
